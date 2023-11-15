import {FC} from "react";
import {Select} from "antd";
import {bargainPoints, TBargainPoint} from "../../data/bargainPoints.ts";
import styles from "./CalculationForm.module.css"

const CalculationForm: FC = () => {
    return <div className={styles.root}>
        <h1>Рассчитать автокредитование</h1>
            <div className={styles.selectRoot}>
                <Select
                    style={{
                        height: "40px",
                        marginBottom: "20px",
                        maxWidth: "310px",
                        width: "100%"
                    }}
                    placeholder="Торговая точка"
                >
                    {
                        bargainPoints.map((point: TBargainPoint) =>
                            <Select.Option key={point.id.toString()} value={point.pointName}>{point.pointName}</Select.Option>)
                    }
                </Select>

                <Select
                    style={{
                        height: "40px",
                        marginBottom: "20px",
                        maxWidth: "310px",
                        width: "100%"
                    }}
                    placeholder="Торговая точка"
                >
                    {
                        bargainPoints.map((point: TBargainPoint) =>
                            <Select.Option key={point.id.toString()} value={point.pointName}>{point.pointName}</Select.Option>)
                    }
                </Select>
            </div>
        </div>
}

export default CalculationForm