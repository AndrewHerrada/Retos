import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Course } from "src/courses/courses.entity";
import { Enrollment } from "src/enrollments/enrollment.entity";
import { Student } from "src/student/student.entity";

@Injectable()
export class StatsService {
    constructor(
        @InjectRepository(Course)
        private coursesRepository: Repository<Course>,
        @InjectRepository(Enrollment)
        private enrollmentsRepository: Repository<Enrollment>,
        @InjectRepository(Student)
        private studentRepository: Repository<Student>,
    ) {}

    async getBestStatsOfCourses() {
        const courses = await this.coursesRepository.find();
        const stats = [];
        for (const course of courses) {
            const enrollments = await this.enrollmentsRepository.find({
                where: { courseId: course.id},
            });
            enrollments.sort((a,b) => b.total - a.total);
            const bestStudents = enrollments.slice(0,3);
            
            const bestStudentsOutput = [];
            for(const e of bestStudents) {
                const student = await this.studentRepository.findOne({where: {id: e.studentId}});
                
                bestStudentsOutput.push({
                    studentId: e.studentId,
                    firstName: student.firstName,
                    lastName: student.lastName,
                    total: e.total,
                });
            
            }
            stats.push({
                courseId: course.id,
                courseName: course.name,
                bestStudents: bestStudentsOutput,
            });  
            
        }
        return stats;
    }
}