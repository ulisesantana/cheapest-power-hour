import { HourList } from '../domain'

export interface HourRepository {
  findHourSchedule(fromHour: number, toHour: number): Promise<HourList>
}
