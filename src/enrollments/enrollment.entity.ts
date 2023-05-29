import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Enrollment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    studentId: number;

    @Column()
    courseId: number;

    @Column({nullable: true}) 
    attendance: number;

    @Column({nullable: true}) 
    work: number;

    @Column({nullable: true}) 
    exam: number;

    @Column({nullable: true}) 
    total: number;
}
