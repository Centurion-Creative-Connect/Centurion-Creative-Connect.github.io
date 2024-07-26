import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Head from "@docusaurus/Head";

export default function Redirect() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Head>
            <meta httpEquiv="refresh" content={"0; url=https://vrchat.com/home/world/wrld_a7ad59a4-38b4-4413-aab4-848a38d6fb48"}/>
        </Head>
    )
}
