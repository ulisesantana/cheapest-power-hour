import { Hour } from './hour'

export class HourInterval {
  readonly from: number
  readonly to: number
  readonly score: number

  constructor (hours: Hour[]) {
    this.from = hours[0].value
    this.to = hours[hours.length - 1].value
    this.score = HourInterval.getTotalScore(hours)
  }

  private static getTotalScore (hours: Hour[]): number {
    return hours.reduce((total, { score }) => total + score, 0)
  }
}
