"use client";
import React, { useEffect, useState } from "react";
import ImageComponent from "@/components/shared/ImageComponent/demo";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Luckiest_Guy } from "next/font/google";

const luckiestGuy = Luckiest_Guy({
  subsets: ["latin"],
  weight: "400",
});

const _renderLinkItem = (props: any) => {
  const router = useRouter();
  const handleNavigate = (_url: string) => {
    router.push(_url);
  };
  // const [loading, setLoading] = useState<boolean>(true);
  return (
    <li
      onClick={() => handleNavigate(props._url)}
      className={`relative flex items-center py-3 justify-center font-extrabold
          cursor-pointer text-sm rounded-lg  ${
            props._url === "/home" && props._url === props.pathname
              ? "bg-[#ffe502] text-black px-5"
              : //  ? "bg-gradient-to-t from-[#d30d0d] via-[#ee7b4e] to-[#a07272] text-[#67ffff] border-none px-5"
              props._url !== "/home" && props.pathname.includes(props._url)
              ? "bg-[#ffe502] text-black px-5"
              : //  ? "bg-gradient-to-t from-[#d30d0d] via-[#ee7b4e] to-[#a07272] text-[#67ffff] border-none px-5"
                "text-white px-5"
          }`}
    >
      <div className={`text-lg ${luckiestGuy.className}`}>{props._name}</div>
    </li>
  );
};
export default _renderLinkItem;
