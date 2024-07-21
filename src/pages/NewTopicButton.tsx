"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogContent, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import NewNewTopicModal from "./NewNewTopicModal";
import "remixicon/fonts/remixicon.css";

interface NewTopicButtonProps {
    topicId: string;
}



const NewTopicButton = ({ topicId }: NewTopicButtonProps ) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
        <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogTrigger asChild>
            <Button variant={"plusCircle"} size={"plusCircle"}>
                <i className="ri-add-circle-fill text-fuchsia-900 text-[90px]" />
            </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="p-0 border-none bg-transparent m-0 shadow-none">
            <NewNewTopicModal closeModal={() => setIsOpen(false)} parentID={topicId} />
        </AlertDialogContent>
        </AlertDialog>

    </div>
  );
};

export default NewTopicButton;