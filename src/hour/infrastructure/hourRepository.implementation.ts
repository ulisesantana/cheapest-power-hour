import { HourRepository } from '../application/hour.repository'
import { Hour, HourList, Price } from '../domain'
import hourSchedule from '../../data/electricity-consumption-price-schedule.json'
import { HourScheduleRaw } from './hourSchedule.raw'

export class HourRepositoryImplementation implements HourRepository {
  private static hours: Array<keyof HourScheduleRaw> = [
    'hour1', 'hour2', 'hour3', 'hour4', 'hour5', 'hour6', 'hour7', 'hour8', 'hour9', 'hour10', 'hour11', 'hour12',
    'hour13', 'hour14', 'hour15', 'hour16', 'hour17', 'hour18', 'hour19', 'hour20', 'hour21', 'hour22', 'hour23',
    'hour24'
  ]

  async findHourSchedule (): Promise<HourList> {
    return HourRepositoryImplementation.mapToDomain(hourSchedule)
  }

  private static mapToDomain (rawHourSchedule: HourScheduleRaw): HourList {
    return new HourList(
      HourRepositoryImplementation.hours.map(
        hour => new Hour(
          HourRepositoryImplementation.mapHourToDomain(hour),
          HourRepositoryImplementation.mapPriceToDomain(rawHourSchedule[hour] as string)
        )
      )
    )
  }

  private static mapHourToDomain (hour: string) {
    return Number(hour.replace('hour', ''))
  }

  private static mapPriceToDomain (price: string): Price {
    if (price === 'low') return Price.Low
    if (price === 'medium') return Price.Medium
    return Price.High
  }
}
