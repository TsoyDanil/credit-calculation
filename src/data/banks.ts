export type TBank = {
    id: number,
    bankName: string,
    bid: number,
    paymentPerYear: number,
    lastPaymentDate: string,
    logo: string,
    availableMarks: Array<string | null>,
    availableModels: Array<string | null>
    releaseYearPermission: string,
    minPayment: number
}

export const banks: TBank[] = [
    {
        id: 1,
        bankName: "Bank 1",
        bid: 1,
        paymentPerYear: 100000,
        lastPaymentDate: "15 сен 2026г",
        logo: "11",
        availableMarks: ["Mark 1", "Mark 2", "Mark 3"],
        availableModels: ["Model 1", "Model 2", "Model 3"],
        releaseYearPermission: "Any",
        minPayment: 1
    },
    {
        id: 2,
        bankName: "Bank 2",
        bid: 2,
        paymentPerYear: 200000,
        lastPaymentDate: "13 янв 2021u",
        logo: "22",
        availableMarks: ["Mark 1", "Mark 2"],
        availableModels: ["Model 1", "Model 3"],
        releaseYearPermission: "Any",
        minPayment: 10000
    },
    {
        id: 3,
        bankName: "Bank 3",
        bid: 3,
        paymentPerYear: 300000,
        lastPaymentDate: "17 фев 2019г",
        logo: "33",
        availableMarks: ["Mark 1", "Mark 3"],
        availableModels: ["Model 2", "Model 3"],
        releaseYearPermission: "Any",
        minPayment: 100000
    },
    {
        id: 4,
        bankName: "Bank 4",
        bid: 4,
        paymentPerYear: 400000,
        lastPaymentDate: "4 апр 2024г",
        logo: "44",
        availableMarks: ["Mark 1", "Mark 3", "Mark 2"],
        availableModels: ["Model 1", "Model 2"],
        releaseYearPermission: "Any",
        minPayment: 100000
    },
    {
        id: 5,
        bankName: "Bank 5",
        bid: 5,
        paymentPerYear: 500000,
        lastPaymentDate: "5 дек 2015г",
        logo: "44",
        availableMarks: ["Mark 1", "Mark 3", "Mark 2"],
        availableModels: ["Model 1", "Model 3"],
        releaseYearPermission: "Any",
        minPayment: 20000
    }
]