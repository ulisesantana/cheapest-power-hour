import { buildHourList } from '../builders'
import { HourRepositoryImplementation } from '../../src/hour/infrastructure'
import { GetCheapestHourIntervalsCase } from '../../src/hour/application/cases/getCheapestHourIntervals'
import { Hour, HourList, Price } from '../../src/hour/domain'

describe('Get cheapest hour intervals use case should', () => {
  it('get intervals for all day', async () => {
    const from = 1
    const to = 24
    const hourList = buildHourList()
    const repository = new HourRepositoryImplementation()
    repository.findHourSchedule = jest.fn(async () => hourList)

    const intervals = await new GetCheapestHourIntervalsCase(repository).exec({
      intervalLength: 4,
      from,
      to
    })

    const first = intervals[0]
    const last = intervals[intervals.length - 1]
    expect(intervals).toHaveLength(4)
    expect(first.from).toBe(1)
    expect(first.to).toBe(5)
    expect(last.from).toBe(4)
    expect(last.to).toBe(8)
    expect(repository.findHourSchedule).toHaveBeenCalledWith(from, to)
  })

  describe('get intervals for the given hours', () => {
    it('returning the only possible interval', async () => {
      const from = 10
      const to = 18
      const hourList = new HourList([
        new Hour(10, Price.Medium),
        new Hour(11, Price.High),
        new Hour(12, Price.High),
        new Hour(13, Price.High),
        new Hour(14, Price.High),
        new Hour(15, Price.Medium),
        new Hour(16, Price.Medium),
        new Hour(17, Price.Medium),
        new Hour(18, Price.Medium)
      ])
      const repository = new HourRepositoryImplementation()
      repository.findHourSchedule = jest.fn(async () => hourList)

      const intervals = await new GetCheapestHourIntervalsCase(repository).exec({
        intervalLength: 4,
        from,
        to
      })

      const first = intervals[0]
      expect(intervals).toHaveLength(1)
      expect(first.from).toBe(14)
      expect(first.to).toBe(18)
      expect(repository.findHourSchedule).toHaveBeenCalledWith(from, to)
    })

    it('returning all the possible intervals', async () => {
      const from = 20
      const to = 4
      const hourList = new HourList([
        new Hour(20, Price.Medium),
        new Hour(21, Price.High),
        new Hour(22, Price.High),
        new Hour(23, Price.High),
        new Hour(24, Price.High),
        new Hour(1, Price.Medium),
        new Hour(2, Price.Medium),
        new Hour(3, Price.Medium),
        new Hour(4, Price.Medium)
      ])
      const repository = new HourRepositoryImplementation()
      repository.findHourSchedule = jest.fn(async () => hourList)

      const intervals = await new GetCheapestHourIntervalsCase(repository).exec({
        intervalLength: 2,
        from,
        to
      })

      const first = intervals[0]
      const last = intervals[intervals.length - 1]
      expect(intervals).toHaveLength(2)
      expect(first.from).toBe(1)
      expect(first.to).toBe(3)
      expect(last.from).toBe(2)
      expect(last.to).toBe(4)
      expect(repository.findHourSchedule).toHaveBeenCalledWith(from, to)
    })
  })
})
