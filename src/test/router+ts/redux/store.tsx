import React from 'react'
import {createStore} from 'redux'

interface IAction {
    type:string,
    payload?:any
}

const reducer = (prevState={
    isShow:true,
},action:IAction) =>{
    switch(action.type){
        case 'show':
            return {...prevState,isShow:true}
        case 'hide':
            return {...prevState,isShow:false}
        default:
            return prevState
    }
}

const store = createStore(reducer)
export default store