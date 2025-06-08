import { connectDB } from '@/lib/mongoose';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const conn = await connectDB();
    
    // Check if we can perform a simple operation
    const collections = await conn.connection.db.listCollections().toArray();
    
    return NextResponse.json({
      status: 'success',
      message: 'Database connected successfully',
      details: {
        isConnected: conn.connection.readyState === 1,
        databaseName: conn.connection.db.databaseName,
        collections: collections.map(c => c.name),
        uri: process.env.MONGODB_URI ? 'URI is set' : 'URI is not set'
      }
    });
  } catch (error) {
    console.error('Database connection error:', error);
    return NextResponse.json({
      status: 'error',
      message: error.message,
      details: {
        isConnected: false,
        uri: process.env.MONGODB_URI ? 'URI is set' : 'URI is not set'
      }
    }, { status: 500 });
  }
} 