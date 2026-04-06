import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Head from "@docusaurus/Head";

export default function Redirect() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Head>
            <meta title={"VRSGF_Centurion シューティングレンジ"}/>
            <meta name={"description"} content={"VRSGF_Centurion シューティングレンジ by CenturionSystem"}/>
            <meta name={"twitter:card"} content={"summary_large_image"}/>
            <meta name={"twitter:site"} content={"VRSGF_Centurion"}/>
            <meta name={"twitter:creator"} content={"VRSGF_Centurion"}/>
            <meta name={"og:title"} content={"VRSGF_Centurion シューティングレンジ | Centurion Creative Connect"}/>
            <meta name={"og:description"}
                  content={"VRサバイバルゲームフィールド「Centurion」のシューティングレンジになります。今後もいくつかアップデート予定なのでお楽しみに！"}/>
            <meta name={"og:image"} content={"https://centurioncc.org/img/shooting-range-thumbnail.png"}/>
            <meta name={"og:image:alt"}
                  content={"A preview image of VRChat world \"VRSGF_Centurion シューティングレンジ\""}/>
            <meta httpEquiv="refresh" content={"0; url=https://vrchat.com/home/world/wrld_a7ad59a4-38b4-4413-aab4-848a38d6fb48"}/>
        </Head>
    )
}
