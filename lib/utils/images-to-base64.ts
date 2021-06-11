import { Image } from "modules/images/entities/image.entity";

export function imagesToBase64(images: Image[]) {
  if (!images) {
    return undefined;
  }

  return images.map((image) => ({
    ...image,
    compressedImage: "data:image/png;base64," + image.compressedImage.toString("base64"),
  }));
}
