import { FC } from "react";
import styles from "./AppLayout.module.css"
import { BellOutlined, DownOutlined } from '@ant-design/icons'
import {Dropdown, MenuProps, Space} from "antd";

type Props = {
    pageTitle: string
}
const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="#">
                Профиль
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="#">
                Мой кабинет
            </a>
        )
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                Действия
            </a>
        ),
    },
    {
        key: '4',
        danger: true,
        label: 'Выйти',
    },
];

const PageTitle:FC<Props> = ({pageTitle}) => {
    return <div className={styles.titleContainer}>
        <div className={styles.pageInfoContainer}>
            <p
                style={{
                    fontSize: "25px",
                    padding: "10px 20px 28px 20px",
                    display: "flex",
                    cursor: "pointer",
                    fontWeight: "bold"
                }}
            >{`<`}</p>
            <div>
                <h1>{pageTitle}</h1>
                <p>Назад</p>
            </div>
        </div>
        <div className={styles.userDataContainer}>
            <button className={styles.languageIndicator}>RU</button>
            <BellOutlined
                style={{
                    fontSize: '20px',
                    marginLeft: "35px"
                }}/>
            <div>
                <div
                    className={styles.userShortName}
                >
                    ТА
                </div>
            </div>

            <Dropdown menu={{ items }}>
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <span style={{
                            color: "#798595",
                            marginLeft: "10px"
                        }}>Тахинова Алия</span>
                        <DownOutlined style={{color: "#798595"}}/>
                    </Space>
                </a>
            </Dropdown>
        </div>
    </div>
}

export default PageTitle