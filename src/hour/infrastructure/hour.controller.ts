import { GetCheapestHourIntervalsCase } from '../application/cases/getCheapestHourIntervals'
import { HourRepositoryImplementation } from './hourRepository.implementation'
import { HourInterval } from '../domain'
import { Logger } from '../../core/infrastructure/logger'

export class HourController {
  constructor (private readonly logger: Logger) {}

  async exec (intervalLength: number): Promise<void> {
    const intervals = await new GetCheapestHourIntervalsCase(new HourRepositoryImplementation()).exec(intervalLength)

    this.printResult(intervalLength, intervals)
  }

  private printResult (intervalLength: number, intervals: HourInterval[]) {
    this.logger.info(`Los intervalos de ${intervalLength} horas más baratos son: `)

    for (const { from, to } of intervals) {
      this.logger.info(`  - De las ${from} horas a las ${to} horas.`)
    }
  }
}
