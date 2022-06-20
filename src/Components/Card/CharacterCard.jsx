import style from "./CharacterCard.module.css";

export default function CharacterCard(props) {
    let type;
    if (props.type === "") {
        type = "unknown"
    } else {
        type = props.type
    }
    return (
        <div id={props.id} className={style.card}>
            <img src={props.image} alt={"characterImage"} className={style.image}/>
            <div className={style.data}>
                <p className={style.dataText}>Name: {props.name}</p>
                <p className={style.dataText}>Status: {props.status}</p>
                <p className={style.dataText}>Species: {props.species}</p>
                <p className={style.dataText}>Type: {type}</p>
                <p className={style.dataText}>Gender: {props.gender}</p>
                <p className={style.dataText}>Origin: {props.origin}</p>
                <p className={style.dataText}>Location: {props.location}</p>
                <p className={style.dataText}>Episode: {props.episode}</p>
            </div>
        </div>
    )
}