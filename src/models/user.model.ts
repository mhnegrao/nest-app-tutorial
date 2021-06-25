import { Column, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
export class User {
  @PrimaryGeneratedColumn()
  readonly id: number;
  @Column()
  readonly name: string;
  @Column()
  readonly email: string;
  @Column()
  @Exclude()
  readonly password: string;
  @CreateDateColumn({ type: 'timestamp' })
  readonly created_at: Date;
  @CreateDateColumn({ type: 'timestamp' })
  readonly updated_at: Date;
}
