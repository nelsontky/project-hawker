import {MigrationInterface, QueryRunner} from "typeorm";

export class NullableStallNumber1623302637209 implements MigrationInterface {
    name = 'NullableStallNumber1623302637209'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stall" ALTER COLUMN "stallNumber" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stall" ALTER COLUMN "stallNumber" SET NOT NULL`);
    }

}
