"use client";
import { trpc } from "@/trpc/client";

import { Loader2, XCircle } from "lucide-react";
import React from "react";
import Image from "next/image";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
interface VerifyEmailProps {
  token: string;
}

const VerifyEmail = ({ token }: VerifyEmailProps) => {
  const { data, isLoading, isError } = trpc.auth.verifyEmail.useQuery({
    token,
  });

  if (isError) {
    return (
      <div className="flex flex-col items-center gap-2">
        <XCircle className="w-8 h-8 text-red-600" />
        <h3 className="font-semibold text-xl">There was a problem</h3>
        <p className="text-muted-foreground text-sm">
          Token Invalid or Expired please try again
        </p>
      </div>
    );
  }

  if (data?.success) {
    return (
      <div className="flex h-full flex-col items-center justify-center">
        <div className="relative mb-4 h-60 w-60 text-muted-foreground">
          <Image src="/hippo-email-sent.png" fill alt="hippo-sent-email" />
        </div>
        <h3 className="font-semibold text-2xl">You&apos;re all set</h3>
        <p className="text-muted-foreground text-center mt-1 mb-4 ">
          Thanks you for verifying your email
        </p>
        <Link className={buttonVariants()} href="/sign-in">
          Sign In
        </Link>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="animate-spin w-8 h-8 text-zinc-300" />
        <h3 className="font-semibold text-xl">Verifying ...</h3>
        <p className="text-muted-foreground text-sm">
          This won&apos;t take long
        </p>
      </div>
    );
  }
};

export default VerifyEmail;
