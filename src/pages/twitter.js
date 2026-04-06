import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Head from "@docusaurus/Head";

export default function Redirect() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Head>
            <meta name={"description"} content={"Twitter @VRSGF_Centurion"}/>
            <meta name={"twitter:card"} content={"summary"}/>
            <meta name={"twitter:site"} content={"VRSGF_Centurion"}/>
            <meta name={"twitter:creator"} content={"VRSGF_Centurion"}/>
            <meta name={"og:title"} content={"X @VRSGF_Centurion | Centurion Creative Connect"}/>
            <meta name={"og:description"}
                  content={"Centurion Creative Connect 公式 X (Twitter)"}/>
            <meta httpEquiv="refresh" content={"0; url=https://twitter.com/VRSGF_Centurion"}/>
        </Head>
    )
}
