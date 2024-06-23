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
import { Input } from "@/components/ui/input";

const NoteIdPage = ({
  params,
}: {
  params: { topicId: string; noteId: string };
}) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const router = useRouter();

  const formSchema = z.object({
    title: z.string().min(1, { message: "Topic title is required" }),
    content: z.string().min(1, { message: "Note Content is required" }),
    noteId: z.string().min(1, { message: "Note ID is required" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: notes[0]?.title,
      content: notes[0]?.content,
      noteId: notes[0]?.id,
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
          noteId: data.notes[0]?.id || "",
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
    const response = await fetch("/api/notes/noteId", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const data = await response.json();

    if (data) {
      router.refresh();
      toast.success("Note updated successfully!");
      setIsEditing(false);
      setIsEditingTitle(false);
    } else {
      toast.error("Error updating note.");
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-center my-2 w-full">
        {isEditingTitle ? (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)} // a submit by note id
              className="space-y-2"
            >
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Content</FormLabel> */}
                    <FormControl>
                      <Input
                        className="select-all w-[400px] bg-white "
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-end mt-4">
                <Button
                  variant="ghost"
                  type="button"
                  onClick={() => setIsEditingTitle(false)}
                >
                  Cancel
                </Button>
                <Button type="submit">Save</Button>
              </div>
            </form>
          </Form>
        ) : (
          <h2
            onDoubleClick={() => setIsEditingTitle(true)}
            className="text-4xl align-middle font-semibold mb-4 select-all"
          >
            {notes[0]?.title}
          </h2>
        )}

        <Button
          variant={"lArrowCircle"}
          size={"lArrowCircle"}
          onClick={router.back}
        >
          <i className="ri-arrow-left-circle-fill text-fuchsia-900 text-[90px]"></i>
        </Button>
      </div>
      <div className="flex h-full w-full justify-center max-w-[80%] my-2 mx-auto border-neutral-300 border-2 rounded-xl relative shadow-xl shadow-fuchsia-900">
        {!isEditing && (
          <div className="absolute top-2 right-2 cursor-pointer transition ease-linear hover:bg-black hover:bg-opacity-50 p-2 hover:shadow-xl rounded-xl">
            <FaPencil
              size={20}
              onClick={() => setIsEditing(true)} // a delete by note id. remember to add to recently deleted for all delete functions
            />
          </div>
        )}
        <div className="my-6 w-[95%]">
          {isEditing ? (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)} // a submit by note id
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
                    variant="ghost"
                    type="button"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit">Save</Button>
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
