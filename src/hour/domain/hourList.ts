import { Hour } from './hour'
import { HourInterval } from './hourInterval'

export class HourList {
  constructor (readonly hours: Hour[]) {}

  get values () {
    return [...this.hours]
  }

  getCheapestHourIntervals (intervalLength: number): HourInterval[] {
    const intervals = this.hours.map(HourList.mapToIntervalWithLength(intervalLength, this.hours))
    const highestScore = Math.max(...intervals.map(({ score }) => score))
    return intervals.filter(({ score }) => score === highestScore)
  }

  private static mapToIntervalWithLength (intervalLength: number, hours: Hour[]): (hour: Hour) => HourInterval {
    return (hour: Hour) => {
      const hourIndex = hours.findIndex(h => h.value === hour.value)
      if (hours.length === 24) {
        const hourInterval = [
          ...hours.slice(hourIndex),
          ...hours.slice(0, hourIndex)
        ].slice(0, intervalLength + 1)
        return new HourInterval(hourInterval)
      } else {
        const hourInterval = hours.slice(hourIndex, hourIndex + intervalLength + 1)
        return new HourInterval(hourInterval)
      }
    }
  }
}
