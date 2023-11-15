import {FC} from "react";
import styles from "./DataPlaceholder.module.css"
import calcutorImage from "../../assets/img.png"
import {useAppDispatch} from "../../store";
import {toggleShowModal} from "../../store/features/app.ts";
const DataPlaceholder: FC = () => {

    const dispatch = useAppDispatch()

    return <div className={styles.root}
            onClick={() => {dispatch(toggleShowModal())}}
        >

        <p className={styles.text}>Заполните все параметры, чтобы получить предварительные решения от банков</p>

        <img className={styles.image} src={calcutorImage} alt="tip"/>
    </div>
}

export default DataPlaceholder