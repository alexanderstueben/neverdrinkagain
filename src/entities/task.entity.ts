import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Gamemode } from './gamemode.entity';
import { JoinTable } from 'typeorm/browser';

@Entity('tasks')
export class Task {

  @PrimaryGeneratedColumn()
  id?: number;

  @Column('text')
  text: string;

  @Column('text')
  category: string;

  @Column('text', { name: 'create_date' })
  createDate: string;

  @Column('text', { name: 'update_date' })
  updateDate: string;

  @ManyToMany(() => Gamemode, gamemode => gamemode.tasks)
  // @JoinTable({
  //   name: 'gamemode_tasks',
  //   joinColumn: { name: 'gamemode_id', referencedColumnName: 'id' },
  //   inverseJoinColumn: { name: 'task_id', referencedColumnName: 'id' }
  // })
  gamemodes?: Gamemode[];
}
