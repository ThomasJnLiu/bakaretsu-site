import { useState } from 'react'
import comicsInfo from "../public/comics/meta.json"

function App() {
  console.log(import.meta.url)

  return (
    <>
      {comicsInfo.map(comic => {
        return (<img key = {comic.id} src = {`/comics/${comic.name}`}/>)
      })}
    </>
  )
}

export default App
