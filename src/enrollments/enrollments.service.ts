import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Enrollment } from "./enrollment.entity";
import { CreateEnrollmentDto } from "./create-enrollment.dto";
import { UpdateEnrollmentDto } from "./update-enrollment.dto";

@Injectable()
export class EnrollmentsService {
    constructor(
        @InjectRepository(Enrollment)
        private enrollmentsRepository: Repository<Enrollment>,
    ) {}

    async create(
        courseId: string,
        createEnrollmentDto: CreateEnrollmentDto,
    ): Promise<Enrollment> {
        const enrollment = new Enrollment();
        enrollment.studentId = createEnrollmentDto.studentId;
        enrollment.courseId = parseInt(courseId);
        enrollment.attendance = createEnrollmentDto.attendance;
        enrollment.work = createEnrollmentDto.work;
        enrollment.exam = createEnrollmentDto.exam;

        enrollment.total = (enrollment.attendance || 0) + (enrollment.work || 0) + (enrollment.exam || 0);
        return this.enrollmentsRepository.save(enrollment);
    }

    async update(
        id: string,
        updateEnrollmentDto: UpdateEnrollmentDto,
    ): Promise<Enrollment> {
        const enrollment = await this.enrollmentsRepository.findOne({where: {id: parseInt(id)}});
        if (!enrollment) {
            throw new NotFoundException('Enrollment not found');
        }
        
        enrollment.attendance = updateEnrollmentDto.attendance || enrollment.attendance;
        enrollment.work = updateEnrollmentDto.work || enrollment.work;
        enrollment.exam = updateEnrollmentDto.exam || enrollment.exam;

        enrollment.total = (enrollment.attendance || 0) + (enrollment.work || 0) + (enrollment.exam || 0);
        return this.enrollmentsRepository.save(enrollment);
    }
}