import style from "./Start.module.css";

export default function Start() {
    return (
        <div className={style.start}>
            <div className={style.startHeader}>
                <p className={style.startHeaderText}>
                The following web page is a wiki of the famous Rick and Morty animated series. It is built with React and an API called <a href="https://rickandmortyapi.com/">"The Rick and Mort API</a>". In it you can access different sections through the navigation bar.
                </p>
            </div>
            <div className={style.startRick}>
                <p className={style.startRickTitle}>What does this page offer?</p>
                <p className={style.startRickText}>In this fun website you can browse and discover some of the most iconic elements of the series, such as its characters, places and episodes.</p>
            </div>
            <div className={style.startDescriptions}>
                <div className={style.startDescriptionsCard}>
                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/56d919f9-4e96-439e-a08a-9a9a2b86b063/dep82z2-1e5ce8fa-425e-427f-996d-506bae4164c0.png/v1/fill/w_1280,h_2022,strp/rick_and_morty___open_your_eyes___rick___completed_by_rickyfl1975_dep82z2-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU2ZDkxOWY5LTRlOTYtNDM5ZS1hMDhhLTlhOWEyYjg2YjA2M1wvZGVwODJ6Mi0xZTVjZThmYS00MjVlLTQyN2YtOTk2ZC01MDZiYWU0MTY0YzAucG5nIiwiaGVpZ2h0IjoiPD0yMDIyIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvNTZkOTE5ZjktNGU5Ni00MzllLWEwOGEtOWE5YTJiODZiMDYzXC9yaWNreWZsMTk3NS00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.HQC9owSpl-e4Xu4Bs8Tjj-P0cgc3MFrTbbHYXN1hFi4" alt="rick and morty" className={style.startDescriptionsCardImage}/>
                    <p className={style.startDescriptionsCardText}>Rick Sanchez, a man who has spent much of his life traveling through various dimensions, in time and through many regions of the universe. For him, the Earth is called Planet Earth of Dimension C-137. He is irresponsible, asocial, crazy, ambitious and inconsiderate towards his own family, criticizing his son-in-law Jerry on numerous occasions.</p>
                </div>
                <div className={style.startDescriptionsCard}>
                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aaa79357-9476-4c1d-b9a8-6e881f2449d3/ddgdr8c-44b67bcf-e4ff-44fb-a966-80991e0341ed.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FhYTc5MzU3LTk0NzYtNGMxZC1iOWE4LTZlODgxZjI0NDlkM1wvZGRnZHI4Yy00NGI2N2JjZi1lNGZmLTQ0ZmItYTk2Ni04MDk5MWUwMzQxZWQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.L-UOxpbcRR6a96_TH390Lrr3lvqBlL-m32JSykdHJfs" alt="rick" className={style.startDescriptionsCardImage}/>
                    <p className={style.startDescriptionsCardText}>His real name is Mortimer Smith nicknamed "Morty" and he is one of the main protagonists of the animated series Rick and Morty. He has constant adventures with his grandfather Rick Sánchez to help being most of the times against his will and getting hurt in almost all of them.</p>
                </div>
            </div>
            <div className={style.banner}></div>
            <div className={style.contact}>
                <a className={style.contactRepository} href="https://github.com/Gaston-Valentini/rick-and-morty">Click this link to go to the GitHub repository for this project.</a>
                <p className={style.contactDesignedText}>Designed by <a href="https://github.com/Gaston-Valentini" className={style.contactDesignedLink}>Gastón Valentini</a></p>
            </div>
        </div>
    )
}