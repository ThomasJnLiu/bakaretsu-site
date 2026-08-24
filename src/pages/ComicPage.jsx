import { useParams } from "react-router-dom"

function ComicPage(){
    const params = useParams();

    console.log(params.comicId)

    if (params.comicId == "test"){
        throw new Error("Comic Not Found", { status: 404 });
    }
    return <>
    <h1>{params.comicId}</h1></>
}

export default ComicPage