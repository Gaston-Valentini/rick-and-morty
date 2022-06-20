import { useState } from "react";

import style from "./Locations.module.css";

import LocationCard from "../Card/LocationCard";

var page = 1;

export default function Locations() {
    const [locations, setLocations] = useState([]);

    fetch(`https://rickandmortyapi.com/api/location/?page=${page}`)
    .then(response => response.json())
    .then(locations => setLocations(locations.results))

    const nextPage = () => {
        if (page < 7) {
            page += 1
        }
    }
    const previusPage = () => {
        if (page > 1) {
            page -= 1
        }
    }

    return (
        <div className={style.locations}>
            <h3 className={style.title}>Locations</h3>
            <div className={style.cards}>
                {locations.map(l => (
                    <LocationCard
                        key={(Math.random() * 100).toString(36).slice(3)}
                        id={l.id}
                        name={l.name}
                        dimension={l.dimension}
                        type={l.type}
                        residents={l.residents.length}
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