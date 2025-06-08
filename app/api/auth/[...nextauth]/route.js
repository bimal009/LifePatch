// app/api/auth/[...nextauth]/route.js
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { connectDB } from '@/lib/mongoose';
import User from '@/lib/models/user.model';
import { getSession } from 'next-auth/next';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        await connectDB();
        
        // Check if user exists
        const existingUser = await User.findOne({ email: user.email });
        
        if (!existingUser) {
          // Create new user with null role
          await User.create({
            name: user.name,
            email: user.email,
            image: user.image,
            role: null, // Default role is now null
            emailVerified: new Date()
          });
        }
        
        return true;
      } catch (error) {
        console.error('Error in signIn callback:', error);
        return false;
      }
    },
    async session({ session, token }) {
      try {
        await connectDB();
        
        // Get user from database to include role
        const user = await User.findOne({ email: session.user.email });
        
        if (user) {
          session.user.role = user.role;
          session.user.id = user._id.toString();
        }
        
        return session;
      } catch (error) {
        console.error('Error in session callback:', error);
        return session;
      }
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async redirect({ url, baseUrl }) {
      // If the user has no role, redirect to role selection page
      if (url.startsWith(baseUrl)) {
        const session = await getSession();
        if (session?.user && !session.user.role) {
          return `${baseUrl}/auth/registration`;
        }
      }
      return url;
    }
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
    newUser: '/auth/select-role', // Redirect new users to role selection
  },
  session: {
    strategy: 'jwt',
  },
});

export { handler as GET, handler as POST };
