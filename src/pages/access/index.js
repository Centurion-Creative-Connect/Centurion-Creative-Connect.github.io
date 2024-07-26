import Layout from '@theme/Layout';
import VRCLikeEmbed from "../../components/VRCLikeEmbed";
import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import styles from './styles.module.css';

export default function AccessPage() {
    return (<Layout title={"Access"} description={"How to join Centurion Creative Connect hosted event"}>
        <main style={{marginTop: 50 + "px", maxWidth: 75 + "rem", marginLeft: "auto", marginRight: "auto", padding: 0.5 + "rem"}}>
            <Container fluid>
                <Row>
                    <Col>
                        <h1>How to Join</h1>
                        <span className={"catchCopy"}>VRChatなら徒歩0分！</span>
                        <p>当イベントはVRChatのGroupインスタンスにて開催しておりますので、事前にグループへの参加を済ませていただくようお願いしております。</p>
                        <p>
                            <a>こちらのリンク</a>、またはVRChat内でグループID <code>CCCOEG.3895</code> を検索し参加したのち、開催時間になりましたらGroupインスタンスにJoinをお願いします。
                        </p>
                    </Col>
                    <Col>
                        <VRCLikeEmbed name={"CCC公式サバゲーイベントグループ"}
                                      desc={<><p>隔週金曜開催VRCサバゲーイベント「Centurion」などの、Centurion Creative
                                          Connect（CCC）が運営するイベント参加用のグループになります。</p></>}
                                      src={require("@site/static/img/event-group-banner.png").default}
                                      href={"/vrcgroup"}></VRCLikeEmbed>
                    </Col>
                </Row>
                <Row style={{marginTop: 50 + "px", marginBottom: 50 + "px"}}>
                    <Col>
                        <div className={styles.shootingRangeThumb}>
                            <Row style={{margin: 4 + "px"}}>
                                <div style={{width: 24 + "px"}}></div>
                                <img className={styles.shootingRangeThumb1}
                                     src={require("@site/static/img/20220718033920_1.jpg").default}
                                     alt={"Centurion Shooting Rangeのターゲットを映す写真"}/>
                            </Row>
                            <Row style={{margin: 4 + "px"}}>
                                <img className={styles.shootingRangeThumb2}
                                     src={require("@site/static/img/20220718033944_1.jpg").default}
                                     alt={"Centurion Shooting Rangeの銃を映す写真"}/>
                                <div style={{width: 24 + "px"}}></div>
                            </Row>
                        </div>
                    </Col>
                    <Col lg="4">
                        <div style={{height: 240 + "px"}}>
                            <h1>Shooting Range</h1>
                            <p>また、合わせてProject
                                Centurionのアセットを用いたシューティングレンジも公開しております。</p>
                            <p>こだわりのサウンド、BB弾特有の挙動をぜひ試してみてください。</p>
                        </div>
                        <VRCLikeEmbed
                            name={"VRSGF_Centurion シューティングレンジ"}
                            desc={(<>
                                <p>VRサバイバルゲームフィールド「Centurion」のシューティングレンジになります。</p>
                                <p>今後もいくつかアップデート予定なのでお楽しみに！</p></>)}
                            src={require("@site/static/img/shooting-range-thumbnail.png").default}
                            href={"/vrcshootingrange"}></VRCLikeEmbed>
                    </Col>
                </Row>
            </Container>
        </main>
    </Layout>);
}