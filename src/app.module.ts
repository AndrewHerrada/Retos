import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentService } from './student/student.service';
import { StudentController } from './student/student.controller';
import { Student } from './student/student.entity';
import { Course } from './courses/courses.entity';
import { CoursesController } from './courses/courses.controller';
import { CoursesService } from './courses/courses.service';
import { Enrollment } from './enrollments/enrollment.entity';
import { EnrollmentController } from './enrollments/enrollments.controller';
import { EnrollmentsService } from './enrollments/enrollments.service';
import { Stats } from 'fs';
import { StatsController } from './stats/stats.controller';
import { StatsService } from './stats/stats.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'checho040502',
      database: 'reto',
      entities: [Student, Course, Enrollment, Stats],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Student,Course, Enrollment, Stats])
    //StudentModule,
  ],
  controllers: [StudentController,CoursesController, EnrollmentController, StatsController],
  providers: [StudentService, CoursesService, EnrollmentsService, StatsService],

})
export class AppModule {}
