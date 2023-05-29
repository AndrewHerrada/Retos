import { Controller, Post, Body, Param, Patch } from "@nestjs/common";
import { EnrollmentsService } from './enrollments.service';
import { CreateEnrollmentDto} from './create-enrollment.dto';
import { UpdateEnrollmentDto} from './update-enrollment.dto';

@Controller('courses/:id/students')
export class CourseEnrollmentController {
    constructor( private readonly enrollmentsService: EnrollmentsService) {}

    @Post()
    async create(
        @Param('id') courseId: string,
        @Body() CreateEnrollmentDto: CreateEnrollmentDto,
    ) {
        return this.enrollmentsService.create(courseId, CreateEnrollmentDto);
    }
}

@Controller('enrollments')
export class EnrollmentController {
    constructor( private readonly enrollmentsService: EnrollmentsService) {}
    

    @Patch('/:id')
    async update(
        @Param('id') id: string,
        @Body() UpdateEnrollmentDto: UpdateEnrollmentDto,
    ) {
        return this.enrollmentsService.update(id, UpdateEnrollmentDto);
    }
}