import {TBank} from "../types/TBank.ts";

export const banks: TBank[] = [
    {
        id: 1,
        bankName: "Bank 1",
        bid: 1,
        paymentPerYear: 100000,
        lastPaymentDate: "15 сен 2026г",
        logo: "free",
        availableMarks: ["Mark 1", "Mark 2", "Mark 3"],
        availableModels: ["Model 1", "Model 2", "Model 3"],
        releaseYearPermission: 1000,
        minPayment: 1
    },
    {
        id: 2,
        bankName: "Bank 2",
        bid: 2,
        paymentPerYear: 200000,
        lastPaymentDate: "13 янв 2021u",
        logo: "halyk",
        availableMarks: ["Mark 1", "Mark 2"],
        availableModels: ["Model 1", "Model 3"],
        releaseYearPermission: 1900,
        minPayment: 10000
    },
    {
        id: 3,
        bankName: "Bank 3",
        bid: 3,
        paymentPerYear: 300000,
        lastPaymentDate: "17 фев 2019г",
        logo: "free",
        availableMarks: ["Mark 1", "Mark 3"],
        availableModels: ["Model 2", "Model 3"],
        releaseYearPermission: 2000,
        minPayment: 100000
    },
    {
        id: 4,
        bankName: "Bank 4",
        bid: 4,
        paymentPerYear: 400000,
        lastPaymentDate: "4 апр 2024г",
        logo: "halyk",
        availableMarks: ["Mark 1", "Mark 3", "Mark 2"],
        availableModels: ["Model 1", "Model 2"],
        releaseYearPermission: 2010,
        minPayment: 100000
    },
    {
        id: 5,
        bankName: "Bank 5",
        bid: 5,
        paymentPerYear: 500000,
        lastPaymentDate: "5 дек 2015г",
        logo: "free",
        availableMarks: ["Mark 1", "Mark 3", "Mark 2"],
        availableModels: ["Model 1", "Model 3"],
        releaseYearPermission: 2021,
        minPayment: 20000
    }
]