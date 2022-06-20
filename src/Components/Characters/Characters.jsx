import { useState } from "react";

import style from "./Characters.module.css";

import CharacterCard from "../Card/CharacterCard";

var page = 1;

export default function Characters() {
    const [characters, setCharacters] = useState([]);

    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(response => response.json())
    .then(characters => setCharacters(characters.results))

    const nextPage = () => {
        if (page < 26) {
            page += 1
        }
    }
    const previusPage = () => {
        if (page > 1) {
            page -= 1
        }
    }

    return (
        <div className={style.characters}>
            <h3 className={style.title}>Characters</h3>
            <div className={style.cards}>
                {characters.map(c => (
                    <CharacterCard
                        id={c.id}
                        key={(Math.random() * 100).toString(36).slice(3)}
                        image={c.image}
                        name={c.name}
                        status={c.status}
                        species={c.species}
                        type={c.type}
                        gender={c.gender}
                        origin={c.origin.name}
                        location={c.location.name}
                        episode={c.episode.length}
                    />
                ))}
            </div>
            <div className={style.pager}>
                <button onClick={previusPage} className={style.pagerButton}>Previus</button>
                <p className={style.pagerText}>Page {page}</p>
                <button onClick={nextPage} className={style.pagerButton}>Next</button>
            </div>
        </div>
    )
}