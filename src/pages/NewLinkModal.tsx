'use client'

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
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Editor } from "@/components/Editor";

interface ModalProps {
    closeModal: () => void;
    topicId: string | undefined;
}

const formSchema = z.object({
    description: z.string().min(1, { message: "Description is required" }),
    url: z.string().min(1, { message: "Valid Link URL is required" }),
    topicId: z.string().min(1, { message: "Topic ID is required" }),
});

const NewLinkModal = ({ closeModal, topicId }: ModalProps) => {
    const [description, setDescription] = useState("");
    const [linkUrl, setLinkUrl] = useState("");
    const [showConfirmation, setShowConfirmation] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          description: "",
          url: "",
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
            setLinkUrl(url);
            form.setValue("url", url);
        }
    };

    const handleSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log("trying to create new link", values);
    
        try {
          const response = await fetch("/api/links", {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
              "Content-Type": "application/json",
            },
          });
    
          if (response.ok) {
            // Handle successful submission (e.g., close modal, show success message)
            window.location.reload();
            toast.success("Link Created");
            closeModal();
          } else {
            // Handle error
            toast.error("Link Creation Failed");
          }
        } catch (error) {
          console.error("An error occurred while submitting the link", error);
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
                  <h2 className="text-lg font-bold">New Image</h2>
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter Link description" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="url"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Link</FormLabel>
                        <FormControl>
                            <Editor {...field} />
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
                  This will close the new link creation. Continue?
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
}

export default NewLinkModal;