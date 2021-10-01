import { UseCase } from '../../../core/domain/useCase'
import { HourInterval } from '../../domain'
import { HourRepository } from '../hour.repository'

type Input = number
type Output = Promise<HourInterval[]>

export class GetCheapestHourIntervalsCase implements UseCase<Input, Output> {
  constructor (private readonly hourRepository: HourRepository) {}

  async exec (intervalLength: Input): Output {
    const hours = await this.hourRepository.findHourSchedule()
    return hours.getCheapestHourIntervals(intervalLength)
  }
}
