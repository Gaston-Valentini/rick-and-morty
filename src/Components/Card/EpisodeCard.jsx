import style from "./EpisodeCard.module.css";

export default function EpisodeCard(props) {
    return (
        <div id={props.id} className={style.card}>
            <div className={style.data}>
                <p className={style.dataText}>Number: {props.id}</p>
                <p className={style.dataText}>Name: {props.name}</p>
                <p className={style.dataText}>Air Date: {props.air_date}</p>
                <p className={style.dataText}>Characters: {props.characters}</p>
            </div>
        </div>
    )
}