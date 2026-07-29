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
          " min-h-[400px]  bg-background p-5 outline-none focus:ring-2 focus:ring-primary overflow-y-auto",
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
    <div className="rounded-xl border bg-background">
      <EditorToolbar editor={editor} />

      <div className="max-h-[700px] overflow-y-auto">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
