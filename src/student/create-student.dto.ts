import { IsString, IsNotEmpty, IsDate } from 'class-validator';
export class CreateStudentDto {
    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsDate()
    birthDate: Date;
}