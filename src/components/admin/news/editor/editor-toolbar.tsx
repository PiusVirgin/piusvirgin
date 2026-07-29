"use client";

import { Editor } from "@tiptap/react";

import {
  Bold,
  Italic,
  Heading1,
  Heading2,
  List,
  ListOrdered,
  Quote,
  Undo2,
  Redo2,
} from "lucide-react";

import EditorButton from "./editor-button";
import EditorDivider from "./editor-divider";
import ToolbarGroup from "./editor-group";

interface EditorToolbarProps {
  editor: Editor;
}

export default function EditorToolbar({ editor }: EditorToolbarProps) {
  return (
    <div
      className="
    sticky
    top-0
    z-20
    flex
    items-center
    gap-2
    overflow-x-auto
    border-b
    bg-background/90
    backdrop-blur-md
    p-2
  "
    >
      <ToolbarGroup>
        <EditorButton
          icon={<Bold size={18} />}
          active={editor.isActive("bold")}
          onClick={() => editor.chain().focus().toggleBold().run()}
        />

        <EditorButton
          icon={<Italic size={18} />}
          active={editor.isActive("italic")}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        />
      </ToolbarGroup>

      <EditorDivider />

      <ToolbarGroup>
        <EditorButton
          icon={<Heading1 size={18} />}
          active={editor.isActive("heading", {
            level: 1,
          })}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
        />

        <EditorButton
          icon={<Heading2 size={18} />}
          active={editor.isActive("heading", {
            level: 2,
          })}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
        />
      </ToolbarGroup>

      <EditorDivider />

      <ToolbarGroup>
        <EditorButton
          icon={<List size={18} />}
          active={editor.isActive("bulletList")}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        />

        <EditorButton
          icon={<ListOrdered size={18} />}
          active={editor.isActive("orderedList")}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        />
      </ToolbarGroup>

      <EditorDivider />

      <ToolbarGroup>
        <EditorButton
          icon={<Quote size={18} />}
          active={editor.isActive("blockquote")}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
        />
      </ToolbarGroup>

      <EditorDivider />

      <ToolbarGroup>
        <EditorButton
          icon={<Undo2 size={18} />}
          disabled={!editor.can().undo()}
          onClick={() => editor.chain().focus().undo().run()}
        />

        <EditorButton
          icon={<Redo2 size={18} />}
          disabled={!editor.can().redo()}
          onClick={() => editor.chain().focus().redo().run()}
        />
      </ToolbarGroup>
    </div>
  );
}
