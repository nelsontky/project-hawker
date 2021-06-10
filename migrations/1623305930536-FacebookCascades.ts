import {MigrationInterface, QueryRunner} from "typeorm";

export class FacebookCascades1623305930536 implements MigrationInterface {
    name = 'FacebookCascades1623305930536'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "scrape_facebook" DROP CONSTRAINT "FK_48dcebcaba9aba4819ba79fa50d"`);
        await queryRunner.query(`ALTER TABLE "scrape_facebook" DROP CONSTRAINT "FK_7ee36cc3b35b8eae719015756a8"`);
        await queryRunner.query(`ALTER TABLE "scrape_facebook" ADD CONSTRAINT "FK_7ee36cc3b35b8eae719015756a8" FOREIGN KEY ("stallId") REFERENCES "stall"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "scrape_facebook" ADD CONSTRAINT "FK_48dcebcaba9aba4819ba79fa50d" FOREIGN KEY ("locationId") REFERENCES "location"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "scrape_facebook" DROP CONSTRAINT "FK_48dcebcaba9aba4819ba79fa50d"`);
        await queryRunner.query(`ALTER TABLE "scrape_facebook" DROP CONSTRAINT "FK_7ee36cc3b35b8eae719015756a8"`);
        await queryRunner.query(`ALTER TABLE "scrape_facebook" ADD CONSTRAINT "FK_7ee36cc3b35b8eae719015756a8" FOREIGN KEY ("stallId") REFERENCES "stall"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "scrape_facebook" ADD CONSTRAINT "FK_48dcebcaba9aba4819ba79fa50d" FOREIGN KEY ("locationId") REFERENCES "location"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
