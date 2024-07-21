"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import Image from "next/image";
import { FileUpload } from "@/components/ui/file-upload";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ModalProps {
  closeModal: () => void;
  topicId: string;
  topic_title: string | null;
}

const OnDeleteModal = ({ closeModal, topicId, topic_title }: ModalProps) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const confirmCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setShowConfirmation(true);
    }
  };

  const handleConfirmYes = () => {
    closeModal();
  };

  const handleConfirmNo = () => {
    setShowConfirmation(false);
  };

  const handleCancelClick = () => {
    setShowConfirmation(true);
  };

  const handleDelete = async (topicId: string) => {
    try {
      const response = await fetch("/api/topics", {
        method: "DELETE",
        body: JSON.stringify({ topicId }),
      });

      const deletedTopic = await response.json();
      if (deletedTopic) {
        toast.success("Topic Deleted");
        closeModal();
        window.location.reload();
      }
    } catch (error) {}
  };

  return (
    <>
      <div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        onClick={confirmCloseModal}
      >
        <div className=" bg-white rounded-xl max-w-md mx-auto p-6 shadow-2xl">
          <h2 className="text-2xl font-bold mb-4">Delete Topic</h2>
          <div className="space-y-4">
            <p>Are you sure you want to delete this this topic?</p>
            <p className="font-semibold">
              Topic: <span>{topic_title}</span>{" "}
            </p>
          </div>

          <div className="flex justify-end mt-4">
            <Button onClick={closeModal}>No</Button>
            <Button onClick={() => handleDelete(topicId)} variant="yes">
              Yes
            </Button>
          </div>
        </div>
      </div>
      {showConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6">
            <p className="mb-4">
              This will close the new topic creation. Continue?
            </p>
            <div className="flex justify-end">
              <button
                onClick={handleConfirmYes}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg mr-2"
              >
                Yes
              </button>
              <button
                onClick={handleConfirmNo}
                className="px-4 py-2 bg-red-500 text-white rounded-lg"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OnDeleteModal;
