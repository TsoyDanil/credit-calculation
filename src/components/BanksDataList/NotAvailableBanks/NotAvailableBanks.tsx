import {FC, useState} from "react";
import styles from "./NotAvailableBanks.css"
import {Content} from "antd/es/layout/layout";
import {TBank} from "../../../data/banks.ts";
import {TCarData} from "../../../types/carData.ts";
import {theme} from "antd";

type Props = {
    firstPaymentDeniedBanks: TBank[],
    carDataDeniedBanks: TBank[],
    carData: TCarData
}
const NotAvailableBanks: FC<Props> = ({firstPaymentDeniedBanks, carDataDeniedBanks, carData}) => {

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return <Content
        style={{ maxWidth: "550px", width: "100%", minHeight: 100, background: colorBgContainer, position: "absolute", left: "15%", top: "60%" }}>
        <div
            style={{ padding: 24, borderRadius: "5px" }}
        >
            {
                firstPaymentDeniedBanks.length > 0 ?
                    <p>
                        По выбранному авто {carData.carMark} {carData.carModel}, {carData.releaseYear}
                        имеется субсидия/акция в {firstPaymentDeniedBanks.map((bank) => bank.bankName + ', ')}
                    </p>
                    : null
            }
            {
                carDataDeniedBanks.length > 0 ?
                    <p>
                        Вам доступны авто {carDataDeniedBanks
                        .map((bank) => `${bank.availableMarks[0]} ${bank.availableModels[0]}, ${carData.releaseYear} г `)}
                        по подходящие по условиям субсидии/акции с вашим первоначальным взносом».
                    </p>
                    : null
            }
        </div>
    </Content>
}

export default NotAvailableBanks