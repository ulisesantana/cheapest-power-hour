import { Hour, HourList, Price } from '../../src/hour/domain'

export function buildHourList (hours: Hour[] = []): HourList {
  return new HourList([
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
    new Hour(11, Price.Medium),
    new Hour(12, Price.Medium),
    new Hour(13, Price.Medium),
    new Hour(14, Price.Medium),
    new Hour(15, Price.Medium),
    new Hour(16, Price.Medium),
    new Hour(17, Price.High),
    new Hour(18, Price.High),
    new Hour(19, Price.High),
    new Hour(20, Price.High),
    new Hour(21, Price.High),
    new Hour(22, Price.High),
    new Hour(23, Price.High),
    new Hour(24, Price.High)
  ].map(hour => hours.find(givenOur => hour.value === givenOur.value) ?? hour)
  )
}
