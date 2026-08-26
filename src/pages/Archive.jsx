// Purpose: Take the list of all comics, generate a link for each
import comicsInfo from "../../src/meta.json"
import { Link } from "react-router-dom"

function Archive () {
    return (<>
    <h1>Archive</h1>
        <ul className = "archive-list">
            {comicsInfo.map(comic => {
                return (<Link key = {comic.id} to = {`/comic/${comic.urlPath}`}>{comic.title}</Link>) 
            })}
        </ul>
    </>)
}

export default Archive
