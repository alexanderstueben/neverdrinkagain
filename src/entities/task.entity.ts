import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tasks')
export class Task {

  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  text: string;

  @Column('text')
  category: string;

  @Column('text', { name: 'create_date' })
  createDate: string;

  @Column('text', { name: 'update_date' })
  updateDate: string;
}
