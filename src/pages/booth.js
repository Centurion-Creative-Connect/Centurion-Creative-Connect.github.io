import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Head from "@docusaurus/Head";

export default function Redirect() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Head>
            <meta name={"description"} content={"Booth @cccofficialshop"}/>
            <meta name={"twitter:card"} content={"summary"}/>
            <meta name={"twitter:site"} content={"VRSGF_Centurion"}/>
            <meta name={"twitter:creator"} content={"VRSGF_Centurion"}/>
            <meta name={"og:title"} content={"CCC OFFICIAL SHOP | Centurion Creative Connect"}/>
            <meta name={"og:description"}
                  content={"Centurion Creative Connect 公式 Booth"}/>
            <meta httpEquiv="refresh" content={"0; url=https://cccofficialshop.booth.pm/"}/>
        </Head>
    )
}
