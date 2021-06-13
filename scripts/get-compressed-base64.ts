// To run: 
// npx ts-node --project tsconfig.json   scripts/get-compressed-base64.ts
import sharp from "sharp";

(async () => {
  const resized = await sharp("public/images/mainheader.png")
    .resize(undefined, 20)
    .withMetadata()
    .toBuffer();
  const base64 = `data:image/png;base64,${resized.toString("base64")}`;
})();
