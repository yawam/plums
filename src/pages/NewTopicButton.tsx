"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogContent, AlertDialogTrigger, AlertDialogTitle, AlertDialogDescription } from "@/components/ui/alert-dialog";
import NewNewTopicModal from "./NewNewTopicModal";
import VisuallyHidden from "@/components/ui/visually-hidden";
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
            <VisuallyHidden>
                <AlertDialogTitle>New Sub-Topic</AlertDialogTitle>
                <AlertDialogDescription>This creates a new sub-topic</AlertDialogDescription>
            </VisuallyHidden>
            <NewNewTopicModal closeModal={() => setIsOpen(false)} parentID={topicId} />
        </AlertDialogContent>
        </AlertDialog>

    </div>
  );
};

export default NewTopicButton;