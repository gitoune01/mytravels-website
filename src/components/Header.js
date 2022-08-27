import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Header = ({heading,paragraph,image, children}) => {
  const navigate= useNavigate()
  const [state] = useState({
    video:'/assets/videos/header.mp4',
    logo: "/assets/images/logo.png",
    poster:'/assets/images/poster.jpg',
  })


  const goToHome = () => {
    navigate('/')
  }
  return (
    <div className='header'>
         <div className="container pr">
          <div className="header__logo">
            <LazyLoadImage src={state.logo} alt="logo" onClick={goToHome}/>
          </div>
         </div>
          <div className="header__video">
            {image ? <LazyLoadImage  src={image} alt='image'/> : 
             <video src={state.video} autoPlay loop muted poster={state.poster}></video>
             }
          </div>
          <div className="header__contents">
            <div className="container">
              <div className="header__contents__text">
                  <div className="header__contents__text__child">
                    <h1 className="header__contents__text__child__h1">
                      {heading}
                    </h1>
                      <p className="header__contents__text__child__p">
                      {paragraph}
                      </p>
                       <div className="header__contents__text__child__link">
                         {children}
                       </div>
                  </div>
              </div>
            </div>
          </div>
      
    </div>
  )
}

export default Header
