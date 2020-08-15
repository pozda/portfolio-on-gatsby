// @flow
import type {Skill} from './Tool'
export type Project = {
  title: string,
  goal: string,
  role: string,
  role_description: string,
  type: string,
  link: string,
  skills_and_tools: Array<Skill>,
  learned: string
}