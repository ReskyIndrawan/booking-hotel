import { put, del } from "@vercel/blob";
import { NextResponse } from "next/server";

export const PUT = async (request: Request) => {
  const form = await request.formData();
  const file = form.get("file") as File;
  // Sanitize filename
  const sanitizedFileName = file.name
    .replace(/[<>:"/\\|?*\x00-\x1f]/g, "_") // Hapus karakter berbahaya
    .replace(/\s+/g, "_") // Ganti spasi dengan underscore
    .replace(/_{2,}/g, "_") // Ganti multiple underscore dengan satu
    .replace(/^_+|_+$/g, ""); // Hapus underscore di awal/akhir
  const MAX_FILE_SIZE = 4 * 1024 * 1024; // 4MB in bytes
  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/webp",
  ];

  if (!file || file.size === 0) {
    return NextResponse.json(
      { message: "File is Required" },
      { status: 400 }
    );
  }
  if (file.size > MAX_FILE_SIZE) {
    return NextResponse.json(
      { message: "File must be less than 4MB" },
      { status: 400 }
    );
  }
  if (!allowedTypes.includes(file.type)) {
    return NextResponse.json(
      { message: "Only JPEG, PNG, GIF, and WebP images are allowed" },
      { status: 400 }
    );
  }

  const blob = await put(sanitizedFileName, file, {
    access: "public",
    multipart: true,
    allowOverwrite: true,
  });
  return NextResponse.json(blob);
};

export const DELETE = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const imageUrl = searchParams.get("imageUrl") as string;
  await del(imageUrl);
  return NextResponse.json({ status: 200 });
};
