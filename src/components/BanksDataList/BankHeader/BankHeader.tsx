import {FC, useEffect, useState} from "react";
import styles from "./BankHeader.module.css"
import freedomLogo from "../../../assets/Group.png"
import halykLogo from "../../../assets/Logo.png"
import otherBank from "../../../assets/Free.png"

type Props = {
    logo: string,
    bankName: string
}


const BankHeader: FC<Props> = ({ logo, bankName}) => {

    const [logoSrc, setLogoSrc] = useState<string | undefined>(undefined)

    useEffect(() => {
        switch (logo) {
            case "free":
                setLogoSrc(freedomLogo);
                break;
            case "halyk":
                setLogoSrc(halykLogo);
                break;
            default:
                setLogoSrc(otherBank);
                break;
        }
    },[])

    return <>
        <div className={styles.root}>
            <img className={styles.logo} src={logoSrc} alt="logo"/>
            <p>{bankName}</p>
        </div>
    </>
}

export default BankHeader