"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Note } from "@prisma/client";
import { Preview } from "@/components/preview";
import { FaPencil } from "react-icons/fa6";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Editor } from "@/components/Editor";
import toast from "react-hot-toast";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const NoteIdPage = ({
  params,
}: {
  params: { topicId: string; noteId: string };
}) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();

  const formSchema = z.object({
    title: z.string().min(1, { message: "Topic title is required" }),
    content: z.string().min(1, { message: "Note Content is required" }),
    topicId: z.string().min(1, { message: "Topic ID is required" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: notes[0]?.title,
      content: notes[0]?.content,
      topicId: notes[0]?.topicId,
    },
  });

  useEffect(() => {
    async function fetchNoteByNoteId(noteId: string) {
      try {
        const response = await fetch(`/api/notes/noteId?noteId=${noteId}`);
        const data = await response.json();
        setNotes(data.notes);
        form.reset({
          title: data.notes[0]?.title || "",
          content: data.notes[0]?.content || "",
          topicId: data.notes[0]?.topicId || "",
        });
        console.log(data);
      } catch (error) {
        console.error("Error fetching note:", error);
      }
    }

    if (params.noteId) {
      fetchNoteByNoteId(params.noteId);
    }
  }, [params.noteId, form]);

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("Submitted values", values);
    // Add your submit logic here
    setIsEditing(false);
    toast.success("Note updated successfully!");
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-center my-2">
        <h2 className="text-4xl align-middle font-semibold mb-4">
          {notes[0]?.title}
        </h2>
        <Button
          variant={"lArrowCircle"}
          size={"lArrowCircle"}
          onClick={router.back}
        >
          <i className="ri-arrow-left-circle-fill text-fuchsia-900 text-[90px]"></i>
        </Button>
      </div>
      <div className="flex h-full w-full justify-center max-w-[90%] my-2 mx-auto border-neutral-300 border-2 rounded-xl relative">
        <div className="absolute top-2 right-2 cursor-pointer transition ease-linear hover:bg-black hover:bg-opacity-50 p-2 hover:shadow-xl rounded-xl">
          <FaPencil
            size={20}
            onClick={() => setIsEditing(true)} // a delete by note id. remember to add to recently deleted for all delete functions
          />
        </div>
        <div className="my-6">
          {isEditing ? (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(() => {})}
                className="space-y-2"
              >
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      {/* <FormLabel>Content</FormLabel> */}
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
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg"
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
          ) : (
            <Preview value={notes[0]?.content} />
          )}
        </div>
      </div>
    </div>
  );
};

export default NoteIdPage;
