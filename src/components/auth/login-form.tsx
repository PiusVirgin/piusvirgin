"use client";

import { useState, useTransition } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginForm() {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setError("");

    startTransition(async () => {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/admin/dashboard",
      });

      if (result?.error) {
        setError("Invalid email or password.");
        return;
      }

      router.push(result?.url ?? "/admin/dashboard");
      router.refresh();
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md rounded-3xl border bg-background p-8 shadow-lg"
    >
      <h1 className="text-3xl font-bold">
        Admin Login
      </h1>

      <p className="mt-2 text-muted-foreground">
        Sign in to continue.
      </p>

      <div className="mt-8 space-y-5">
        <Input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {error && (
        <p className="mt-4 text-sm text-destructive">
          {error}
        </p>
      )}

      <Button
        className="mt-8 w-full"
        disabled={isPending}
      >
        {isPending ? "Signing In..." : "Sign In"}
      </Button>
    </form>
  );
}
