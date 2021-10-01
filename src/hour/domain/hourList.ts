import { Hour } from './hour'
import { HourInterval } from './hourInterval'

export class HourList {
  constructor (readonly hours: Hour[]) {}

  getCheapestHourIntervals (intervalLength: number): HourInterval[] {
    const intervals = this.hours.map(this.mapToIntervalWithLength(intervalLength))
    const highestScore = Math.max(...intervals.map(({ score }) => score))
    return intervals.filter(({ score }) => score === highestScore)
  }

  private mapToIntervalWithLength (intervalLength: number): (hour: Hour) => HourInterval {
    return (hour: Hour) => {
      const hourIndex = this.hours.findIndex(h => h.value === hour.value)
      const hours = [
        ...this.hours.slice(hourIndex),
        ...this.hours.slice(0, hourIndex)
      ].slice(0, intervalLength + 1)
      return new HourInterval(hours)
    }
  }
}
