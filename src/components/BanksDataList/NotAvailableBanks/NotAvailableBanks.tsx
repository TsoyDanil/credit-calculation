import {FC} from "react";
import styles from "./NotAvailableBanks.module.css"
import {Content} from "antd/es/layout/layout";
import {TBank} from "../../../data/banks.ts";
import {TCarData} from "../../../types/carData.ts";
import Card from "antd/es/card/Card";
import {parseArray} from "../../../helpers/parseArray.ts";

type Props = {
    firstPaymentDeniedBanks: TBank[],
    carDataDeniedBanks: TBank[],
    carData: TCarData
}
const NotAvailableBanks: FC<Props> = ({firstPaymentDeniedBanks, carDataDeniedBanks, carData}) => {

    if (firstPaymentDeniedBanks.length === 0 && carDataDeniedBanks.length === 0) return null

    return (
        <Content className={styles.root}>
            <div
                style={{ padding: 24, borderRadius: "5px" }}
            >
                {
                    firstPaymentDeniedBanks.length ?
                    <Card title={`По выбранному авто ${carData.carMark} ${carData.carModel}, ${carData.releaseYear} имеется субсидия/акция`} bordered={false} style={{ width: 600 }}>
                        {
                            firstPaymentDeniedBanks.length > 0 ?
                                firstPaymentDeniedBanks.map((b: TBank) => <p key={b.id}>{b.bankName} с первоначальным взносом: {b.minPayment}</p>)
                                : null
                        }
                    </Card> : null
                }

                {
                    carDataDeniedBanks.length ?
                    <Card title="Вам доступны авто" style={{ width: 600, marginTop: "20px" }}>
                        {
                            carDataDeniedBanks.map((b: TBank) => (<p key={b.id}>Марки: {parseArray(b.availableMarks)}</p>))
                        }
                        {
                            carDataDeniedBanks.map((b: TBank) => (<p key={b.id}>Модели: {parseArray(b.availableModels)}</p>))
                        }
                        <p>{carData.releaseYear}</p>
                    </Card> : null
                }
            </div>
        </Content>
    )
}

export default NotAvailableBanks