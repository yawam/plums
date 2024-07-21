"use client";

import toast from "react-hot-toast";
import { UploadDropzone } from "@/lib/uploadthing";
// import { ourFileRouter } from "@/api/uploadthing/core";
import { ourFileRouter } from "@/app/api/uploadthing/core";

interface FileUploadProps {
  onChange: (url?: string, type?: string) => void;
  endpoint: keyof typeof ourFileRouter;
}

export const FileUpload = ({ onChange, endpoint }: FileUploadProps) => {
  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res: {
        url: any; type: any; 
}[]) => {
        const url = res[0].url;
        const type = res[0].type;
        onChange(url, type);
      }}
      onUploadError={(error: Error) => {
        toast.error("Error Uploading File");
      }}
    />
  );
};
