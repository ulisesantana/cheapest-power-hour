import { buildHourList } from '../builders'
import { Hour, HourList, Price } from '../../src/hour/domain'

describe('HourList should', () => {
  describe('generate all possible intervals', () => {
    it('based on the given interval length', () => {
      const hourList = buildHourList()

      const intervals = hourList.getCheapestHourIntervals(4)

      const first = intervals[0]
      const last = intervals[intervals.length - 1]
      expect(intervals).toHaveLength(4)
      expect(first.from).toBe(1)
      expect(first.to).toBe(5)
      expect(last.from).toBe(4)
      expect(last.to).toBe(8)
    })

    it('taking hours from the next day', () => {
      const hourList = buildHourList([
        new Hour(22, Price.Low),
        new Hour(23, Price.Low),
        new Hour(24, Price.Low)
      ])

      const intervals = hourList.getCheapestHourIntervals(18)

      const first = intervals[0]
      expect(intervals).toHaveLength(1)
      expect(first.from).toBe(22)
      expect(first.to).toBe(16)
    })

    it('if the hour list is not a whole day', () => {
      const hourList = new HourList([
        new Hour(22, Price.Low),
        new Hour(23, Price.Low),
        new Hour(24, Price.Medium),
        new Hour(1, Price.Low),
        new Hour(2, Price.Low)
      ])

      const intervals = hourList.getCheapestHourIntervals(3)

      const first = intervals[0]
      const last = intervals[intervals.length - 1]
      expect(intervals).toHaveLength(2)
      expect(first.from).toBe(22)
      expect(first.to).toBe(1)
      expect(last.from).toBe(23)
      expect(last.to).toBe(2)
    })
  })
})
