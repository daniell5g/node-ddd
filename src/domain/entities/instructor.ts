import { randomUUID } from 'node:crypto'
import { Entity } from '../../core/entities/entity'
import { s } from 'vitest/dist/types-198fd1d9'

interface InstructorProps {
  name: string
}

export class Instructor extends Entity<InstructorProps> {

  constructor(props: InstructorProps, id?: string) {
    super(props, id)
  }
}