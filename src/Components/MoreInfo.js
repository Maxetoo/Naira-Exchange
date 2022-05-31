import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import moreInfoVideo from '../Assests/More Info.mp4'
// TbPlayerPlay
// FaPlay
import { FaPlay, FaPause } from 'react-icons/fa'
const MoreInfo = ({ moreInfo }) => {
  const videoId = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (isPlaying) {
      videoId.current.play()
    } else {
      videoId.current.pause()
    }

    document.querySelector('video').addEventListener('ended', () => {
      setIsPlaying(false)
    })
  }, [isPlaying])
  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }
  return (
    <Wrapper>
      <div className='more-info-section'>
        <p>More Info</p>
        <div className='video-container' ref={moreInfo}>
          <video ref={videoId}>
            <source src={moreInfoVideo} type='video/mp4' color='black' />
          </video>
          <div className='video-icon' onClick={togglePlay}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .more-info-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.5em;
    align-items: center;
    padding: 2.5rem;
    padding-bottom: 3rem;
    margin-top: 2rem;
  }

  .video-container {
    width: 100%;
    margin-top: 2rem;
    padding: 1rem;
    background: white;
    border-radius: 10px;
    border: solid 1.5px var(--bg-dark);
    position: relative;
    border: solid 10px var(--bg-dark);
  }

  video {
    width: 100%;
    height: 350px;
    border: solid 1px var(--bg-dark);
  }

  .video-icon {
    position: absolute;
    top: 40%;
    z-index: 10;
    color: var(--white-color);
    font-size: 1em;
    left: -6.5%;
    height: 70px;
    width: 70px;
    background: var(--hightlight);
    display: grid;
    place-content: center;
    border-radius: 50%;
    cursor: pointer;
    border: solid 2px var(--bg-dark);
  }

  @media only screen and (min-width: 768px) {
    .video-icon {
      left: -4%;
    }
  }

  @media only screen and (min-width: 992px) {
    .video-icon {
      left: -2%;
    }
  }
`

export default MoreInfo
