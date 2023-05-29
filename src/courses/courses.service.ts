import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Course } from "./courses.entity";
import { CreateCourseDto } from "./create-course.dto";

@Injectable()
export class CoursesService {
    constructor (
        @InjectRepository(Course)
        private coursesRepository: Repository<Course>,
    ) {}

    async create(createCourseDto: CreateCourseDto): Promise<Course> {
        const course = new Course();
        course.name = createCourseDto.name;
        course.year = createCourseDto.year;
        return this.coursesRepository.save(course); 
    }
}