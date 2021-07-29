import { AptitudeTestQuestionModel } from "./aptitude-test-question.model";

export class AptitudeTestAnswerModel{
    answerID: String;
    questionID: AptitudeTestQuestionModel;
    selection: String;
    answer: String;
}