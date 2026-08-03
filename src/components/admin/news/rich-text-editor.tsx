"use client";

import "./editor/editor.css";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import EditorToolbar from "./editor/editor-toolbar";

interface RichTextEditorProps {
  value?: string;
  onChange?: (value: string) => void;
}

export default function RichTextEditor({
  value = "",
  onChange,
}: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [StarterKit],

    content: value,

    immediatelyRender: false,

    editorProps: {
      attributes: {
        class:
          // " min-h-[400px]  bg-background p-5 outline-none focus:ring-2 focus:ring-primary overflow-y-auto",
          "prose prose-lg max-w-none focus:outline-none",
      },
    },

    onUpdate({ editor }) {
      onChange?.(editor.getHTML());
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="rounded-xl border bg-background overflow-hidden">
      <div
        className="
        sticky
        top-0
        z-50
        border-b
        bg-background
      "
      >
        <EditorToolbar editor={editor} />
      </div>

      <EditorContent editor={editor} />
    </div>
  );
}
