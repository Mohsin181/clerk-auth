 "use client"

import { SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import React from "react";

const Homepage = () => {
  return (
    <div>
      <nav className="flex w-[80%] h[13vh] items-center bg-blue mx-auto justify-between">

        <div className="flex items-center space-x-4">
          <SignedOut>
          
          </SignedOut>
          <SignInButton>
            <UserButton />
          </SignInButton>
        </div>
      </nav>
    </div>
  );
};

export default Homepage;
