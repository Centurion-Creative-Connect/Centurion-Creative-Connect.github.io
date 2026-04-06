import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Head from "@docusaurus/Head";

export default function Redirect() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Head>
            <meta title={"CCC公式サバゲーイベントグループ"}/>
            <meta name={"description"} content={"VRChat Group CCC公式サバゲーイベントグループ"}/>
            <meta name={"twitter:card"} content={"summary_large_image"}/>
            <meta name={"twitter:site"} content={"VRSGF_Centurion"}/>
            <meta name={"twitter:creator"} content={"VRSGF_Centurion"}/>
            <meta name={"og:title"} content={"CCC公式サバゲーイベントグループ | Centurion Creative Connect"}/>
            <meta name={"og:description"}
                  content={"隔週金曜開催VRCサバゲーイベント「Centurion」などの、Centurion Creative" +
                      " Connect（CCC）が運営するイベント参加用のグループになります。"}/>
            <meta name={"og:image"} content={"https://centurioncc.org/img/event-group-banner.png"}/>
            <meta name={"og:image:alt"} content={"Banner for VRChat Group CCC公式サバゲーイベントグループ"}/>
            <meta httpEquiv="refresh"
                  content={"0; url=https://vrchat.com/home/group/grp_26d328bc-e262-4668-935f-00af0e2e680c"}/>
        </Head>
    )
}
