"use client";

import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/nextjs";
import { ArrowRightIcon } from "lucide-react";

export function GetStartedButton() {
    return (
        <SignUpButton>
            <Button className="text-lg p-6 rounded-xl flex gap-2">
                Get started for free <ArrowRightIcon className="size-5" />
            </Button>
        </SignUpButton>
    );
}