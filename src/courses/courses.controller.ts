import { Controller, Post, Body } from "@nestjs/common";
import { CoursesService } from './courses.service';
import { CreateCourseDto } from "./create-course.dto";

@Controller('courses')
export class CoursesController {
    constructor(private readonly coursesService: CoursesService) {}

    @Post()
    async create(@Body() CreateCourseDto: CreateCourseDto) {
        return this.coursesService.create(CreateCourseDto);
    }
}

