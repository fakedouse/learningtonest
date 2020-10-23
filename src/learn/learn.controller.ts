import { Controller, Get } from "@nestjs/common";
import { LearnService } from "./learn.service";

@Controller()
export class LearnController {
    constructor(private readonly learnService: LearnService) {}
    @Get('learn')
    getLearn(): string {
        return this.learnService.getLearn();
    }

    @Get('schoolbook')
    getSchoolBook(): string {
        return this.learnService.getSchoolBook();
    }
}