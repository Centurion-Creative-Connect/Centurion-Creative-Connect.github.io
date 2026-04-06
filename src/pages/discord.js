import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Head from "@docusaurus/Head";

export default function Redirect() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Head>
            <meta name={"description"} content={"CCC公式コミュニティサーバー (Discord)"}/>
            <meta name={"twitter:card"} content={"summary"}/>
            <meta name={"twitter:site"} content={"VRSGF_Centurion"}/>
            <meta name={"twitter:creator"} content={"VRSGF_Centurion"}/>
            <meta name={"og:title"} content={"CCC公式コミュニティサーバー (Discord) | Centurion Creative Connect"}/>
            <meta name={"og:description"}
                  content={"Centurion Creative Connect 公式 Discord"}/>
            <meta httpEquiv="refresh" content={"0; url=https://discord.com/invite/y66JZ4kAp8"}/>
        </Head>
    )
}
