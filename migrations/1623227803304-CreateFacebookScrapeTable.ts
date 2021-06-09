import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateFacebookScrapeTable1623227803304 implements MigrationInterface {
    name = 'CreateFacebookScrapeTable1623227803304'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "scrape_facebook" ("id" text NOT NULL, "recommendedBy" text NOT NULL, "description" text NOT NULL, "imageNames" text array NOT NULL, "stallName" text, "stallNumber" text, "deliveryAvailable" text, "contact" text, "foodTheyServe" text, "favorites" text, "dietaryRestrictions" text, "priceRange" text, "nameOfHawker" text, "openingHours" text, "whatAreTheConcernsThisHawkerIsFacing" text, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "locationId" uuid, CONSTRAINT "PK_0a549d5ba82dd8b125be1c1bb35" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "scrape_facebook" ADD CONSTRAINT "FK_48dcebcaba9aba4819ba79fa50d" FOREIGN KEY ("locationId") REFERENCES "location"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "scrape_facebook" DROP CONSTRAINT "FK_48dcebcaba9aba4819ba79fa50d"`);
        await queryRunner.query(`DROP TABLE "scrape_facebook"`);
    }

}
