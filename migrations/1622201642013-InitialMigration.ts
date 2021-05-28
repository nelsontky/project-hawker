import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialMigration1622201642013 implements MigrationInterface {
    name = 'InitialMigration1622201642013'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "image" ("id" SERIAL NOT NULL, "link" text NOT NULL, "compressedBase64" text NOT NULL, CONSTRAINT "PK_d6db1ab4ee9ad9dbe86c64e4cc3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "location" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "region" text NOT NULL, "slug" text NOT NULL, "postalCode" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_ff73a7032e673d18bacf8d06c9a" UNIQUE ("slug"), CONSTRAINT "UQ_1a78bdfb655ae629601a20a373f" UNIQUE ("postalCode"), CONSTRAINT "PK_876d7bdba03c72251ec4c2dc827" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "stall" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "slug" text NOT NULL, "stallNumber" text NOT NULL, "information" json NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "locationId" uuid, CONSTRAINT "PK_8429ac9dce652ffefb3fa122b36" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "location_images_image" ("locationId" uuid NOT NULL, "imageId" integer NOT NULL, CONSTRAINT "PK_8f3fcd064d8f751bf30101a5df4" PRIMARY KEY ("locationId", "imageId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_9cfdbecc16034a95fa0554c559" ON "location_images_image" ("locationId") `);
        await queryRunner.query(`CREATE INDEX "IDX_03c5875d4a78c18952721ec5bf" ON "location_images_image" ("imageId") `);
        await queryRunner.query(`CREATE TABLE "stall_images_image" ("stallId" uuid NOT NULL, "imageId" integer NOT NULL, CONSTRAINT "PK_e46bcb5a804a7f1f499f10ff7e5" PRIMARY KEY ("stallId", "imageId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_c290d32c0694eb414533d9de07" ON "stall_images_image" ("stallId") `);
        await queryRunner.query(`CREATE INDEX "IDX_32aaefddbac82a87e3325dc5df" ON "stall_images_image" ("imageId") `);
        await queryRunner.query(`ALTER TABLE "stall" ADD CONSTRAINT "FK_a44efed0f97dc684938d8ff45e5" FOREIGN KEY ("locationId") REFERENCES "location"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "location_images_image" ADD CONSTRAINT "FK_9cfdbecc16034a95fa0554c5594" FOREIGN KEY ("locationId") REFERENCES "location"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "location_images_image" ADD CONSTRAINT "FK_03c5875d4a78c18952721ec5bf6" FOREIGN KEY ("imageId") REFERENCES "image"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "stall_images_image" ADD CONSTRAINT "FK_c290d32c0694eb414533d9de075" FOREIGN KEY ("stallId") REFERENCES "stall"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "stall_images_image" ADD CONSTRAINT "FK_32aaefddbac82a87e3325dc5df2" FOREIGN KEY ("imageId") REFERENCES "image"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stall_images_image" DROP CONSTRAINT "FK_32aaefddbac82a87e3325dc5df2"`);
        await queryRunner.query(`ALTER TABLE "stall_images_image" DROP CONSTRAINT "FK_c290d32c0694eb414533d9de075"`);
        await queryRunner.query(`ALTER TABLE "location_images_image" DROP CONSTRAINT "FK_03c5875d4a78c18952721ec5bf6"`);
        await queryRunner.query(`ALTER TABLE "location_images_image" DROP CONSTRAINT "FK_9cfdbecc16034a95fa0554c5594"`);
        await queryRunner.query(`ALTER TABLE "stall" DROP CONSTRAINT "FK_a44efed0f97dc684938d8ff45e5"`);
        await queryRunner.query(`DROP INDEX "IDX_32aaefddbac82a87e3325dc5df"`);
        await queryRunner.query(`DROP INDEX "IDX_c290d32c0694eb414533d9de07"`);
        await queryRunner.query(`DROP TABLE "stall_images_image"`);
        await queryRunner.query(`DROP INDEX "IDX_03c5875d4a78c18952721ec5bf"`);
        await queryRunner.query(`DROP INDEX "IDX_9cfdbecc16034a95fa0554c559"`);
        await queryRunner.query(`DROP TABLE "location_images_image"`);
        await queryRunner.query(`DROP TABLE "stall"`);
        await queryRunner.query(`DROP TABLE "location"`);
        await queryRunner.query(`DROP TABLE "image"`);
    }

}
