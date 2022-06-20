import style from "./LocationCard.module.css";

export default function LocationCard(props) {
    return (
        <div id={props.id} className={style.card}>
            <div className={style.data}>
            <p className={style.dataText}>Name: {props.name}</p>
                <p className={style.dataText}>Dimension: {props.dimension}</p>
                <p className={style.dataText}>Type: {props.type}</p>
                <p className={style.dataText}>Residents: {props.residents}</p>
            </div>
        </div>
    )
}