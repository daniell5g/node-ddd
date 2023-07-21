import { randomUUID } from 'node:crypto'

export class Answer {
  public id?: string
  public content: string
  public authorId: string
  public questionId: string

  constructor(content: string, authroId: string, questionId: string, id?: string) {
    this.content = content
    this.authorId = authroId
    this.questionId = questionId
    this.id = id ?? randomUUID()
  }
}