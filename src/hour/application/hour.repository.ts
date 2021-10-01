import { HourList } from '../domain'

export interface HourRepository {
  findHourSchedule(): Promise<HourList>
}
