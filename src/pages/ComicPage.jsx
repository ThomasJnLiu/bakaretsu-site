import { useParams } from "react-router-dom"
import comicsInfo from "../../src/meta.json"

function ComicPage(){
    const {comicId} = useParams();

    const comicDetail = comicsInfo.find(comic => comic.urlPath === comicId) 
    console.log(comicDetail);

    // generate filepath based off id
    // let comicFilePath = params.comicId.replace("-", "_") + ".png";

    if (comicId == "test"){
        throw new Error("Comic Not Found", { status: 404 });
    }
    return <>
        <h1>{comicDetail.title}</h1>
        <div className = "comics-container">
            <img src = {`/comics/${comicDetail.filePath}`}/>
        </div>
    </>
}

export default ComicPage    