"use client";

import "./editor/editor.css";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
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
    extensions: [
      StarterKit,

      Image.configure({
        inline: false,
        allowBase64: false,
      }),
    ],

    content: value,

    immediatelyRender: false,

    editorProps: {
      attributes: {
        class: "prose prose-lg max-w-none min-h-[650px] p-8 focus:outline-none",
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
    <div className="bg-background">
      <div className="sticky top-0 z-30 border-b bg-background px-4 py-3">
        <EditorToolbar editor={editor} />
      </div>

      <EditorContent editor={editor} />
    </div>
  );
}
