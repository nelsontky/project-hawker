import { MigrationInterface, QueryRunner } from "typeorm";
import _ from "lodash";

export class RenameDescription1623580397870 implements MigrationInterface {
  name = "RenameDescription1623580397870";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "scrape_facebook" RENAME COLUMN "description" TO "moreAboutThisHawker"`
    );

    const stalls = await queryRunner.query(`SELECT * FROM "stall"`);
    for (const stall of stalls) {
      const information = stall.information;
      if (!_.isEmpty(information) && information.description) {
        const newInformation = {
          ...information,
          moreAboutThisHawker: information.description,
        };
        delete newInformation.description;

        await queryRunner.query(
          `UPDATE "stall" SET "information" = $1 WHERE id = $2`,
          [newInformation, stall.id]
        );
      }
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "scrape_facebook" RENAME COLUMN "moreAboutThisHawker" TO "description"`
    );
  }
}
