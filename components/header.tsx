'use client';

import { SignOutButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="border-border bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 border-b backdrop-blur">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="text-lg font-bold">ShortenLink</div>
        <SignOutButton redirectUrl="/">
          <Button variant="outline">Logout</Button>
        </SignOutButton>
      </div>
    </header>
  );
}
