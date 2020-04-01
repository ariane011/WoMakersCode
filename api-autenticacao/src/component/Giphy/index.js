import React, { useEffect, useState } from 'react'
import { Gif } from "@giphy/react-components";
import './style.css'

function Giphy(props) {
  const [gifs, setGifs] = useState(null);
  const key = 'rpSqiCBrjaPKVxPMjVaUIKk6BuBSkTUb'
  const query = props.search
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
          return <div className="gif"> <Gif key={gif.id} gif={gif} width={600} /> </div>
        })
      }
    </div>
  )
}

export default Giphy