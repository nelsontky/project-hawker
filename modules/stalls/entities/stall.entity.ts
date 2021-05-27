import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToMany,
  ManyToOne,
  JoinTable,
} from "typeorm";

import { Image } from "modules/images/entities/image.entity";
import { Location } from "modules/locations/entities/location.entity";

@Entity()
export class Stall {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("text")
  name: string;

  @Column("text")
  slug: string;

  @Column("text")
  stallNumber: string;

  @Column("json")
  information: { [property: string]: string };

  @ManyToMany(() => Image)
  @JoinTable()
  images: Image[];

  @ManyToOne(() => Location, (location) => location.stalls, {
    onDelete: "CASCADE",
  })
  location: Location;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
