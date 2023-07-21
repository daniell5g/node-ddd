import { randomUUID } from 'node:crypto'

interface AnswerProps {
  content: string
  authroId: string
  questionId: string
}

export class Answer {
  public id?: string
  public content: string
  public authorId: string
  public questionId: string

  constructor(props: AnswerProps, id?: string) {
    this.content = props.content
    this.authorId = props.authroId
    this.questionId = props.questionId
    this.id = id ?? randomUUID()
  }
}