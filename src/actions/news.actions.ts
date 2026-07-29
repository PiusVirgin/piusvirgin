"use server";

import { revalidatePath } from "next/cache";


import { createNews, deleteNews, updateNews } from "@/services/news.service";

export type NewsFormData = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;

  coverImage: string | null;

  category: string;
  author: string;

  featured: boolean;
  published: boolean;

  readTime: number | null;
};

export async function createNewsAction(data: NewsFormData) {
  try {
    await createNews({
      ...data,
      publishedAt: data.published ? new Date() : null,
    });

    revalidatePath("/admin/news");

    return {
      success: true,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Failed to create article.",
    };
  }
}


export async function updateNewsAction(id: string, data: NewsFormData) {
  try {
    await updateNews(id, {
      ...data,
      publishedAt: data.published ? new Date() : null,
    });

    revalidatePath("/admin/news");

    return {
      success: true,
      message: "Article updated successfully.",
    };
  } catch {
    return {
      success: false,
      message: "Failed to update article.",
    };
  }
}

export async function deleteNewsAction(id: string) {
  try {
    await deleteNews(id);

    revalidatePath("/admin/news");

    return {
      success: true,
    };
  } catch {
    return {
      success: false,
      message: "Failed to delete article.",
    };
  }
}
