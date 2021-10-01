import { buildHourList } from '../builders'
import { HourRepositoryImplementation } from '../../src/hour/infrastructure'
import { GetCheapestHourIntervalsCase } from '../../src/hour/application/cases/getCheapestHourIntervals'

describe('Get cheapest hour intervals use case should', () => {
  it('get intervals successfully', async () => {
    const hourList = buildHourList()
    const repository = new HourRepositoryImplementation()
    repository.findHourSchedule = jest.fn(async () => hourList)

    const intervals = await new GetCheapestHourIntervalsCase(repository).exec(4)

    const first = intervals[0]
    const last = intervals[intervals.length - 1]
    expect(intervals).toHaveLength(4)
    expect(first.from).toBe(1)
    expect(first.to).toBe(5)
    expect(last.from).toBe(4)
    expect(last.to).toBe(8)
  })
})
