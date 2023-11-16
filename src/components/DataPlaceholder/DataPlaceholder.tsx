import {FC} from "react";
import styles from "./DataPlaceholder.module.css"
import calcutorImage from "../../assets/img.png"
const DataPlaceholder: FC = () => {

    return <div className={styles.root}>

        <p className={styles.text}>Заполните все параметры, чтобы получить предварительные решения от банков</p>

        <img className={styles.image} src={calcutorImage} alt="tip"/>
    </div>
}

export default DataPlaceholder