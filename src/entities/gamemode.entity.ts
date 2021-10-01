import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Task } from './task.entity';
import { JoinTable } from 'typeorm/browser';

@Entity('gamemodes')
export class Gamemode {

  @PrimaryGeneratedColumn()
  id?: number;

  @Column('text')
  description: string;

  @Column('text')
  title: string;

  @Column('text', { name: 'create_date' })
  createDate: string;

  @Column('text', { name: 'update_date' })
  updateDate: string;

  @ManyToMany(() => Task, task => task.gamemodes)
  @JoinTable({
    name: 'gamemode_tasks',
    joinColumn: { name: 'gamemode_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'task_id', referencedColumnName: 'id' }
  })
  tasks?: Task[];
}
