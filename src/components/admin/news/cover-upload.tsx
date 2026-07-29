"use client";

import Image from "next/image";
import { ImagePlus } from "lucide-react";
import { useRef, useState } from "react";

interface CoverUploadProps {
  value?: string;
  onChange?: (url: string) => void;
}

export default function CoverUpload({ value, onChange }: CoverUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [preview, setPreview] = useState(value || "");
  const [uploading, setUploading] = useState(false);

  async function handleFile(file: File | null) {
    if (!file) return;

    setUploading(true);

    try {
      const formData = new FormData();

      formData.append("file", file);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        console.error(data);
        return;
      }

      setPreview(data.url);

      onChange?.(data.url);
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="space-y-4">
      <input
        ref={inputRef}
        hidden
        type="file"
        accept="image/*"
        onChange={(e) => handleFile(e.target.files?.[0] || null)}
      />

      {!preview ? (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="
          flex
          h-72
          w-full
          flex-col
          items-center
          justify-center
          rounded-xl
          border-2
          border-dashed
          border-muted-foreground/30
          bg-muted/20
          transition
          hover:border-primary
          hover:bg-muted
          "
        >
          <ImagePlus className="mb-4 text-muted-foreground" size={42} />

          <p className="font-medium">
            {uploading ? "Uploading..." : "Click to upload cover image"}
          </p>

          <p className="mt-2 text-sm text-muted-foreground">PNG, JPG or WEBP</p>
        </button>
      ) : (
        <div className="space-y-4">
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl border">
            <img
              src={preview}
              alt="Cover Preview"
              className="h-full w-full object-cover"
            />
          </div>

          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="text-sm font-medium text-primary hover:underline"
          >
            Change Image
          </button>
        </div>
      )}
    </div>
  );
}
