import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      navbar
      <Button asChild>
        <Link href="/sign_in">Sign In</Link>
      </Button>
      <Button asChild>
        <Link href="/sign_up">Sign UP</Link>
      </Button>
    </div>
  );
};

export default Navbar;
