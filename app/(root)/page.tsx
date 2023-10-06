"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";

import { UserButton } from "@clerk/nextjs";

// import { useStoreModal } from "@/hooks/use-store-modal";

const SetupPage = () => {
  // const onOpen = useStoreModal((state) => state.onOpen);
  // const isOpen = useStoreModal((state) => state.isOpen);
  // useEffect(() => {
  //   if (!isOpen) {
  //     onOpen();
  //   }
  // }, [isOpen, onOpen]);
  // return null;

  return (
    <div>
      {" "}
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default SetupPage;
