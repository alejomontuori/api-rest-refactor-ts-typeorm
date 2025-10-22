import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Profesor } from "./profesorModel.ts";
import { Estudiante } from "./estudianteModel.ts";

@Entity()
export class Curso {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: String;

  @Column('text')
  descripcion: String;

  @CreateDateColumn()
  creadoEl: Date;

  @UpdateDateColumn()
  modificadoEl: Date;

  @ManyToOne(() => Profesor, (profesor) => profesor.cursos)
  @JoinColumn({name: 'id_profesor'})
  profesores: Profesor;

  @ManyToMany(() => Estudiante)
  @JoinTable({
    name: 'estudiante_curso',
    joinColumn: {name: 'curso_id'},
    inverseJoinColumn: {name: 'estudiante_id'}
  })
  estudiantes: Estudiante[];
    
}
