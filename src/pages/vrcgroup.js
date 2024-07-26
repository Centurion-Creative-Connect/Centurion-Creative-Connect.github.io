import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Head from "@docusaurus/Head";

export default function Redirect() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Head>
            <meta httpEquiv="refresh" content={"0; url=https://vrchat.com/home/group/grp_26d328bc-e262-4668-935f-00af0e2e680c"}/>
        </Head>
    )
}
