import { QuestionTypeModel } from "./question-type.model";
import { SubjectModel } from "./subject.model";

export class AptitudeTestQuestionModel{
    questionID: String;
    subjectID: SubjectModel;
    question_typeID: QuestionTypeModel;
    question: String;
}