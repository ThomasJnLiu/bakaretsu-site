// Purpose: Take the list of all comics, generate a link for each
import comicsInfo from "../../public/comics/meta.json"
import { Link } from "react-router-dom"

function Archive () {
    return (<>
    <h1>Archive</h1>
        <ul className = "archive-list">
            {comicsInfo.map(comic => {
                let comicNameClean = comic.name.slice(0,-4)
                return (<Link key = {comic.id} to = {`/comic/${comicNameClean}`}>{comic.name}</Link>) 
            })}
        </ul>
    </>)
}

export default Archive
