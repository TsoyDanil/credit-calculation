import {FC, useState} from "react";
import {Button, Collapse} from "antd";
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import {banks, TBank} from "../../data/banks.ts";
import BankDataItem from "./BankDataItem.tsx";
import styles from "./BanksDataList.module.css"

const { Panel } = Collapse;
const BanksDataList: FC = () => {

    const [focusSection, setFocusSection] = useState<string>("stand")

    const handleFocusText = (name: string) => {
        setFocusSection(name)
    }

    return <>
                <div className={styles.mainHeader}>
                    <p
                        className={focusSection === "stand" ? styles.mainHeaderFocus : ""}
                        onClick={() => {handleFocusText("stand")}}
                    >Стандарт</p>
                    <p
                        className={focusSection !== "stand" ? styles.mainHeaderFocus : ""}
                        onClick={() => {handleFocusText("subs")}}
                    >Субсидии</p>
                </div>
                <Collapse
                    expandIcon={({ isActive }) => isActive ? <MinusOutlined/> : <PlusOutlined/>}
                    expandIconPosition="right" // или "left", в зависимости от вашего предпочтения
                >
                    {
                        banks.map((bank: TBank) => {
                            return <Panel key={bank.id}
                                          header={<div
                                                    style={{display: "flex", alignItems: "center"}}
                                                >
                                              <div
                                                  style={{
                                                      width: "30px",
                                                      height: "30px",
                                                      display: "flex",
                                                      alignItems: "center",
                                                      justifyContent: "center",
                                                      color: "white",
                                                      background: "black",
                                                      borderRadius: "50%",
                                                      marginRight: "20px"
                                                  }}
                                                >
                                                  {bank.logo}
                                              </div>
                                              <p>{bank.bankName}</p>
                                          </div>}>
                                    <BankDataItem bank={bank}/>
                                </Panel>
                        })
                    }
                </Collapse>
                <Button
                    style={{
                        marginTop: "20px",
                        width: "100%",
                        height: "40px"
                    }}
                    type="primary"
                    danger
                >Создать заявку</Button>
        </>
}

export default BanksDataList