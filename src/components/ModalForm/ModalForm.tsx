import {FC, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../store";
import {toggleShowModal} from "../../store/features/app.ts";
import { CloseOutlined } from '@ant-design/icons';
import styles from "./ModalForm.module.css"
import {Select} from "antd";
import {carMarks, TCarMark} from "../../data/carMarks.ts";
import {carModels, TCarModel} from "../../data/carModels.ts";
import {TCarData} from "../../types/TCarData.ts";
import {setCarOverallData} from "../../store/features/data.ts";
const ModalForm: FC = () => {

    const dispatch = useAppDispatch();

    const {carData} = useAppSelector((state) => state.data)

    const [dates, setDates] = useState<number[]>([])

    const [carDto, setCarDto] = useState<TCarData>(carData)

    const [saveDisabled, setSaveDisabled] = useState<boolean>(true)

    const handleSaveCarData = () => {
        dispatch(setCarOverallData(carDto))
        dispatch(toggleShowModal())
    }

    useEffect(() => {
        const currentYear = new Date().getFullYear();
        const years = Array.from({ length: 40 }, (_, index) => currentYear - index);
        setDates(years)
    }, [])

    useEffect(() => {
        if (carDto.carMark && carDto.carModel && carDto.releaseYear){
            setSaveDisabled(false)
        }
    }, [carDto])

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
                    value={carDto.carMark}
                    onChange={(e) => {
                        setCarDto(prevState => {
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
                    value={carDto.carModel}
                    onChange={(e) => {
                        setCarDto(prevState => {
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
                    value={carDto.releaseYear}
                    onChange={(e) => {
                        setCarDto(prevState => {
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
                        dates.map((date) => <Select.Option key={date} value={date}>{date}г.</Select.Option>)
                    }
                </Select>
                <div className={styles.buttonsContainer}>
                    <button
                        className={styles.button}
                        onClick={() => {dispatch(toggleShowModal())}}
                    >Отмена</button>
                    <button
                        className={styles.button}
                        disabled={saveDisabled}
                        onClick={()=>{handleSaveCarData()}}
                    >Сохранить</button>
                </div>
            </div>
        </div>
    );
};

export default ModalForm;