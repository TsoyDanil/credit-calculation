import {FC, useEffect, useState} from "react";
import styles from "./DataPlaceholder.module.css"
import calcutorImage from "../../assets/img.png"
import {useAppDispatch, useAppSelector} from "../../store";
import {Button} from "antd";
import {checkObjectValues} from "../../helpers/checkObjectValues.ts";
import {
    CalculatorOutlined
} from '@ant-design/icons';
import {toggleCountActive} from "../../store/features/app.ts";
import {TCarData} from "../../types/carData.ts";

type TDataObject = {
    carCost: number | null,
    carType: string | null,
    bargainPoint: string | null,
    firstPayment: number | null,
    loanPeriod: number | null,
    carData: TCarData
}
const DataPlaceholder: FC = () => {

    const dataState= useAppSelector((state) => state.data)

    const dispatch = useAppDispatch()

    const [isDataFilled, setIsDataFilled] = useState<boolean>(false)

    useEffect(() => {
        const dataHandler: TDataObject = {
            carCost: dataState.carCost,
            carType: dataState.carType,
            bargainPoint: dataState.bargainPoint,
            firstPayment: dataState.firstPayment,
            loanPeriod: dataState.loanPeriod,
            carData: dataState.carData
        }
        const isValuesStated = checkObjectValues(dataHandler)
        setIsDataFilled(isValuesStated)
    }, [dataState])

    return <div className={styles.root}>

        <p className={styles.text}>
            Заполните все параметры и нажмите расчитать, чтобы получить предварительные решения от банков
        </p>

        <Button
            className={styles.button}
            disabled={!isDataFilled}
            icon={<CalculatorOutlined />}
            onClick={() => {dispatch(toggleCountActive())}}
        >Расчитать</Button>

        <img className={styles.image} src={calcutorImage} alt="tip"/>
    </div>
}

export default DataPlaceholder