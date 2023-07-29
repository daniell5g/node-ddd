import { randomUUID } from 'node:crypto'
import { Slug } from './values-objects/slug'
import { Entity } from '../../core/entities/entity'

interface QuestionProps {
  title: string
  slug: Slug
  content: string
  authorId: string
}

export class Question extends Entity<QuestionProps> {
  constructor(props: QuestionProps, id?: string) {
    super(props, id)
  }
}