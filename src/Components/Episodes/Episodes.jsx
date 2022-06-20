import { useState } from "react";

import style from "./Episodes.module.css";

import EpisodeCard from "../Card/EpisodeCard";

var page = 1;

export default function Episodes() {

    const [episodes, setEpisodes] = useState([])

    fetch(`https://rickandmortyapi.com/api/episode/?page=${page}`)
    .then(response => response.json())
    .then(episodes => setEpisodes(episodes.results))

    const nextPage = () => {
        if (page < 3) {
            page += 1
        }
    }
    const previusPage = () => {
        if (page > 1) {
            page -= 1
        }
    }

    return (
        <div className={style.episodes}>
            <h3 className={style.title}>Episodes</h3>
            <div className={style.cards}>
                {episodes.map(e => (
                    <EpisodeCard
                        key={(Math.random() * 100).toString(36).slice(3)}
                        id={e.id}
                        name={e.name}
                        air_date={e.air_date}
                        characters={e.characters.length}
                    />
                ))}
            </div>
            <div className={style.pager}>
                <button className={style.pagerButton} onClick={previusPage}>Previus</button>
                <p className={style.pagerText}>Page {page}</p>
                <button className={style.pagerButton} onClick={nextPage}>Next</button>
            </div>
        </div>
    )
}