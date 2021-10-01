import { Price } from './price'

export class Hour {
  readonly value: number
  readonly score: number

  constructor (hour: number, price: Price) {
    this.value = hour
    this.score = Hour.computeScore(price)
  }

  private static computeScore (price: Price): number {
    if (price === Price.Low) return 3
    if (price === Price.Medium) return 2
    return 1
  }
}
