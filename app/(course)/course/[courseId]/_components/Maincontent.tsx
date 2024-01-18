"use client";

import React from "react";
import { Button, Image } from "@nextui-org/react";

import { AlertOctagon } from "lucide-react";

interface MaincontentProps {
  title: string | undefined | null;
  description: string | undefined | null;
  imageUrl: string | undefined | null;
  price: number | undefined | null;
  createdAt: Date | undefined | null;
  updatedAt: Date | undefined | null;
  autherName: string | undefined | null;
  category: string | undefined | null;
}

export const Maincontent = ({
  title,
  description,
  imageUrl,
  price,
  createdAt,
  updatedAt,
  category,
  autherName,
}: MaincontentProps) => {
  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    return formattedDate;
  };
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-y-10 justify-center lg:justify-between items-start w-full">
      <div className="flex flex-col justify-center items-start space-y-4 w-[100vh] lg:w-[65%] mx-auto">
        <div className="text-[18px] text-purple-600 font-semibold">
          {category}
        </div>
        <h1 className="text-2xl font-bold text-white">{title}</h1>
        <p className="text-sm font-normal italic text-gray-400">
          {description}
        </p>
        <div className="text-sm">
          Created by{" "}
          <span className="text-purple-600 underline">{autherName}</span>
        </div>
        <div className="flex flex-row gap-x-2 items-center">
          <AlertOctagon className="h-4 w-4" />
          <span className="text-xs">
            Created At - {formatDate(createdAt as unknown as number)}
          </span>
        </div>
        <div className="flex flex-row gap-x-2 items-center">
          <AlertOctagon className="h-4 w-4" />
          <span className="text-xs">
            Udated At - {formatDate(updatedAt as unknown as number)}
          </span>
        </div>
        <Button
          size="md"
          variant="solid"
          className="w-[100vh] text-white bg-purple-700 lg:hidden"
        >
          Buy this course
        </Button>
      </div>
      <div className="flex flex-col justify-center items-center space-y-4 w-full lg:w-[35%]">
        <Image
          src={imageUrl!}
          alt="product"
          className="w-[100vh] lg:w-96 h-96 lg:h-52 object-cover object-right-top"
        />
        <Button
          size="md"
          variant="solid"
          className="lg:w-96 text-white bg-purple-700 hidden lg:block"
        >
          Buy this course
        </Button>
      </div>
    </div>
  );
};
