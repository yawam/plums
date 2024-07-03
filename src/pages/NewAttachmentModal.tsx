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
import { Editor } from "@/components/Editor";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface ModalProps {
    closeModal: () => void;
    topicId: string | undefined;
}

const formSchema = z.object({
fileUrl: z.string().min(1, { message: "File url is required" }),
description: z.string().min(1, { message: "File description is required" }),
topicId: z.string().min(1, { message: "Topic ID is required" }),
});

const NewAttachmentModal = ({ closeModal, topicId }: ModalProps) => {
    const [fileUrl, setFileUrl] = useState('');
    const [description, setDescription] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          fileUrl: "",
          description: "",
          topicId: topicId,
        },
      });

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

      const handleFileUploadChange = (url: string | undefined) => {
        if(url) {
            setFileUrl(url);
            form.setValue("fileUrl", url);
        }
      };

      const handleSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log("trying to create new attachment", values);
    
        try {
          const response = await fetch("/api/attachments", {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
              "Content-Type": "application/json",
            },
          });
    
          if (response.ok) {
            // Handle successful submission (e.g., close modal, show success message)
            window.location.reload();
            toast.success("Attachment Created");
            closeModal();
          } else {
            // Handle error
            toast.error("Attachment Creation Failed");
          }
        } catch (error) {
          console.error("An error occurred while submitting the topic", error);
        }
    };

    const handleCancelClick = () => {
        setShowConfirmation(true);
    };

    return (
        <>
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            onClick={confirmCloseModal}
          >
            <div className=" bg-white rounded-xl max-w-md mx-auto p-6 shadow-2xl">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(handleSubmit)}
                  className="space-y-2"
                >
                  <h2 className="text-lg font-bold">New Attachment</h2>
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter Attachment description" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="fileUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Import Attachment</FormLabel>
                        <FormControl>
                          {!fileUrl ? (
                            <FileUpload
                                onChange={handleFileUploadChange}
                                endpoint="topicCoverImage"
                            />
                          ) : (
                            <Image
                                src={fileUrl}
                                alt={description}
                                className="max-w-full h-auto"
                                width={300}
                                height={300}
                            />
                          )}
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
    
                  <div className="flex justify-end mt-4">
                    <Button
                      type="button"
                      onClick={handleCancelClick}
                      className={cn("px-4 py-2 bg-red-500 text-white rounded-lg")}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
                    >
                      Save
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
          {showConfirmation && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white rounded-lg p-6">
                <p className="mb-4">
                  This will close the new attachment creation. Continue?
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

export default NewAttachmentModal;