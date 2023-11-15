import {FC, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../store";
import {toggleShowModal} from "../../store/features/app.ts";
import { CloseOutlined } from '@ant-design/icons';
import styles from "./ModalForm.module.css"
import {Select} from "antd";
import {carMarks, TCarMark} from "../../data/carMarks.ts";
import {carModels, TCarModel} from "../../data/carModels.ts";

type TCarData = {
    carMark: string | null,
    carModel: string | null,
    releaseYear: string | null
}
const ModalForm: FC = () => {

    const {showModal} = useAppSelector((state) => state.app)

    const dispatch = useAppDispatch();

    const [dates, setDates] = useState<number[]>([])

    const [carData, setCarData] = useState<TCarData>({
        carMark: null,
        carModel: null,
        releaseYear: null
    })

    const [saveDisabled, setSaveDisabled] = useState<boolean>(true)

    const clearFields = () => {
        setCarData({
            carMark: null,
            carModel: null,
            releaseYear: null
        })
    }

    useEffect(() => {
        const currentYear = new Date().getFullYear();
        const years = Array.from({ length: 40 }, (_, index) => currentYear - index);
        setDates(years)
    }, [])

    useEffect(() => {
        if (carData.carMark && carData.carModel && carData.releaseYear){
            setSaveDisabled(false)
        }
    }, [carData])

    return (
        <div className={styles.overlay}>
            <div className={styles.modalContainer}>
                <CloseOutlined
                    style={{
                        position: "absolute",
                        top: "10px",
                        right: "15px",
                        fontSize: "20px",
                        cursor: "pointer"
                    }}
                    onClick={() => {dispatch(toggleShowModal())}}
                />
                <h1 className={styles.header}>Марка, модель и год выпуска</h1>
                <Select
                    placeholder="Марка авто"
                    value={carData.carMark}
                    onChange={(e) => {
                        setCarData(prevState => {
                            return {
                                ...prevState,
                                carMark: e
                            }
                        })
                    }}
                    style={{
                        height: "40px",
                        marginBottom: "20px"
                    }}
                >
                    {
                        carMarks.map((car: TCarMark) => <Select.Option key={car.carMark} value={car.carMark}>{car.carMark}</Select.Option>)
                    }
                </Select>
                <Select
                    placeholder="Модель авто"
                    value={carData.carModel}
                    onChange={(e) => {
                        setCarData(prevState => {
                            return {
                                ...prevState,
                                carModel: e
                            }
                        })
                    }}
                    style={{
                        height: "40px",
                        marginBottom: "20px"
                    }}
                >
                    {
                        carModels.map((car: TCarModel) => <Select.Option key={car.carModel} value={car.carModel}>{car.carModel}</Select.Option>)
                    }
                </Select>
                <Select
                    placeholder="Год выпуска"
                    value={carData.releaseYear}
                    onChange={(e) => {
                        setCarData(prevState => {
                            return {
                                ...prevState,
                                releaseYear: e
                            }
                        })
                    }}
                    style={{
                        height: "40px",
                        marginBottom: "20px"
                    }}
                >
                    {
                        dates.map((date) => <Select.Option key={date.toString()} value={date.toString()}>{date}г.</Select.Option>)
                    }
                </Select>
                <div className={styles.buttonsContainer}>
                    <button
                        className={styles.button}
                        onClick={() => {clearFields()}}
                    >Отмена</button>
                    <button
                        className={styles.button}
                        disabled={saveDisabled}
                    >Сохранить</button>
                </div>
            </div>
        </div>
    );
};

export default ModalForm;