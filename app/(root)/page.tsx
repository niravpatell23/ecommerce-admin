"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";

import { UserButton } from "@clerk/nextjs";
import { Modal } from "@/components/ui/modal";

import { useStoreModal } from "@/hooks/use-store-modal";

const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);
  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);
  return null;

  return (
    <Modal title="Test" description="asds" isOpen onClose={() => {}}>
      children
    </Modal>
  );
};

export default SetupPage;
