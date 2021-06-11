import sharp from "sharp";

export async function compressImage(path: string) {
  const format = "png";
  const resizedBuffer = await sharp(path)
    .resize(undefined, 20)
    .withMetadata()
    .toFormat(format)
    .toBuffer();

  return resizedBuffer
}
