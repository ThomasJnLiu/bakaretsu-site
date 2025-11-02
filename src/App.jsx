import { useState } from 'react'
import comicsInfo from "../public/comics/meta.json"
import "./App.css"

function App() {
  console.log(import.meta.url)

  return (
    <>
    <img src = "/underconstruction.png" style = {{width:"25%;"}} class = "under-construction-img" />
      {/* {comicsInfo.map(comic => {
        return (<img key = {comic.id} src = {`/comics/${comic.name}`}/>)
      })} */}
    </>
  )
}

export default App
