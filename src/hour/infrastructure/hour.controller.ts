import { GetCheapestHourIntervalsCase } from '../application/cases/getCheapestHourIntervals'
import { HourRepositoryImplementation } from './hourRepository.implementation'
import { HourInterval } from '../domain'
import { Logger } from '../../core/infrastructure/logger'

interface HourControllerOptions {
  intervalLength: number
  from: number
  to: number
}

export class HourController {
  constructor (private readonly logger: Logger) {}

  async exec (options: HourControllerOptions): Promise<void> {
    const intervals = await new GetCheapestHourIntervalsCase(new HourRepositoryImplementation()).exec(options)

    this.printResult(options, intervals)
  }

  private printResult ({ intervalLength, from, to }: HourControllerOptions, intervals: HourInterval[]) {
    this.logger.info(`Los intervalos de ${intervalLength} horas más baratos de las ${from} a las ${to} son: `)

    for (const { from, to } of intervals) {
      this.logger.info(`  - De las ${from} horas a las ${to} horas.`)
    }
  }
}
