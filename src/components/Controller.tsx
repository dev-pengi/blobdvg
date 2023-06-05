"use client";
import { FC } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import threeangeles from "../../public/3angle.svg";
import angeles from "../../public/angles.svg";
import circle from "../../public/circle.svg";
import circleEnd from "../../public/circle-end.svg";
import download from "../../public/download.svg";
import copy from "../../public/copy.svg";
import Image from "next/image";

interface Props {
  handleAngleChange: (value: number | number[]) => void;
  handleCircleChange: (value: number | number[]) => void;
}

const Controller: FC<Props> = ({ handleAngleChange, handleCircleChange }) => {
  return (
    <div>
      <div className="bg-white shadow-lg rounded-lg px-7 py-6 w-[98%] max-w-[400px] md:min-w-[400px]">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-center gap-3">
            <Image src={threeangeles} alt="threeangeles" />
            <Slider
              step={1}
              defaultValue={4}
              min={3}
              max={50}
              handleStyle={{
                background: "#7f7f7f",
                opacity: "1",
                border: "none",
              }}
              trackStyle={{ backgroundColor: "#9f9f9f" }}
              onChange={handleAngleChange}
            />
            <Image src={angeles} alt="angeles" />
          </div>
          <div className="flex items-center justify-center gap-3">
            <Image src={circleEnd} alt="circleEnd" />
            <Slider
              step={1}
              defaultValue={10}
              min={1}
              max={10}
              handleStyle={{
                background: "#7f7f7f",
                opacity: "1",
                border: "none",
              }}
              trackStyle={{ backgroundColor: "#9f9f9f" }}
              onChange={handleCircleChange}
            />
            <Image src={circle} alt="circle" />
          </div>
        </div>

        <div className="flex items-center justify-center gap-9 mt-5">
          <button className="px-3 py-2 shadow-md flex items-center gap-2 rounded-md duration-300 hover:shadow-xl hover:-translate-y-[4px]">
            <Image src={download} alt="download" />
            Svg
          </button>
          <button className="px-3 py-2 shadow-md flex items-center gap-2 rounded-md duration-300 hover:shadow-xl hover:-translate-y-[4px]">
            <Image src={download} alt="download" />
            Png
          </button>
          <button className="px-3 py-2 shadow-md flex items-center gap-2 rounded-md duration-300 hover:shadow-xl hover:-translate-y-[4px]">
            <Image src={copy} alt="copy" />
            Svg
          </button>
        </div>
      </div>
    </div>
  );
};

export default Controller;
