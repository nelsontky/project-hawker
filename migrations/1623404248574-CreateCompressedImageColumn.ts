import { MigrationInterface, QueryRunner } from "typeorm";
import sharp from "sharp";
import path from "path";

async function compressImage(path: string) {
  const format = "png";
  const resizedBuffer = await sharp(path)
    .resize(undefined, 20)
    .withMetadata()
    .toFormat(format)
    .toBuffer();

  return resizedBuffer;
}

export class CreateCompressedImageColumn1623404248574
  implements MigrationInterface
{
  name = "CreateCompressedImageColumn1623404248574";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "image" ADD "compressedImage" bytea`);

    const allImages = await queryRunner.query(`SELECT * FROM "image"`);
    for (const image of allImages) {
      const resizedBuffer = await compressImage(
        path.join("public", image.link)
      );
      await queryRunner.query(
        `UPDATE "image" SET "compressedImage" = $1 WHERE id = $2`,
        [resizedBuffer, image.id]
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "image" DROP COLUMN "compressedImage"`
    );
  }
}
