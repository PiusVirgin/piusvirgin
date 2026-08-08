"use client";

import { useRef, useState } from "react";
import { ImagePlus } from "lucide-react";
import { Editor } from "@tiptap/react";

interface Props {
  editor: Editor;
}

export default function ImageUploadButton({ editor }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

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

      editor
        .chain()
        .focus()
        .setImage({
          src: data.url,
        })
        .createParagraphNear()
        .run();
    } finally {
      setUploading(false);
    }
  }

  return (
    <>
      <input
        hidden
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={(e) => handleFile(e.target.files?.[0] || null)}
      />

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="
          flex
          items-center
          gap-2
          rounded-lg
          px-3
          py-2
          transition
          hover:bg-muted
        "
      >
        <ImagePlus size={18} />

        {uploading ? "Uploading..." : "Image"}
      </button>
    </>
  );
}
