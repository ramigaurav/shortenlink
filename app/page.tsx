"use client";

import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && user) {
      router.push("/dashboard");
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
            <div className="rounded-full bg-slate-900 px-4 py-1 text-sm uppercase tracking-[0.3em] text-slate-400">
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
      </div>
    </div>
  );
}
