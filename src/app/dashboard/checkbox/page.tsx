"use client";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

export default function CheckBoxPage() {
  const [terms, setterms] = useState(false);
  return (
    <div className="items-top flex space-x-2">
      <Checkbox
        checked={terms}
        onCheckedChange={(value: boolean) => setterms(value)}
        id="terms1"
      />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
        <p className="text-sm text-muted-foreground">
          You agree to our Terms of Service and Privacy Policy.
        </p>
        <>
          {terms ? (
            <Badge variant={"info"}> Great! </Badge>
          ) : (
            <Badge variant={"destructive"}> Warning! </Badge>
          )}
        </>
      </div>
    </div>
  );
}
