import { randomUUID } from 'node:crypto'

export class Question {
  public id?: string
  public title: string
  public description: string

  constructor(title: string, description: string, id?: string) {
    this.title = title
    this.description = description
    this.id = id ?? randomUUID()
  }
}