import styles from './styles.module.css';

export default function VRCLikeEmbed(props) {
    return (<a className={styles.vrcLikeEmbedCard} href={props.href} target={"_blank"}>
        <div className={styles.vrcLikeEmbedHeader}>
            <img className={styles.vrcLikeEmbedBanner} src={props.src} alt=""/>
            <h1 className={styles.vrcLikeEmbedTitle}>{props.name}</h1>
        </div>
        <div className={styles.vrcLikeEmbedDescription}>
            {props.desc}
        </div>
    </a>);
}