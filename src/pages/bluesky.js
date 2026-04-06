import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Head from "@docusaurus/Head";

export default function Redirect() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Head>
            <meta name={"description"} content={"Bluesky @vrsgf-centurion.bsky.social"}/>
            <meta name={"twitter:card"} content={"summary"}/>
            <meta name={"twitter:site"} content={"VRSGF_Centurion"}/>
            <meta name={"twitter:creator"} content={"VRSGF_Centurion"}/>
            <meta name={"og:title"} content={"Bluesky @vrsgf-centurion.bsky.social | Centurion Creative Connect"}/>
            <meta name={"og:description"}
                  content={"Centurion Creative Connect 公式 Bluesky"}/>
            <meta httpEquiv="refresh" content={"0; url=https://bsky.app/profile/vrsgf-centurion.bsky.social"}/>
        </Head>
    )
}
