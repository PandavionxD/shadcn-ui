"use client";
import { Title } from "@/components/Title";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const smallDate = date?.toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
  return (
    <div className="flex flex-wrap place-content-center gap-8">
      <div className="grid place-content-center">
        <Title titulo={"Información"} />
        <div className="border-b">
          <p>{smallDate}</p>
        </div>
      </div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        disabled={(date)=>date.getDay()===0 || date.getDay() ===6 }
        className="rounded-md border"
      />
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        disabled={(date)=> date < new Date()}
        className="rounded-md border"
      />
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        disabled={(date)=> date > new Date()}
        className="rounded-md border"
      />
    </div>
  );
}
