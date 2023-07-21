interface AnswerQuestionUseCaseRequest {
  instructorId: string;
  questionId: string;
}

export class AnswerQuestionCase {
  execute({ instructorId, questionId }: AnswerQuestionUseCaseRequest) {
    // ...
  }
}