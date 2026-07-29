import { NextResponse } from "next/server";
import { v4 as uuid } from "uuid";

import os from "os";
import path from "path";
import fs from "fs-extra";

import cloudinary from "@/lib/cloudinary";

export async function POST(request: Request) {
  let tempPath = "";

  try {
    const formData = await request.formData();

    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json(
        {
          error: "No file uploaded.",
        },
        {
          status: 400,
        },
      );
    }

    // Convert File -> Buffer
    const bytes = await file.arrayBuffer();

    const buffer = Buffer.from(bytes);

    // Create temporary file
    tempPath = path.join(os.tmpdir(), `${uuid()}-${file.name}`);

    await fs.writeFile(tempPath, buffer);

    // Upload to Cloudinary
    const uploaded = await cloudinary.uploader.upload(tempPath, {
      folder: "piusvirgin/news",
      public_id: uuid(),
      timeout: 60000,
    });

    return NextResponse.json({
      url: uploaded.secure_url,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Upload failed.",
      },
      {
        status: 500,
      },
    );
  } finally {
    if (tempPath) {
      await fs.remove(tempPath).catch(() => {});
    }
  }
}
