import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";
import sharp from "sharp";

export class RefactorImages1621971054175 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "image",
      new TableColumn({
        name: "compressedBase64",
        type: "text",
        isNullable: true,
      })
    );
    const images = await queryRunner.query(`SELECT * FROM "image"`);

    for (const image of images) {
      try {
        const resized = await sharp("public/" + image.link)
          .resize(undefined, 20)
          .withMetadata()
          .toBuffer();
        const base64 = `data:image/png;base64,${resized.toString("base64")}`;
        const newLink = image.link;

        await queryRunner.query(
          `UPDATE "image" SET "link" = $1 WHERE id = $2`,
          [newLink, image.id]
        );
        await queryRunner.query(
          `UPDATE "image" SET "compressedBase64" = $1 WHERE id = $2`,
          [base64, image.id]
        );
      } catch (e) {
        console.log(e.message);
        throw new Error();
      }
    }

    await queryRunner.changeColumn(
      "image",
      "compressedBase64",
      new TableColumn({
        name: "compressedBase64",
        type: "text",
        isNullable: false,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
