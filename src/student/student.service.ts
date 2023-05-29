import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';
import { CreateStudentDto } from './create-student.dto';


@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(Student)
        private studentRepository: Repository<Student>,
    ) {}

    async create(createStudentDto: CreateStudentDto): Promise<Student> {
        const student = new Student();
        student.firstName = createStudentDto.firstName;
        student.lastName = createStudentDto.lastName;
        student.birthdate = new Date(`${createStudentDto.birthDate}T00:00:00Z`);
        //console.log(student);
        //console.log(createStudentDto);
        return this.studentRepository.save(student);
    }
}
