import React, { useState } from 'react';
import {
    SafetyCertificateOutlined,
    FileTextOutlined,
    CalculatorOutlined,
    CarOutlined,
    CheckSquareOutlined,
    CloseCircleOutlined,
    UserOutlined,
    PhoneOutlined,
    HighlightOutlined,
    ScanOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import styles from "./AppLayout.module.css"
import PageTitle from "./PageTitle.tsx";
import DataPlaceholder from "../DataPlaceholder/DataPlaceholder.tsx";
import ModalForm from "../ModalForm/ModalForm.tsx";
import {useAppSelector} from "../../store";
import CalculationForm from "../CalculationForm/CalculationForm.tsx";
import BanksDataList from "../BanksDataList/BanksDataList.tsx";

const { Header, Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Автокредитование', '1', <CarOutlined />),
    getItem('Страхование', '2', <SafetyCertificateOutlined />),
    getItem('POS-кредитование', '3', <CalculatorOutlined />),
    getItem('Урегулирование', '4', <CheckSquareOutlined />),
    getItem('Лизинг', '5', <CloseCircleOutlined />),
    getItem('Клиенты', '6', <UserOutlined />),
    getItem('Отчеты', '7', <FileTextOutlined />)
];

const AppLayout: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {showModal, isCountActive} = useAppSelector((state) => state.app)

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <>
            {
                showModal && <ModalForm/>
            }
            <Layout style={{ minHeight: '100vh', height: "auto" }} >
                <Sider
                    className={styles.menuLayout}
                    collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                    <div className="demo-logo-vertical" />
                    <div className={styles.headerContainer}>
                        <h1>allur</h1>
                        <div
                            className={styles.mainDescription}
                        >
                            <p style={{
                                fontWeight: "bold",
                                fontSize: "16px"
                            }}
                            >Главная</p>
                            <ScanOutlined />
                        </div>
                    </div>
                    <Menu
                        className={styles.menuLayout}
                        defaultSelectedKeys={['1']}
                        mode="inline"
                        items={items}
                    />
                </Sider>
                <Layout>
                    <Header style={{ padding: 0, background: colorBgContainer }}>
                        <PageTitle pageTitle={"Предварительный расчет"}/>
                    </Header>

                    <div style={{display: "flex"}}>
                        <Content style={{background: colorBgContainer}}
                            className={styles.shortInfoContent}
                        >
                            <div className={styles.rootDescriptionData}>
                                <h1
                                    style={{
                                        fontSize: "20px"
                                    }}
                                >
                                    Фамилия И.О
                                </h1>
                                <p
                                    style={{
                                        fontSize: "13px"
                                    }}
                                >
                                    ИИН: 11111111111
                                </p>
                                <HighlightOutlined className={styles.logoDescription}/>
                            </div>
                        </Content>

                        <Content style={{
                            margin: '16px',
                            minHeight: 60,
                            background: colorBgContainer,
                            maxWidth: "240px",
                            borderRadius: "5px"
                        }}>
                            <div className={styles.rootDescriptionData}>
                                <h1
                                    style={{
                                        fontSize: "16px"
                                    }}
                                >
                                    +7(707)200-20-20
                                </h1>
                                <p
                                    style={{
                                        fontSize: "13px"
                                    }}
                                >
                                    Номер телефона
                                </p>
                                <PhoneOutlined className={styles.logoDescription}/>
                            </div>
                        </Content>
                    </div>

                    <div style={{
                        display: "flex"
                    }}>
                        <Content className={styles.contentStyles}>
                            <div
                                className={styles.separateContent}
                                style={{ minHeight: 360 }}>
                                <CalculationForm/>
                            </div>
                        </Content>

                        <Content className={styles.contentStyles}>
                            <div
                                className={styles.separateContent}
                                style={{  minHeight: 250 }}>
                                <h1 className={styles.header}>Калькулятор</h1>
                                {
                                    !isCountActive ?
                                        <DataPlaceholder/> :
                                        <BanksDataList/>
                                }
                            </div>
                        </Content>
                    </div>
                </Layout>
            </Layout>
        </>
    );
};

export default AppLayout;