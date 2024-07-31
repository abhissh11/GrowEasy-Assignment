import React from "react";

export default function Intro() {
  return (
    <div className="flex flex-col items-center mx-8 md:mx-32 my-20 gap-20">
      <h1 className="text-3xl font-bold text-gray-50">GrowEasy-Banners</h1>
      <div className="flex flex-col gap-5 justify-center items-center max-w-[70%]">
        <h2 className="text-xl font-bold ">What is BannerBot?</h2>
        <p>
          BannerBot is an instant AI-Powered promotional banner generator. With
          BannerBot, you can create professional and eye-catching banners in
          just a few clicks.
        </p>
        <p>
          Our easy-to-use interface and customizable options allow you to create
          stunning banners that perfectly align with your brand and message.
          Whether you need landscape (16:9), square (1:1), or portrait (3:4)
          banners, we've got you covered.
        </p>
      </div>
    </div>
  );
}
