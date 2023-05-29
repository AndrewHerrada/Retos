import { Controller, Get } from "@nestjs/common";
import { StatsService } from './stats.service';

@Controller('courses/stats')
export class StatsController {
    constructor(private readonly statsService: StatsService) {}

    @Get('/best')
    async getBestStatsOfCourses() {
        return this.statsService.getBestStatsOfCourses();
    }
}