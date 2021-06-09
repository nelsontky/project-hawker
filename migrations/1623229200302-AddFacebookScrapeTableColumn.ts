import {MigrationInterface, QueryRunner} from "typeorm";

export class AddFacebookScrapeTableColumn1623229200302 implements MigrationInterface {
    name = 'AddFacebookScrapeTableColumn1623229200302'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "scrape_facebook" ADD "postUrl" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "scrape_facebook" DROP COLUMN "postUrl"`);
    }

}
