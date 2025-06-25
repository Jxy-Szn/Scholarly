import type React from "react";
import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export function SignUpVerificationForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="rounded-lg bg-primary/10 p-3">
          <Mail className="h-8 w-8 text-primary" />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">Verification Code</h1>
          <p className="text-muted-foreground text-sm">
            Enter your 6 digit verification Code sent to your email
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-3">
        <InputOTP maxLength={6}>
          <InputOTPGroup className="space-x-5">
            <InputOTPSlot
              index={0}
              className="rounded-md border-l border-accent/90 shadow-inner dark:shadow-primary/10"
            />
            <InputOTPSlot
              index={1}
              className="rounded-md border-l border-accent/90 shadow-inner dark:shadow-primary/10"
            />
            <InputOTPSlot
              index={2}
              className="rounded-md border-l border-accent/90 shadow-inner dark:shadow-primary/10"
            />
            <InputOTPSlot
              index={3}
              className="rounded-md border-l border-accent/90 shadow-inner dark:shadow-primary/10"
            />
            <InputOTPSlot
              index={4}
              className="rounded-md border-l border-accent/90 shadow-inner dark:shadow-primary/10"
            />
            <InputOTPSlot
              index={5}
              className="rounded-md border-l border-accent/90 shadow-inner dark:shadow-primary/10"
            />
          </InputOTPGroup>
        </InputOTP>
      </div>

      <Button type="submit" className="w-full">
        Verify
      </Button>
      <div className="text-center text-sm">
        Didn&apos;t recieve a code?{" "}
        <button
          type="button"
          className="text-primary underline-offset-4 hover:underline font-medium"
        >
          Resend
        </button>
      </div>
    </form>
  );
}
