"use client";

import { toast } from "sonner";
import { useState, useEffect } from "react";

import {
  Copy,

} from "lucide-react";
import {FaFacebook,
  FaLinkedin,
  FaTwitter,} from 'react-icons/fa'

import { Button } from "@/components/ui/button";

interface ArticleShareProps {
  title: string;
}

export default function ArticleShare({
  title,
}: ArticleShareProps) {

  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);


  function copyLink() {
    navigator.clipboard.writeText(url);

    toast.success("Article link copied.");
  }

  return (
    <section className="mx-auto mt-20 max-w-4xl border-t pt-10">
      <h3 className="text-xl font-semibold">Share this Story</h3>

      <p className="mt-2 text-muted-foreground">
        Help others discover this article by sharing it with your network.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Button variant="outline" onClick={copyLink} disabled={!url}>
          <Copy className="mr-2 h-4 w-4" />
          Copy Link
        </Button>

        <Button variant="outline" asChild>
          <a
            target="_blank"
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              url,
            )}`}
            rel="noopener noreferrer"
          >
            <FaFacebook className="mr-2 h-4 w-4" />
            Facebook
          </a>
        </Button>

        <Button variant="outline" asChild>
          <a
            target="_blank"
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
              url,
            )}&text=${encodeURIComponent(title)}`}
            rel="noopener noreferrer"
          >
            <FaTwitter className="mr-2 h-4 w-4" />X
          </a>
        </Button>

        <Button variant="outline" asChild>
          <a
            target="_blank"
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
              url,
            )}`}
            rel="noopener noreferrer"
          >
            <FaLinkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </a>
        </Button>
      </div>
    </section>
  );
}
