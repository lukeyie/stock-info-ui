export interface PERatiosResponse {
    stockName: string
    ticker: string
    peRatios?: PERatio[]
}

export interface PERatio {
    year: number
    peRatio: number
}