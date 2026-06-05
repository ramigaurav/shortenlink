'use client';

import { SignInButton, SignUpButton } from '@clerk/nextjs';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && user) {
      router.push('/dashboard');
    }
  }, [user, isLoaded, router]);

  if (isLoaded && user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-16">
        <div className="w-full rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-2xl shadow-black/20 backdrop-blur-2xl">
          <div className="flex flex-col items-center gap-8 text-center">
            <div className="rounded-full bg-slate-900 px-4 py-1 text-sm tracking-[0.3em] text-slate-400 uppercase">
              Shorten Link
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Simplify links. Grow clicks.
              </h1>
              <p className="mx-auto max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Create short, memorable URLs in seconds and manage your links
                with fast analytics, custom redirects, and a clean dashboard.
              </p>
            </div>
            <div className="flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <SignUpButton mode="modal">
                <button className="inline-flex h-12 min-w-[160px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">
                  Sign up
                </button>
              </SignUpButton>
              <SignInButton mode="modal">
                <button className="inline-flex h-12 min-w-[160px] items-center justify-center rounded-full border border-white/20 bg-transparent px-6 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5">
                  Sign in
                </button>
              </SignInButton>
            </div>
          </div>
        </div>

        {/* How it works section */}
        <div className="mt-20 w-full">
          <h2 className="mb-12 text-center text-3xl font-semibold text-white">
            How it works
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Step 1 */}
            <div className="rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition hover:bg-white/10">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 font-semibold text-white">
                1
              </div>
              <h3 className="mb-3 text-lg font-semibold text-white">
                Paste your link
              </h3>
              <p className="text-sm text-slate-300">
                Paste any long URL into our dashboard. No sign-ups required to
                start.
              </p>
              <div className="mt-4 rounded border border-white/5 bg-slate-900/50 p-3 text-xs text-slate-400">
                Example: https://www.example.com/very/long/url/path/to/page
              </div>
            </div>

            {/* Step 2 */}
            <div className="rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition hover:bg-white/10">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 font-semibold text-white">
                2
              </div>
              <h3 className="mb-3 text-lg font-semibold text-white">
                Get a short URL
              </h3>
              <p className="text-sm text-slate-300">
                Instantly generate a memorable short link that's easy to share
                across any platform.
              </p>
              <div className="mt-4 rounded border border-white/5 bg-slate-900/50 p-3 text-xs text-slate-400">
                Example: slink.io/abc123
              </div>
            </div>

            {/* Step 3 */}
            <div className="rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition hover:bg-white/10">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 font-semibold text-white">
                3
              </div>
              <h3 className="mb-3 text-lg font-semibold text-white">
                Track & Analyze
              </h3>
              <p className="text-sm text-slate-300">
                Monitor clicks, traffic sources, and user engagement with
                detailed real-time analytics.
              </p>
              <div className="mt-4 rounded border border-white/5 bg-slate-900/50 p-3 text-xs text-slate-400">
                View: clicks, referrers, locations, devices
              </div>
            </div>
          </div>
        </div>

        {/* Features section */}
        <div className="mt-20 w-full">
          <div className="rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <h3 className="mb-6 text-xl font-semibold text-white">
              Powerful features included
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <div className="mt-1 text-green-400">✓</div>
                <div>
                  <p className="font-medium text-white">Custom URLs</p>
                  <p className="text-sm text-slate-400">
                    Create branded short links with custom aliases
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 text-green-400">✓</div>
                <div>
                  <p className="font-medium text-white">Advanced Analytics</p>
                  <p className="text-sm text-slate-400">
                    Track clicks, sources, and visitor details
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 text-green-400">✓</div>
                <div>
                  <p className="font-medium text-white">Link Management</p>
                  <p className="text-sm text-slate-400">
                    Organize, edit, and manage all your links
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 text-green-400">✓</div>
                <div>
                  <p className="font-medium text-white">QR Codes</p>
                  <p className="text-sm text-slate-400">
                    Generate QR codes for your shortened links
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
