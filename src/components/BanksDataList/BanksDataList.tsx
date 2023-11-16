import {FC, useEffect, useMemo, useState} from "react";
import {Button, Collapse} from "antd";
import {PlusOutlined, MinusOutlined} from '@ant-design/icons';
import {banks, TBank} from "../../data/banks.ts";
import BankDataItem from "./BankDataItem/BankDataItem.tsx";
import styles from "./BanksDataList.module.css"
import { useAppSelector} from "../../store";
import {checkObjectValues} from "../../helpers/checkObjectValues.ts";
import NotAvailableBanks from "./NotAvailableBanks/NotAvailableBanks.tsx";
import BankHeader from "./BankHeader/BankHeader.tsx";

const { Panel } = Collapse;
const BanksDataList: FC = () => {

    const [focusSection, setFocusSection] = useState<string>("stand")
    const handleFocusText = (name: string) => {
        setFocusSection(name)
    }

    const carInfo = useAppSelector((state) => state.data)

    const [carDataWatcher, setCarDataWatcher] = useState(carInfo)

    const handleRecount = () => {
        setCarDataWatcher(carInfo)
    }

    const memoList =
        useMemo(() => banks
            .filter((bank) => bank.availableModels.includes(carDataWatcher.carData.carModel)
                && bank.availableMarks.includes(carDataWatcher.carData.carMark)
                && bank.minPayment <= Number(carDataWatcher.firstPayment))
            .map((bank: TBank) => {
        return (
            <Panel
                key={bank.id}
                header={<BankHeader logo={bank.logo} bankName={bank.bankName}/>}
            >
                <BankDataItem
                    bank={bank}
                    carCost={carDataWatcher.carCost}
                    timePeriod={Number(carInfo.loanPeriod)}
                    firstPayment={Number(carInfo.firstPayment)}
                />
            </Panel>)
    }),[banks, carDataWatcher])

    useEffect(() => {
        const isDataValid = checkObjectValues(carInfo)
        isDataValid && handleRecount()
    }, [carInfo])

    return <>
                <div>
                    <NotAvailableBanks
                        firstPaymentDeniedBanks={
                        banks
                            .filter((bank) => bank.minPayment > Number(carDataWatcher.firstPayment))}

                        carDataDeniedBanks={
                        banks
                            .filter((bank) => !bank.availableModels.includes(carDataWatcher.carData.carModel)
                                && !bank.availableMarks.includes(carDataWatcher.carData.carMark))}

                        carData={carDataWatcher.carData}
                    />
                    <div className={styles.mainHeader}>
                        <p
                            className={focusSection === "stand" ? styles.mainHeaderFocus : ""}
                            onClick={() => {handleFocusText("stand")}}
                        >Стандарт</p>
                        <p
                            className={focusSection !== "stand" ? styles.mainHeaderFocus : ""}
                            onClick={() => {handleFocusText("subs")}}
                        >Субсидии</p>
                    </div>
                    <Collapse
                        expandIcon={({ isActive }) => isActive ? <MinusOutlined/> : <PlusOutlined/>}
                        expandIconPosition="end"
                        defaultActiveKey={1}
                    >
                        {
                            memoList
                        }
                    </Collapse>
                    <Button
                        className={styles.createNote}
                        type="primary"
                        danger
                    >Создать заявку</Button>
                </div>
        </>
}

export default BanksDataList