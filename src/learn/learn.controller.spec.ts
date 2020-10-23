import { Test, TestingModule } from "@nestjs/testing";
import { LearnController } from "./learn.controller"
import { LearnService } from "./learn.service";

describe('LearnController', () => {
    let learnController: LearnController;

    beforeEach(async () => {
        const learn: TestingModule = await Test.createTestingModule({
            controllers: [LearnController],
            providers: [LearnService]
        }).compile();

        learnController = learn.get<LearnController>(LearnController);
    });

    describe('root', () => {
        it('shoult return "Hello this is Learn page!"', () => {
            expect(learnController.getLearn()).toBe('Hello this is Learn page!');
        });
    });
});