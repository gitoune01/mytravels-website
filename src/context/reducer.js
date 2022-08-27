import { OPEN_MODAL,CLOSE_MODAL, CLOSE_MENU,OPEN_MENU, TOGGLE_MENU } from './actions';
import { initialState } from './appContext';

const reducer = (state,action) => {
    if(action.type === OPEN_MODAL){
      return{
        ...state,
        modalStatus:true,
        current:action.payload
       }
    }
    if(action.type === CLOSE_MODAL){
      return{
        ...state,
        modalStatus:false,
        current:''
       }
    }
    if(action.type === CLOSE_MODAL){
      return{
        ...state,
        modalStatus:false,
        current:''
       }
    }
    // if(action.type === OPEN_MENU){
    //   return{
    //     ...state,
    //     isOpen: true
    //    }
    // }
    // if(action.type === CLOSE_MENU){
    //   return{
    //     ...state,
    //     isOpen: false
    //    }
    // }


  
throw new Error(`Invalid action ${action.type}`)

}

export  default reducer