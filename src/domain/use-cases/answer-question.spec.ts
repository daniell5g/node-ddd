import { expect, test } from 'vitest'
import { AnswerQuestionCase } from './answer-question'

test('create an answer', () => {
  const answerQuestion = new AnswerQuestionCase()

  const answer = answerQuestion.execute({
    questionId: '1',
    instructorId: '1',
    content: 'Nova resposta',
  })

  expect(answer.content).toEqual('Nova resposta')
})