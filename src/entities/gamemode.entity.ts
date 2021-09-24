import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('gamemodes')
export class Gamemode {

  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  description: string;

  @Column('text')
  title: string;

  @Column('text', { name: 'create_date' })
  createDate: string;

  @Column('text', { name: 'update_date' })
  updateDate: string;
}
