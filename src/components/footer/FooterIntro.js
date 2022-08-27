import React,{useState} from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const FooterIntro = () => {
  const [state] = useState({
      logo:'/assets/footer/logo.png',
      intro:'  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, vitae, aliquid voluptate omnis quos delectus velit at accusamus sequi totam placeat, nam culpa eligendi voluptas consectetur vero voluptatibus! Rem, ratione?'

  })
  return (
    <div className='footer__intro'>
        <div class="footer__intro__img">
            <LazyLoadImage src={state.logo} alt='logo'/>
        </div>
        <p class="footer__intro__msg">{state.intro}</p>
     </div>
  )
}

export default FooterIntro
