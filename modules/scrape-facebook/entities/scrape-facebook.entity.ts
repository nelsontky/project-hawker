import {
  Column,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from "typeorm";

import { Location } from "modules/locations/entities/location.entity";
import { Stall } from "modules/stalls/entities/stall.entity";

export enum PostStatus {
  PENDING = "PENDING",
  REJECTED = "REJECTED",
  APPROVED = "APPROVED",
}

@Entity()
export class ScrapeFacebook {
  @PrimaryColumn("text")
  id: string;

  @Column("text")
  recommendedBy: string;

  @Column("text")
  description: string;

  @Column("text", { array: true })
  imageNames: string[];

  @Column("text")
  postUrl: string;

  @Column({ type: "enum", enum: PostStatus, default: PostStatus.PENDING })
  status: PostStatus;

  @OneToOne(() => Stall, { nullable: true, onDelete: "SET NULL" })
  @JoinColumn()
  stall?: Stall;

  @ManyToOne(() => Location, (location) => location.stalls, {
    onDelete: "SET NULL",
    nullable: true,
  })
  location?: Location;

  @Column("text", { nullable: true })
  stallName?: string;

  @Column("text", { nullable: true })
  stallNumber?: string;

  @Column("text", { nullable: true })
  deliveryAvailable?: string;

  @Column("text", { nullable: true })
  contact?: string;

  @Column("text", { nullable: true })
  foodTheyServe?: string;

  @Column("text", { nullable: true })
  favorites?: string;

  @Column("text", { nullable: true })
  dietaryRestrictions?: string;

  @Column("text", { nullable: true })
  priceRange?: string;

  @Column("text", { nullable: true })
  nameOfHawker?: string;

  @Column("text", { nullable: true })
  openingHours?: string;

  @Column("text", { nullable: true })
  whatAreTheConcernsThisHawkerIsFacing?: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
