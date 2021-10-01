import { HourRepositoryImplementation } from '../../src/hour/infrastructure'
import { Hour, Price } from '../../src/hour/domain'

describe('HourRepositoryImplementation should', () => {
  it('retrieve an HourList for the given month', async () => {
    const hours = [
      new Hour(1, Price.Low),
      new Hour(2, Price.Low),
      new Hour(3, Price.Low),
      new Hour(4, Price.Low),
      new Hour(5, Price.Low),
      new Hour(6, Price.Low),
      new Hour(7, Price.Low),
      new Hour(8, Price.Low),
      new Hour(9, Price.Medium),
      new Hour(10, Price.Medium),
      new Hour(11, Price.High),
      new Hour(12, Price.High),
      new Hour(13, Price.High),
      new Hour(14, Price.High),
      new Hour(15, Price.Medium),
      new Hour(16, Price.Medium),
      new Hour(17, Price.Medium),
      new Hour(18, Price.Medium),
      new Hour(19, Price.High),
      new Hour(20, Price.High),
      new Hour(21, Price.High),
      new Hour(22, Price.High),
      new Hour(23, Price.Medium),
      new Hour(24, Price.Medium)
    ]
    const repository = new HourRepositoryImplementation()

    const hourList = await repository.findHourSchedule()

    expect(hourList.hours).toEqual(hours)
  })
})
