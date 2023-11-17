import {FC, useEffect, useState} from "react";
import styles from "./NotAvailableBanks.module.css"
import {Content} from "antd/es/layout/layout";
import {TCarData} from "../../../types/TCarData.ts";
import Card from "antd/es/card/Card";
import {getMarksPerModel} from "../../../helpers/getMarksPerModel.ts";
import {TBank} from "../../../types/TBank.ts";

type Props = {
    firstPaymentDeniedBanks: TBank[],
    carDataDeniedBanks: TBank[],
    carData: TCarData
}
const NotAvailableBanks: FC<Props> = ({firstPaymentDeniedBanks, carDataDeniedBanks, carData}) => {

    const [marksPerModel, setMarksPerModel] = useState<string[]>([])

    useEffect(() => {
        if (carDataDeniedBanks.length > 0){
            const result = getMarksPerModel(carDataDeniedBanks)
            setMarksPerModel(result)
        }
    }, [])

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
                    marksPerModel.length ?
                    <Card title="Вам доступны авто" style={{ width: 600, marginTop: "20px" }}>
                        {
                            marksPerModel.map((markPerModel: string) => (<p key={markPerModel}>{markPerModel} {carData.releaseYear} г</p>))
                        }
                    </Card> : null
                }
            </div>
        </Content>
    )
}

export default NotAvailableBanks