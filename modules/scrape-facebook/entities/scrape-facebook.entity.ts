import {
  Column,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";

import { Location } from "modules/locations/entities/location.entity";

@Entity()
export class ScrapeFacebook {
  @PrimaryColumn("text")
  id: string;

  @Column("text")
  recommendedBy: string;

  @Column("text")
  desscription: string;

  @Column("text", { array: true })
  imageNames: string[];

  @ManyToOne(() => Location, (location) => location.stalls, {
    onDelete: "CASCADE",
    nullable: true,
  })
  location: Location;

  @Column("text", { nullable: true })
  stallName: string;

  @Column("text", { nullable: true })
  stallNumber: string;

  @Column("text", { nullable: true })
  deliveryAvailable: string;

  @Column("text", { nullable: true })
  contact: string;

  @Column("text", { nullable: true })
  foodTheyServe: string;

  @Column("text", { nullable: true })
  favorites: string;

  @Column("text", { nullable: true })
  dietaryRestrictions: string;

  @Column("text", { nullable: true })
  priceRange: string;

  @Column("text", { nullable: true })
  nameOfHawker: string;

  @Column("text", { nullable: true })
  openingHours: string;

  @Column("text", { nullable: true })
  whatAreTheConcernsThisHawkerIsFacing: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
