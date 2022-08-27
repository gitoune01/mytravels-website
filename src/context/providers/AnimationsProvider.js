import { useEffect } from 'react';
import AnimationContext from '../AnimationsContext';

const AnimationsProvider = ({ children }) => {
  //no reducer => just to share animation between components

   const scrollAnimations = () => {
        const animation = (elements,className) => {
          elements.forEach((element) =>{             //iterate: not map because returns a new array
            const elementPosition = element.getBoundingClientRect().top
           //  console.log(elementPosition)
            const viewPortHeight = window.innerHeight - 150
            console.log(viewPortHeight)
            if(elementPosition < viewPortHeight) {
              element.classList.add(className)
            }else{
             element.classList.remove(className)
            }
             
          })
        }
       const elements = document.querySelectorAll('.animation')
       const headingElements = document.querySelectorAll('.headingAnimation')
       animation(elements,'animate')
       animation(headingElements,'headingAnimate')
     
       
   }



  useEffect(() => {
    window.addEventListener('scroll',scrollAnimations);
  }, []);

  return (
    <AnimationContext.Provider value>{children}</AnimationContext.Provider>
  );
};

export default AnimationsProvider;
