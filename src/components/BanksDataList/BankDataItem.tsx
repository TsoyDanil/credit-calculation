import {FC} from "react";
import {TBank} from "../../data/banks.ts";
import styles from "./BankDataItem.module.css"
import {Button} from "antd";
import {PrinterOutlined} from '@ant-design/icons'
import {getRandomCost} from "../../helpers/getRandomCost.ts";

type Props = {
    bank: TBank,
    carCost: number | null
}


const BankDataItem:FC<Props> = ({bank, carCost}) => {

    return <div className={styles.root}>
        <div className={styles.headerData}>
            <div>
                <h3>Ежемесачный плаетж</h3>
                <h1>{getRandomCost(100000, 500000)} т</h1>
            </div>

            <div>
                <h3>Ставка</h3>
                <h1
                    style={{color: "red"}}
                >{bank.bid},0 %</h1>
            </div>
        </div>

        <hr style={{margin: "20px 0"}}/>

        <div
            className={styles.dataBlock}
        >
            <p>Стоимость КАСКО/год</p>
            <p><span>{bank.paymentPerYear} т</span></p>
        </div>

        <div
            className={styles.dataBlock}
        >
            <p>Сумма займа</p>
            <p><span>{carCost} т</span></p>
        </div>

        <div
            className={styles.dataBlock}
        >
            <p>Сумма переплаты с учетом КАСКО</p>
            <p><span>{getRandomCost(1000000, 3000000)} т</span></p>
        </div>

        <div
            className={styles.dataBlock}
        >
            <p>Дата последнего платежа</p>
            <p><span>{bank.lastPaymentDate}</span></p>
        </div>

        <Button
            style={{
                width: "100%",
                height: "40px"
            }}
            icon={<PrinterOutlined />}
        >Распечатать</Button>
    </div>
}

export default BankDataItem