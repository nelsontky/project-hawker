import {MigrationInterface, QueryRunner} from "typeorm";

export class AddStatusColumn1623249025866 implements MigrationInterface {
    name = 'AddStatusColumn1623249025866'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "scrape_facebook_status_enum" AS ENUM('PENDING', 'REJECTED', 'APPROVED')`);
        await queryRunner.query(`ALTER TABLE "scrape_facebook" ADD "status" "scrape_facebook_status_enum" NOT NULL DEFAULT 'PENDING'`);
        await queryRunner.query(`ALTER TABLE "scrape_facebook" ADD "stallId" uuid`);
        await queryRunner.query(`ALTER TABLE "scrape_facebook" ADD CONSTRAINT "UQ_7ee36cc3b35b8eae719015756a8" UNIQUE ("stallId")`);
        await queryRunner.query(`ALTER TABLE "scrape_facebook" ADD CONSTRAINT "FK_7ee36cc3b35b8eae719015756a8" FOREIGN KEY ("stallId") REFERENCES "stall"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "scrape_facebook" DROP CONSTRAINT "FK_7ee36cc3b35b8eae719015756a8"`);
        await queryRunner.query(`ALTER TABLE "scrape_facebook" DROP CONSTRAINT "UQ_7ee36cc3b35b8eae719015756a8"`);
        await queryRunner.query(`ALTER TABLE "scrape_facebook" DROP COLUMN "stallId"`);
        await queryRunner.query(`ALTER TABLE "scrape_facebook" DROP COLUMN "status"`);
        await queryRunner.query(`DROP TYPE "scrape_facebook_status_enum"`);
    }

}
