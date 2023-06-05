"use client";
import { useEffect, useState } from "react";
import { FC } from "react";
import Controller from "./Controller";
import { SvgBlob } from "react-svg-blob";
import { contentPadding } from "@/styles";

const SvgCreator: FC = () => {
  const [angels, setAngels] = useState(3);
  const [circle, setCircle] = useState(9);

  useEffect(() => {
    console.log(angels);
  }, [angels]);
  return (
    <section>
      <h1 className="capitalize text-center text-3xl font-black">
        create beautiful svg blob shapes
      </h1>
      <div
        className={`${contentPadding} w-full max-w-[1100px] mx-auto mt-16 flex md:flex-row flex-col-reverse md:gap-1 gap-7 items-center justify-between`}
      >
        <SvgBlob
          shapeProps={{ growth: circle, edges: angels }}
          variant="gradient"
          colors={["#1FFBE8", "#34FF80"]}
          className="w-[97%] max-w-[400px]"
          width={400}
          height={400}
        />
        <Controller
          handleAngleChange={(value) => setAngels(value as number)}
          handleCircleChange={(value) => setCircle(value as number)}
        />
      </div>
    </section>
  );
};

export default SvgCreator;
