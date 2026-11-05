import type { Metadata } from 'next';
import { ClerkProvider, Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import { Suspense } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Benefit Tracker',
  description: 'Keep track of your credit card perks',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en" className="h-full antialiased">
        <body className="min-h-full flex flex-col bg-gray-100 font-sans">
          
          <header className="flex justify-between items-center p-6 bg-white border-b border-gray-200 shadow-sm">
            <div>
              <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                Benefit Tracker
              </h1>
            </div>
            
            <Suspense>
              <Show when="signed-out">
                <div className="flex gap-4">
                  <SignInButton mode="modal">
                    <button className="text-blue-600 font-medium text-sm px-4 py-2 hover:bg-blue-50 rounded-full transition-colors">
                      Sign In
                    </button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <button className="bg-blue-600 text-white rounded-full font-medium text-sm px-5 py-2 cursor-pointer hover:bg-blue-700 transition-colors">
                      Sign Up
                    </button>
                  </SignUpButton>
                </div>
              </Show>
              <Show when="signed-in">
                <UserButton />
              </Show>
            </Suspense>
          </header>

          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}