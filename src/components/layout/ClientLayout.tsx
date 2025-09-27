"use client";

import dynamic from "next/dynamic";
import SiderLoader from "@/components/layout/Sider/loading";

const Sider = dynamic(() => import("@/components/layout/Sider"), {
  ssr: false,
  loading: () => <SiderLoader />,
});

const Header = dynamic(() => import("@/components/layout/Header"));
const FriendProfileModal = dynamic(
  () => import("@/components/Modal/FriendProfileModal")
);
const UserSearchModal = dynamic(
  () => import("@/components/Modal/UserSearchModal")
);
const NewCommunityModal = dynamic(
  () => import("@/components/Modal/NewCommunityModal")
);
const NewChannelModal = dynamic(
  () => import("@/components/Modal/NewChannelModal")
);
const NewRoomModal = dynamic(() => import("@/components/Modal/NewRoomModal"));
const NftBuyModal = dynamic(() => import("@/components/Modal/NftBuyModal"));
const NftBuyConfirmModal = dynamic(
  () => import("@/components/Modal/NftBuyConfirmModal")
);
const NftListModal = dynamic(() => import("@/components/Modal/NftListModal"));
const NftUnListModal = dynamic(
  () => import("@/components/Modal/NftUnListModal")
);
const NftTransferModal = dynamic(
  () => import("@/components/Modal/NftTransferModal")
);
const CallActionModal = dynamic(
  () => import("@/components/Modal/CallActionModal")
);
const NewGroupModal = dynamic(() => import("@/components/Modal/NewGroupModal"));

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex-col flex w-full h-full bg-black bg-opacity-10">
        <Header />
        {children}
      </div>
      <FriendProfileModal />
      <UserSearchModal />
      <NewCommunityModal />
      <NewChannelModal />
      <NewRoomModal />
      <NftBuyModal />
      <NftBuyConfirmModal />
      <NftListModal />
      <NftUnListModal />
      <NftTransferModal />
      <CallActionModal />
      <NewGroupModal />
    </>
  );
}
