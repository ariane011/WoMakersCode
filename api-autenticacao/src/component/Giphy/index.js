import React, { useEffect, useState } from 'react'
import { Gif } from "@giphy/react-components";


function Giphy() {
  const [gifs, setGifs] = useState(null);
  const key = 'rpSqiCBrjaPKVxPMjVaUIKk6BuBSkTUb'
  const query = "car"
  const limit = 1

  useEffect(() => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${key}&limit=${limit}`)
      .then(res => res.json())
      .then(
        (result) => {
          setGifs(result)
        },
        (error) => {
          console.log('error', error);
        }
      )
  }, [query])

  return (
    <div>
      { gifs
        && gifs.data.map(gif => {
          return <Gif gif={gif} width={600} />
        })
      }
    </div>
  )
}

export default Giphy