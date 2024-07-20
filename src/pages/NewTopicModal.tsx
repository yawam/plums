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
}

const formSchema = z.object({
  title: z.string().min(1, { message: "Topic title is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  imageUrl: z.string().min(1, { message: "ImageUrl is required" }),
  importance: z.enum(["LOW", "MEDIUM", "HIGH"]).optional(),
});

const NewTopicModal = ({ closeModal }: ModalProps) => {
  const [title, settitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      imageUrl: "",
      importance: "LOW",
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
    if (url) {
      setImageUrl(url);
      form.setValue("imageUrl", url);
    }
  };

  const router = useRouter();
  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("trying to submit", values);

    try {
      const response = await fetch("/api/topics", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // Handle successful submission (e.g., close modal, show success message)
        window.location.reload();
        toast.success("Topic Created");
        closeModal();
      } else {
        // Handle error
        toast.error("Topic Creation Failed");
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
              className="space-y-2 overflow-y-scroll"
            >
              <h2 className="text-lg font-bold">New Topic</h2>
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter topic title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Enter description" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="imageUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Import Image</FormLabel>
                    <FormControl>
                      {!imageUrl ? (
                        <FileUpload
                          onChange={handleFileUploadChange}
                          endpoint="topicCoverImage"
                        />
                      ) : (
                        <Image
                          src={imageUrl}
                          alt="Uploaded Preview"
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
              <FormField
                control={form.control}
                name="importance"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Importance</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select level of importance" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-slate-100">
                        <SelectItem value="LOW">LOW</SelectItem>
                        <SelectItem value="MEDIUM">MEDIUM</SelectItem>
                        <SelectItem value="HIGH">HIGH</SelectItem>
                      </SelectContent>
                    </Select>
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

export default NewTopicModal;
