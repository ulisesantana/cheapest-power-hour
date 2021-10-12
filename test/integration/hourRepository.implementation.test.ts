import { HourRepositoryImplementation } from '../../src/hour/infrastructure'
import { Hour, Price } from '../../src/hour/domain'

describe('HourRepositoryImplementation should', () => {
  it('retrieve an HourList based on from and to params', async () => {
    const hours = [
      new Hour(12, Price.High),
      new Hour(13, Price.High),
      new Hour(14, Price.High),
      new Hour(15, Price.Medium),
      new Hour(16, Price.Medium)
    ]
    const repository = new HourRepositoryImplementation()

    const hourList = await repository.findHourSchedule(12, 16)

    expect(hourList.hours).toEqual(hours)
  })
  it('retrieve a continuous HourList based on from and to params', async () => {
    const hours = [
      new Hour(22, Price.High),
      new Hour(23, Price.Medium),
      new Hour(24, Price.Medium),
      new Hour(1, Price.Low),
      new Hour(2, Price.Low)
    ]
    const repository = new HourRepositoryImplementation()

    const hourList = await repository.findHourSchedule(22, 2)

    expect(hourList.hours).toEqual(hours)
  })
})
