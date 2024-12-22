'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useAuth } from '@/lib/auth';
import { LogIn } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = () => {
    login();
    router.push('/special');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8">
        <div className="flex flex-col items-center space-y-6">
          <LogIn className="w-12 h-12 text-primary" />
          <h1 className="text-2xl font-bold text-center">Login</h1>
          <p className="text-muted-foreground text-center">
            Login to access the special page
          </p>
          <Button
            className="w-full"
            onClick={handleLogin}
          >
            Login
          </Button>
        </div>
      </Card>
    </div>
  );
}