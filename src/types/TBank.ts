export type TBank = {
    id: number,
    bankName: string,
    bid: number,
    paymentPerYear: number,
    lastPaymentDate: string,
    logo: string,
    availableMarks: Array<string | null>,
    availableModels: Array<string | null>
    releaseYearPermission: number,
    minPayment: number
}