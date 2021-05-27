import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateStall1622135569083 implements MigrationInterface {
    name = 'UpdateStall1622135569083'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stall" DROP COLUMN "information"`);
        await queryRunner.query(`ALTER TABLE "stall" ADD "information" json NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stall" DROP COLUMN "information"`);
        await queryRunner.query(`ALTER TABLE "stall" ADD "information" jsonb NOT NULL`);
    }

}
