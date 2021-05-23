import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
} from "typeorm";

import { Image } from "modules/images/entities/image.entity";
import { Stall } from "modules/stalls/entities/stall.entity";

@Entity()
export class Location {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("text")
  name: string;

  @Column("text", { unique: true })
  slug: string;

  @Column("text", { unique: true })
  postalCode: string;

  @ManyToMany(() => Image)
  @JoinTable()
  images: Image[];

  @OneToMany(() => Stall, (stall) => stall.location)
  stalls: Stall[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
