import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";

export default function RedirectPage(props) {
    function RedirectPageBody(link) {
        return <main>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '50vh',
                fontSize: '20px',
            }}>
                <div>
                    <h1>Redirecting...</h1>
                    <p>遷移しなかった場合は<a href={link}>ここをクリックしてください</a></p>
                </div>
            </div>
        </main>
    }

    if (props.image === undefined) {
        return (
            <Layout title={props.title} description={props.description}>
                <Head>
                    <meta name={"twitter:card"} content={props.content ?? "summary"}/>
                    <meta httpEquiv="refresh" content={"0; url=" + props.redirect}/>
                </Head>
                <RedirectPageBody link={props.redirect}/>
            </Layout>
        )
    }

    return (
        <Layout title={props.title} description={props.description}>
            <Head>
                <meta name={"twitter:card"} content={props.content ?? "summary_large_image"}/>
                <meta httpEquiv="refresh" content={"0; url=" + props.redirect}/>
                <meta property={"og:image"} content={props.image}/>
                <meta name={"og:image:alt"} content={props.alt}/>
            </Head>
            <RedirectPageBody link={props.redirect}/>
        </Layout>
    )
}