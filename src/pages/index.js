import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import clsx from "clsx";
import {Parallax, ParallaxBanner, ParallaxProvider, useParallax} from "react-scroll-parallax";

function HomepageHead() {
    return (<header className={styles.indexHeader}>
        <video className={styles.backgroundVideo} autoPlay loop muted poster="/img/sitetop-thumbnail.png">
            <source src="/mov/top.mov"></source>
        </video>
        <div className={styles.catchCopy}>
                <span style={{fontSize: 10 + 'vmax'}}>
                    <ruby>仮想<rt><span style={{fontSize: 150 + '%'}}>V</span>irtual</rt></ruby>
                </span>
            <wbr/>
            <span style={{fontSize: 4 + 'vmax'}}>
                    だけど
                </span>
            <wbr/>
            <span style={{fontSize: 10 + 'vmax'}}>
                    <ruby>リアル<rt><span style={{fontSize: 150 + '%'}}>R</span>eality</rt></ruby>。
                </span>
        </div>
    </header>)
}

function AboutUs() {
    return (<section className={styles.panel + ' ' + styles.whoAreWe}>
        <div className={styles.fadeIn}>
            <h1>About us</h1>
            <p>
                VRChat上で制作・運営しているサバイバルゲームフィールドです。
            </p>
            <p>
                初心者から熟練者まで、バーチャル空間でも本格的なサバイバルゲームを楽しめるような空間を目指しています。
            </p>
        </div>
    </section>)
}

function News() {
    return (
        <section className={styles.panel + " " + styles.news}>
            <div className={styles.fadeIn}>
                <h1>News</h1>
                <ul>
                    <li>2022/07/17 - Wixサイト開設 (仮)</li>
                    <li>2024/02/11 - ドキュメントと共に制作中</li>
                </ul>
            </div>
        </section>
    )
}

function EventCalender() {
    return <section className={styles.panel}></section>
}

function ParallaxTest() {
    // TODO: somehow make it work idk why it doesnt work why plea let me know
    return <ParallaxBanner style={{height: 20 + "rem", aspectRatio: '2 / 1'}}
                           layers={[{image: '/static/img/20220721015117_1_edited.jpg', speed: -15}]}>
        <div>
            <h1>Test</h1>
        </div>
    </ParallaxBanner>
}

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (<header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
            <Heading as="h1" className="hero__title">
                {siteConfig.title}
            </Heading>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
                <Link
                    className="button button--secondary button--lg"
                    to="/docs/intro">
                    Docusaurus Tutorial - 5min ⏱️
                </Link>
            </div>
        </div>
    </header>);
}

export default function Index() {
    const {siteConfig} = useDocusaurusContext();
    return (<Layout
        title={`Home`}
        description="Centurion Creative Connect Homepage">
        <HomepageHead/>
        <ParallaxProvider>
            <main>
                <AboutUs/>
                <News/>
                <EventCalender/>
            </main>
        </ParallaxProvider>
    </Layout>);
}