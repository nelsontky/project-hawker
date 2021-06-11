import {MigrationInterface, QueryRunner} from "typeorm";

export class RemoveBase64StringColumn1623410779719 implements MigrationInterface {
    name = 'RemoveBase64StringColumn1623410779719'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "image" DROP COLUMN "compressedBase64"`);
        await queryRunner.query(`ALTER TABLE "image" ALTER COLUMN "compressedImage" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "image" ALTER COLUMN "compressedImage" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "image" ADD "compressedBase64" text NOT NULL`);
    }

}
