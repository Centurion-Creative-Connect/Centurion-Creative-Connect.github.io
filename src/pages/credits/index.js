import Layout from '@theme/Layout';
import styles from './styles.module.css';
import Heading from "@theme/Heading";
import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

function Staff({name, image, description, x_url}) {
    return (<div className={"card"} style={{margin: 14 + "px"}}>
        <div className={"card__image"}>
            <img alt={name} src={image} style={{width: 300 + "px", height: 300 + "px", objectFit: "cover"}}></img>
        </div>
        <div className={"card__body"}>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <Heading as="h3">{name}</Heading>
                <div>
                    {x_url ? <a href={x_url}>
                        <div className={'icon icon-x'}></div>
                    </a> : null}

                </div>
            </div>
            {description}
        </div>
    </div>);
}

function SpecialThanks({name, description, x_url}) {
    return (<tr>
        <th>{description}</th>
        <th>{name}</th>
        <th>{"@" + x_url.split("/")[3]}</th>
    </tr>)
}

export default function Index() {
    const EventStaffList = [{
        name: "Nuinomi", image: useBaseUrl("/img/profile/nuinomi.jpg"), description: <>オーナー
            <ul>
                <li>モデル制作</li>
                <li>マップ制作</li>
                <li>公式Twitter運営</li>
            </ul>
        </>, x_url: "https://twitter.com/Nuinomi_9193",
    }, {
        name: "DerpyNewbie", image: useBaseUrl("/img/profile/derpynewbie.jpg"), description: <>プログラマー
            <ul>
                <li>うにちーえんじにあ</li>
                <li>うぇぶえんじにあ</li>
            </ul>
        </>, x_url: "https://twitter.com/DerpyNewbie",
    }, {
        name: "at_suma", image: useBaseUrl("/img/profile/suma.jpg"), description: <>メインスタッフ <ul>
            <li>広報担当・動画制作</li>
        </ul></>, x_url: "https://twitter.com/suma_VRC",
    }, {
        name: "キンロク", image: useBaseUrl("/img/profile/kinroku.jpg"), description: <>メインスタッフ
            <ul>
                <li>マップ制作</li>
            </ul>
        </>, x_url: "https://twitter.com/Chiquita_Dforce",
    }, {
        name: "Sweet [甘王] king", image: useBaseUrl("/img/profile/amaou.jpg"), description: <>サブスタッフ
            <ul>
                <li>マップ制作</li>
            </ul>
        </>, x_url: "https://twitter.com/KING84196979",
    },];

    const ProdStaffList = [{
        name: "Gelato_RF",
        image: useBaseUrl("/img/profile/gelatorf.png"),
        description: <>マップ制作・サンプルアバター調整</>,
        x_url: "https://twitter.com/Gepard_RF"
    }, {
        name: "えるびー",
        image: useBaseUrl("/img/profile/elvie.png"),
        description: <>広報担当・動画制作</>,
        x_url: "https://twitter.com/ElviE___"
    }, {
        name: "claudia-s",
        image: useBaseUrl("/img/profile/claudia.png"),
        description: <>公式ホームページ運営</>,
        x_url: "https://twitter.com/clau_dia_s"
    }];

    const SpecialThanksList = [{
        name: "しげひろ deNAFUCO", description: <>貸出アバター</>, x_url: "https://twitter.com/gaku2_sigehiro",
    }, {
        name: "くっしーEX", description: <>SE制作、編集</>, x_url: "https://twitter.com/feriaEX"
    }, {
        name: "葉月しおん", description: <>動画BGM作成</>, x_url: "https://twitter.com/haduki4499"
    }, {
        name: "だめがね", description: <>ポスター制作</>, x_url: "https://twitter.com/emegane1029"
    }, {
        name: "6t", description: <>紹介漫画</>, x_url: "https://twitter.com/unko_6t"
    }, {
        name: "こひきすん", description: <>CCCロゴ制作</>, x_url: "https://twitter.com/kopikopimura"
    }]

    const TesterList = ["HachinoSagiri", "JP_ARMY0506", "KawaiiFuguri", "Ken_Rou", "Laika_2057", "Mkroid", "NAKADARARIRI", "Niente_neu", "TOO", "Yamasan1107", "aini_bellwood", "denirou", "els00", "garitotu", "green101", "hawasabimaru", "holo.er", "maidkarma", "maitakenitohe", "miyabi_12", "miyukichi", "seilin", "がらくた工廠", "きりゅー", "こひきすん", "さばてん（sabaten）", "しんおじ", "すももの", "ぷりばて", "ろくちゃ", "イチゴのアメ", "カズゴン@とらきゃっと", "小桜夜継", "白紙さん", "芳井はじめ"]

    return (<Layout
        title={`Staff & Credit`}
        description="List of current staff and alpha testers">
        <main>
            <section className={styles.staffDiv}>
                <h1 className={"text--center"}>スタッフ紹介</h1>
                <p className={"text--center"}> Centurion Creative Connectのメンバーを紹介します!</p>
            </section>
            <section className={styles.eventStaffSection}>
                <div className={styles.staffDiv}>
                    <h2 className={"text--center"}>イベントスタッフ</h2>
                    <div className={"container"}>
                        <div className={"row"} style={{justifyContent: "center"}}>
                            {EventStaffList.map((staff,) => (
                                <Staff name={staff.name} image={staff.image} description={staff.description}
                                       x_url={staff.x_url}/>))}
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.prodStaffSection}>
                <div className={styles.staffDiv}>
                    <h2 className={"text--center"}>プロダクションスタッフ</h2>
                    <div className={"Container"}>
                        <div className={"row"} style={{justifyContent: "center"}}>
                            {ProdStaffList.map((staff,) => (
                                <Staff name={staff.name} image={staff.image} description={staff.description}
                                       x_url={staff.x_url}/>))}
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.creditSection}>
                <div className={"container"}>
                    <h1 className={"text--center"}>Credits</h1>
                    <p className={"text--center"} style={{color: "white"}}>制作に関わってくださった人たち!</p>
                    <div className={"row justify-content-center"}>
                        <div className={styles.credits + " col"}>
                            <h2 className={"text--center"}>Special Thanks</h2>
                            <table className={styles.creditsTable}>
                                {SpecialThanksList.map((i,) => (
                                    <SpecialThanks name={i.name} description={i.description} x_url={i.x_url}/>))}
                            </table>
                        </div>
                        <div className={styles.credits + " col"}>
                            <h2 className={"text--center"}>Testers</h2>
                            <table className={styles.creditsTable}>
                                <tbody>
                                <tr>
                                    {TesterList.map((i,) => (
                                        <th>{i}</th>
                                    ))}
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </Layout>);
}