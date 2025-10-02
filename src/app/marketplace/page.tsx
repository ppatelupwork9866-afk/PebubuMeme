"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useWallet } from "@/providers/WalletProvider";
import axios from "axios";
import { toast } from "react-toastify";

import Recommend from "@/components/home/Recommand";
import LastCommunity from "@/components/home/LastCommunity";
import Slider from "@/components/home/Slider";

const NewNFTS = dynamic(() => import("@/components/marketplace/NewNFTs"));
const staticNFTs = [
  {
    nft: {
      name: "To The Moon",
      cached_image_uri: "/StaticNFTs/To_The_Moon.png",
    },
    price: "0.8",
    nft_address: "static2",
  },
  {
    nft: {
      name: "Meme Overlord Pebubu - Cased",
      cached_image_uri: "/StaticNFTs/MemeOverlordPebubuCased.png",
    },
    price: "0.5",
    nft_address: "static1",
  },
  {
    nft: {
      name: "Glitched Matrix Pebubu - Cased",
      cached_image_uri: "/StaticNFTs/GlitchedMatrixPebubuCased.png",
    },
    price: "0.5",
    nft_address: "static3",
  },
  {
    nft: {
      name: "Liquidity Monster Pebubu - Cased",
      cached_image_uri: "/StaticNFTs/LiquidityMonsterPebubuCased.png",
    },
    price: "0.8",
    nft_address: "static4",
  },
  {
    nft: {
      name: "Legendary Chaos Pebubu - Cased",
      cached_image_uri: "/StaticNFTs/LegendaryChaosPebubuCased.png",
    },
    price: "0.5",
    nft_address: "static5",
  },
  {
    nft: {
      name: "HODL Monk Pebubu - Cased",
      cached_image_uri: "/StaticNFTs/HODLMonkPebubuCased.png",
    },
    price: "0.8",
    nft_address: "static6",
  },
];
const Page = () => {
  const { network, walletID, setActiveNFTs } = useWallet();

  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    const xKey = String(process.env.NEXT_PUBLIC_API_KEY || "");
    const endPointV2 = process.env.NEXT_PUBLIC_API_V2_ENDPOINT;
    const marketplaceAddress = process.env.NEXT_PUBLIC_MARKETPLACE_ADDRESS;

    const nftUrl = `${endPointV2}marketplace/active_listings?network=${network}&marketplace_address=${marketplaceAddress}&sort_by=list_date&sort_order=asc`;

    axios
      .get(nftUrl, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": xKey,
        },
      })
      .then((res) => {
        if (res.data.success === true) {
          setNfts(res.data.result.data);
          setActiveNFTs(res.data.result.data);
        } else {
          setNfts([]);
          toast.info("No NFTs");
        }
      })
      // Catch errors if any
      .catch((err) => {
        toast.warning(err.response.data.message);
        setNfts([]);
      });
  }, [walletID]);

  return (
    <>
      <div className="w-full h-full  mobile:px-[50px] px-[20px] pt-[30px] pb-[50px] overflow-auto prevent-select">
        <div className="w-full h-full relative overflow-auto flex flex-col gap-[20px]">
          <p className="text-[25px]">Explore NFTs</p>
          <div
            className="w-full overflow-auto grid grid-cols-4 gap-[30px]"
            style={{ marginBottom: "5rem" }}
          >
            {staticNFTs.map((item, index) => (
              <div key={index}>
                <NewNFTS item={item} />
              </div>
            ))}
          </div>
          {/* <div className="w-full h-full mt-[20px] relative overflow-auto">
            {nfts.length > 0 ? (
              <div className="w-full overflow-auto grid grid-cols-4 gap-[30px] absolute">
                {nfts.map((item, index) => (
                  <div key={index}>
                    <NewNFTS item={item} />
                  </div>
                ))}
              </div>
            ) : (
              <p className="w-full h-full flex justify-center items-center text-[25px]">
                No NFTs
              </p>
            )}
          </div> */}
        </div>
      </div>
    </>
  );
};
export default Page;
