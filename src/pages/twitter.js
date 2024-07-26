import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Head from "@docusaurus/Head";

export default function Redirect() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Head>
            <meta httpEquiv="refresh" content={"0; url=https://twitter.com/VRSGF_Centurion"}/>
        </Head>
    )
}
