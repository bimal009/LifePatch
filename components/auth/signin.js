"use client";
import React from 'react';
import { Heart, Users, Shield, Zap } from 'lucide-react';
import { signIn } from "next-auth/react";

export default function SignInPage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Logo and Header */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="relative">
              <Heart className="h-12 w-12 text-red-500 fill-current" />
              <Zap className="h-6 w-6 text-blue-500 absolute -top-1 -right-1" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">LifePatch</h1>
          <p className="text-gray-600 text-sm">AI-Driven Organ Donor Connection Network</p>
        </div>

        {/* Main Sign In Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 p-8 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-semibold text-gray-800">Welcome Back</h2>
            <p className="text-gray-600">
              Sign in to continue saving lives through smart organ matching
            </p>
          </div>
          
          <div className="space-y-6">
            {/* Google Sign In Button */}
            <button
              onClick={() => signIn("google", { callbackUrl: "/" })}
              className=" flex justify-center items-center w-full h-12 bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </button>

            {/* Features Preview */}
            <div className="space-y-4 pt-6 border-t border-gray-100">
              <h3 className="text-sm font-medium text-gray-700 text-center">What makes LifePatch special?</h3>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center space-x-3 p-2 rounded-lg bg-blue-50">
                  <Zap className="h-5 w-5 text-blue-600" />
                  <span className="text-sm text-gray-700">AI-powered smart matching</span>
                </div>
                <div className="flex items-center space-x-3 p-2 rounded-lg bg-green-50">
                  <Users className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-700">Community-driven network</span>
                </div>
                <div className="flex items-center space-x-3 p-2 rounded-lg bg-purple-50">
                  <Shield className="h-5 w-5 text-purple-600" />
                  <span className="text-sm text-gray-700">Secure & anonymous</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center space-y-2">
          <p className="text-xs text-gray-500">
            By signing in, you agree to help save lives through organ donation awareness
          </p>
          <div className="flex items-center justify-center space-x-1 text-xs text-gray-400">
            <Heart className="h-3 w-3 fill-current text-red-400" />
            <span>Every connection matters</span>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      </div>
    </div>
  );
}