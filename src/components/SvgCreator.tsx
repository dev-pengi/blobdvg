"use client";
import Image from "next/image";
import { FC } from "react";

const SvgCreator: FC = () => {
  //   const createdSvg = generateBlobSVG("#ff0000");
  return (
    <section>
      <h1 className="capitalize text-center text-3xl font-black">
        create beautiful svg blob shapes
      </h1>
      {/* <div dangerouslySetInnerHTML={{ __html: createdSvg }} />; */}
    </section>
  );
};

export default SvgCreator;
