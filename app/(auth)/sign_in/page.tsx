import { ArrowLeft } from "lucide-react";
import { SignInForm } from "@/components/SignInForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      {/* LeftSide */}
      <div className="bg-primary relative hidden lg:block">
        <Link
          href="/"
          className="absolute top-8 left-8 flex items-center justify-center"
        >
          <ArrowLeft className="text-background" width={30} height={30} />
        </Link>
      </div>
      {/* Right Side */}
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignInForm />
          </div>
        </div>
      </div>
    </div>
  );
}
