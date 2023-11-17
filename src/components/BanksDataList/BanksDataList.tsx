import { FC, useEffect, useMemo, useState} from "react";
import {Button, Collapse, notification} from "antd";
import {PlusOutlined, MinusOutlined} from '@ant-design/icons';
import {banks} from "../../data/banks.ts";
import BankDataItem from "./BankDataItem/BankDataItem.tsx";
import styles from "./BanksDataList.module.css"
import { useAppSelector} from "../../store";
import {checkObjectValues} from "../../helpers/checkObjectValues.ts";
import NotAvailableBanks from "./NotAvailableBanks/NotAvailableBanks.tsx";
import BankHeader from "./BankHeader/BankHeader.tsx";
import {TBank} from "../../types/TBank.ts";
import {NotificationPlacement} from "antd/es/notification/interface";
import Modal from "antd/es/modal/Modal";

const { Panel } = Collapse;
const BanksDataList: FC = () => {

    const [focusSection, setFocusSection] = useState<string>("stand")

    const [modalVisible, setModalVisible] = useState(false);
    const [modalTimer, setModalTimer] = useState<number | null>(null);

    const handleFocusText = (name: string) => {
        setFocusSection(name)
    }

    const carInfo = useAppSelector((state) => state.data)

    const [carDataWatcher, setCarDataWatcher] = useState(carInfo)

    const handleRecount = () => {
        setCarDataWatcher(carInfo)
    }

    const handleModalClose = () => {
        if (modalTimer) {
            clearTimeout(modalTimer);
        }
        setModalVisible(false);
    };

    const handleOnPrintClick = (bank: TBank) => {

        localStorage.setItem('selectedBank', JSON.stringify(bank));

        notification.success({
            message: 'Распечатано успешно!',
            description: `Выбран банк: ${bank.bankName}. Данные были сохранены`,
            placement: 'topLeft' as NotificationPlacement
        });
    };

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
                    handlePrint={()=>{
                        handleOnPrintClick(bank)
                    }}
                />
            </Panel>)
    }),[banks, carDataWatcher])

    const sendRequest = () => {
        setModalVisible(true);
        const timer = setTimeout(() => {
            setModalVisible(false);
        }, 5000);
        setModalTimer(timer);
    };

    useEffect(() => {
        const isDataValid = checkObjectValues(carInfo)
        isDataValid && handleRecount()
    }, [carInfo])

    useEffect(() => {
        const selectedBankData = localStorage.getItem('selectedBank');
        if (selectedBankData) {
            const selectedBank = JSON.parse(selectedBankData);
            notification.info({
                message: 'Имеется сохраненный банк',
                description: `Выбран банк: ${selectedBank.bankName}`,
                placement: 'topRight' as NotificationPlacement,
            });
        }
    }, [])

    return <>
            <Modal
                title="Заявка создана!"
                visible={modalVisible}
                onOk={handleModalClose}
                onCancel={handleModalClose}
                footer={[
                    <Button key="ok" type="primary" onClick={handleModalClose}>
                        OK
                    </Button>,
                ]}
            >
                <p>Ваша заявка была успешно создана и отправлена!</p>
            </Modal>
                <div>
                    <NotAvailableBanks
                        firstPaymentDeniedBanks={
                        banks
                            .filter((bank) => bank.minPayment > Number(carDataWatcher.firstPayment))}

                        carDataDeniedBanks={
                        banks
                            .filter((bank) => !bank.availableModels.includes(carDataWatcher.carData.carModel)
                                && !bank.availableMarks.includes(carDataWatcher.carData.carMark)
                                && bank.releaseYearPermission <= Number(carDataWatcher.carData.releaseYear)
                            )}

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
                        onClick={() => {sendRequest()}}
                    >Создать заявку</Button>
                </div>
        </>
}

export default BanksDataList