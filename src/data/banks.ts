export type TBank = {
    id: number,
    bankName: string,
    bid: number,
    paymentPerYear: number,
    lastPaymentDate: string,
    logo: string
}

export const banks: TBank[] = [
    {
        id: 1,
        bankName: "Bank 1",
        bid: 1,
        paymentPerYear: 100000,
        lastPaymentDate: "15 сен 2026г",
        logo: "11"
    },
    {
        id: 2,
        bankName: "Bank 2",
        bid: 2,
        paymentPerYear: 200000,
        lastPaymentDate: "13 янв 2021u",
        logo: "22"
    },
    {
        id: 3,
        bankName: "Bank 3",
        bid: 3,
        paymentPerYear: 300000,
        lastPaymentDate: "17 фев 2019г",
        logo: "33"
    },
    {
        id: 4,
        bankName: "Bank 4",
        bid: 4,
        paymentPerYear: 400000,
        lastPaymentDate: "4 апр 2024г",
        logo: "44"
    }
]