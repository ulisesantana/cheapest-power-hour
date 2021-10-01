import { HourController } from '../../src/hour/infrastructure'
import { Logger } from '../../src/core/infrastructure/logger'

describe('HourController should', () => {
  it('log result', async () => {
    const intervalLength = 4
    const logger = new Logger()
    logger.info = jest.fn()

    await new HourController(logger).exec(intervalLength)

    expect(logger.info).toHaveBeenCalledWith(`Los intervalos de ${intervalLength} horas más baratos son: `)
    expect(logger.info).toHaveBeenCalledWith('  - De las 1 horas a las 5 horas.')
    expect(logger.info).toHaveBeenCalledWith('  - De las 2 horas a las 6 horas.')
    expect(logger.info).toHaveBeenCalledWith('  - De las 3 horas a las 7 horas.')
    expect(logger.info).toHaveBeenCalledWith('  - De las 4 horas a las 8 horas.')
  })
})
