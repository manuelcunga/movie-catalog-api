import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('movies')
export class Movies {
  @PrimaryColumn()
  readonly id?: string;

  @Column()
  title: string;

  @Column()
  director: string;

  @Column()
  year: Date;

  @Column()
  score: number;

  @CreateDateColumn()
  createdAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
