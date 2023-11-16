import {FC} from "react";
import {Select, Switch} from "antd";
import {bargainPoints, TBargainPoint} from "../../data/bargainPoints.ts";
import styles from "./CalculationForm.module.css"
import Input from "antd/es/input/Input";
import {EditOutlined} from '@ant-design/icons'
import {useAppDispatch, useAppSelector} from "../../store";
import {toggleShowModal} from "../../store/features/app.ts";
import {carTypes, TCarType} from "../../data/carTpyes.ts";
import {loanTime} from "../../data/loanTime.ts";
import {
    setBargainPoint, setCarCost,
    setCarType,
    setFirstPayment,
    setLoanPeriod,
    toggleWithIncome
} from "../../store/features/data.ts";

const CalculationForm: FC = () => {

    const {carData,
        withIncome,
        loanPeriod,
        bargainPoint,
        carType,
        carCost,
        firstPayment
    } = useAppSelector((state) => state.data)

    const dispatch = useAppDispatch()

    return <div className={styles.root}>
        <h1>Рассчитать автокредитование</h1>
            <div className={styles.selectRoot}>
                <Select
                    className={styles.select}
                    placeholder="Торговая точка"
                    value={bargainPoint}
                    onChange={(e) => {dispatch(setBargainPoint(e))}}
                >
                    {
                        bargainPoints.map((point: TBargainPoint) =>
                            <Select.Option key={point.id} value={point.pointName}>{point.pointName}</Select.Option>)
                    }
                </Select>

                <Select
                    className={styles.select}
                    placeholder="Тип авто"
                    value={carType}
                    onChange={(e) => {dispatch(setCarType(e))}}
                >
                    {
                        carTypes.map((point: TCarType) =>
                            <Select.Option key={point.id} value={point.carType}>{point.carType}</Select.Option>)
                    }
                </Select>
            </div>

            <Input
                style={{ height: "40px", zIndex: "1" }}
                suffix={<EditOutlined />}
                onClick={() => {dispatch(toggleShowModal())}}
                placeholder="Марка, модель и год выпуска"
                value={carData.carModel && carData.carMark && carData.releaseYear ? `${carData.carMark} ${carData.carModel}, ${carData.releaseYear}` : ""}
            />

        <div className={styles.selectRoot}>
            <Input
                rootClassName={styles.input}
                placeholder="Стоимость авто"
                value={carCost ? `₸ ${carCost}` : ""}
                onChange={(e) => {
                    let inputValue = e.target.value
                    inputValue = inputValue.replace(/[^0-9]/g, '')
                    dispatch(setCarCost(inputValue !== "" ? Number(inputValue) : null))
                }}
            />

            <Input
                rootClassName={styles.input}
                placeholder="Первоначальный взнос"
                value={firstPayment ? `₸ ${firstPayment}` : ""}
                onChange={(e) => {
                    let inputValue = e.target.value
                    if (e.target.value.length === 12) return
                    inputValue = inputValue.replace(/[^0-9]/g, '')
                    dispatch(setFirstPayment(inputValue !== "" ? Number(inputValue) : null))
                }}
            />
        </div>

        <div className={styles.selectRoot}>
            <Select
                className={styles.select}
                placeholder="Срок займа"
                value={loanPeriod}
                onChange={(e) => {dispatch(setLoanPeriod(e))}}
            >
                {
                    loanTime.map((time: number) =>
                        <Select.Option key={time} value={time}>{time} месяцев</Select.Option>)
                }
            </Select>

            <div className={styles.checkboxContainer}>
                <Switch checked={withIncome} onChange={() => {dispatch(toggleWithIncome())}}/>
                <p>С потверждением дохода</p>
            </div>
        </div>
        </div>
}

export default CalculationForm