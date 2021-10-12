import { UseCase } from '../../../core/domain/useCase'
import { HourInterval } from '../../domain'
import { HourRepository } from '../hour.repository'

type Input = {
  intervalLength: number,
  from: number,
  to: number
}
type Output = Promise<HourInterval[]>

export class GetCheapestHourIntervalsCase implements UseCase<Input, Output> {
  constructor (private readonly hourRepository: HourRepository) {}

  async exec ({ intervalLength, from, to }: Input): Output {
    const hours = await this.hourRepository.findHourSchedule(from, to)
    return hours.getCheapestHourIntervals(intervalLength)
  }
}
