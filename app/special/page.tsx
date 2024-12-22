'use client';

import ProtectedRoute from '@/components/auth/protected-route';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/lib/auth';
import { ShieldCheck } from 'lucide-react';

export default function SpecialPage() {
  const { logout } = useAuth();

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-lg shadow-lg p-8">
              <div className="flex items-center justify-center mb-6">
                <ShieldCheck className="w-12 h-12 text-primary" />
              </div>
              
              <h1 className="text-3xl font-bold text-center mb-6">
                Protected Special Page
              </h1>
              
              <p className="text-muted-foreground text-center mb-8">
                This is a protected page that only authenticated users can access.
              </p>

              <div className="flex justify-center">
                <Button
                  variant="destructive"
                  onClick={logout}
                >
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}