"use client"
import { Title } from "@/components/Title";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useState } from "react";

export default function InputOTPPage() {

    const [value, setvalue] = useState("")

  return (
    <div className="flex-col flex h-[150px] gap-4 place-items-center " >
        <Title titulo={"Input OTP"} />

      <InputOTP maxLength={6} value={value} onChange={value=>{setvalue(value)}} >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <p>
        Valor : {value}
      </p>
    </div>
  );
}
