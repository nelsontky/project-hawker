import sharp from "sharp";

export async function compressImage(path: string, format: string) {
  const resized = await sharp(path)
    .resize(undefined, 20)
    .withMetadata()
    .toBuffer();
  const base64 = `data:image/${format};base64,${resized.toString("base64")}`;
  return base64;
}
