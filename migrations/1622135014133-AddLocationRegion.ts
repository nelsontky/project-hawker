import {MigrationInterface, QueryRunner} from "typeorm";

export class AddLocationRegion1622135014133 implements MigrationInterface {
    name = 'AddLocationRegion1622135014133'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "location" ADD "region" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "location" DROP COLUMN "region"`);
    }

}
