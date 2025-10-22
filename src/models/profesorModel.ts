import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";   
import { Curso } from "./cursoModel.ts";

@Entity()
export class Profesor {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    dni:String;

    @Column()
    nombre:String; 

    @Column()
    apellido:String;

    @Column()
    email:String;

    @Column()
    telefono:String;

    @Column()
    profesion:String;

    @CreateDateColumn()
    creadoEl: Date;

    @UpdateDateColumn()
    modificadoEl: Date;

    @OneToMany(() => Curso, (curso) => curso.profesores)
    cursos: Curso[];
}