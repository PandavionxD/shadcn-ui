"use client";

import { Title } from "@/components/Title";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

export default function SliderPage() {
  const [valueSlider, setValueSlider] = useState(15);
  const [valueSlider1, setValueSlider1] = useState([10, 15]);

  return (
    <>
      <div className="grid grid-cols-1 gap-3">
        <Title titulo={"Slider Component"} />
        <p>Value Slider : {valueSlider}</p>
        <Slider
          defaultValue={[valueSlider]}
          onValueChange={(value) => setValueSlider(value[0])}
          max={100}
          step={1}
        />
      </div>
      <div className="grid grid-cols-1 gap-3">
        <Title titulo={"Slider Component 2 valores"} />
        <p>Value Slider : {valueSlider1.join(" - ")}</p>
        <Slider
          defaultValue={valueSlider1}
          onValueChange={(value) => setValueSlider1(value)}
          max={100}
          step={1}
        />
      </div>
    </>
  );
}
