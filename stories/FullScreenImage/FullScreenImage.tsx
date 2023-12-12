import React from "react";
import Image from "next/image";
import bkgImage from "./IMG_9705.jpg";

type FullScreenProps = {
  textAlign: "left" | "center" | "right";
};

const FullScreenImage = ({ textAlign = "left" }: FullScreenProps) => {
  function getTextAlignClass(textAlign) {
    switch (textAlign) {
      case "left":
        return "text-left";
      case "center":
        return "text-center";
      case "right":
        return "text-right";
      case "justify":
        return "text-justify";
      default:
        return "text-left"; // Default case, you can adjust as needed
    }
  }

  console.log(textAlignment(textAlign));
  return (
    <div className="relative h-screen w-screen flex items-center justify-center max-h-96">
      <Image
        src={bkgImage}
        fill
        alt="India Solomon"
        className="z-0 absolute object-cover object-top"
      />
      <div className={`max-w-md mx-auto z-10 absolute text-white`}>
        <h1>Center Content that can go here if it exist</h1>
        <p>
          Some dummy content but it shouldn't be more tha maybe 100 characters
          in length
        </p>
        <button className="bg-purple-300 text-center mx-auto w-52 shadow py-2">
          CTA Button
        </button>
      </div>
    </div>
  );
};

export default FullScreenImage;
