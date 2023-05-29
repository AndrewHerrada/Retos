import { Controller, Post, Body } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './create-student.dto';
import { Student } from './student.entity';

@Controller('students')
export class StudentController {
    constructor(private readonly studentService: StudentService){}

    @Post()
    create(@Body() CreateStudentDto: CreateStudentDto): Promise<Student> {
        return this.studentService.create(CreateStudentDto);
    }
}
