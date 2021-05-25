import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Image {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  link: string;

  @Column("text")
  compressedBase64: string;
}
