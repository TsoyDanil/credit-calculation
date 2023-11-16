import {FC, useEffect, useMemo, useState} from "react";
import {Button, Collapse} from "antd";
import {PlusOutlined, MinusOutlined, CalculatorOutlined} from '@ant-design/icons';
import {banks, TBank} from "../../data/banks.ts";
import BankDataItem from "./BankDataItem/BankDataItem.tsx";
import styles from "./BanksDataList.module.css"
import { useAppSelector} from "../../store";
import {checkObjectValues} from "../../helpers/checkObjectValues.ts";
import NotAvailableBanks from "./NotAvailableBanks/NotAvailableBanks.tsx";

const { Panel } = Collapse;
const BanksDataList: FC = () => {

    const [focusSection, setFocusSection] = useState<string>("stand")
    const handleFocusText = (name: string) => {
        setFocusSection(name)
    }

    const carInfo = useAppSelector((state) => state.data)

    const [carDataWatcher, setCarDataWatcher] = useState(carInfo)

    const [recountAvailable, setRecountAvailable] = useState<boolean>(false)
    const handleRecount = () => {
        setCarDataWatcher(carInfo)
        setRecountAvailable(false)
    }

    const memoList =
        useMemo(() => banks
            .filter((bank) => bank.availableModels.includes(carDataWatcher.carData.carModel)
                && bank.availableMarks.includes(carDataWatcher.carData.carMark)
                && bank.minPayment <= carDataWatcher.firstPayment)
            .map((bank: TBank) => {
        return <Panel key={bank.id}
                      header={<div
                          style={{display: "flex", alignItems: "center"}}
                      >
                          <div
                              style={{
                                  width: "30px",
                                  height: "30px",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  color: "white",
                                  background: "black",
                                  borderRadius: "50%",
                                  marginRight: "20px"
                              }}
                          >
                              {bank.logo}
                          </div>
                          <p>{bank.bankName}</p>
                      </div>}>
            <BankDataItem bank={bank} carCost={carDataWatcher.carCost}/>
        </Panel>
    }),[banks, carDataWatcher])

    useEffect(() => {
        const isDataValid = checkObjectValues(carInfo)
        isDataValid ? setRecountAvailable(true) : setRecountAvailable(false)
    }, [carInfo])

    useEffect(() => {
        setRecountAvailable(false)
    }, [])

    return <>
                <div>
                    <NotAvailableBanks
                        firstPaymentDeniedBanks={
                        banks
                            .filter((bank) => !bank.availableModels.includes(carDataWatcher.carData.carModel)
                                && !bank.availableMarks.includes(carDataWatcher.carData.carMark))}
                        carDataDeniedBanks={
                        banks
                            .filter((bank) => bank.minPayment <= carDataWatcher.firstPayment)}
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
                    <Button
                        style={{width: "100%", marginBottom: "20px"}}
                        icon={<CalculatorOutlined />}
                        onClick={handleRecount}
                        disabled={!recountAvailable}
                    >Сделать перерасчет
                    </Button>
                    <Collapse
                        expandIcon={({ isActive }) => isActive ? <MinusOutlined/> : <PlusOutlined/>}
                        expandIconPosition="right"
                        defaultActiveKey={1}
                    >
                        {
                            memoList
                        }
                    </Collapse>
                    <Button
                        style={{
                            marginTop: "20px",
                            width: "100%",
                            height: "40px"
                        }}
                        type="primary"
                        danger
                    >Создать заявку</Button>
                </div>
        </>
}

export default BanksDataList