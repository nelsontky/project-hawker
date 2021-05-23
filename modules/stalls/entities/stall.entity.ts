import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";

import { Image } from "modules/images/entities/image.entity";

@Entity()
export class Stall {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("text")
  name: string;

  @Column("text")
  stallNumber: string;

  @Column("int")
  openingTime: number;

  @Column("int")
  closingTime: number;

  @Column("text")
  htmlDescription: string;

  @ManyToMany(() => Image)
  @JoinTable()
  images: Image[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
