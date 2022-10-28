import {createContext, useReducer} from "react";
import {reducer} from "./components/reducer";

export const customContext = createContext({})

const initialState = {
    goods: [],
    loading: false,
    basket: {},
    droppedItem: {},
    isDropped: false,
    total: 0,
    modalActive: false,
}

function MyContext(props) {

   const [state, dispatch] = useReducer(reducer,initialState)

   state.onModal = () => {
       dispatch({type: 'ON_MODAL'})
   }
    state.offModal = () => {
        dispatch({type: 'OFF_MODAL'})
    }
    state.setGoods = (shop) => {
       dispatch({type: 'SET_GOODS', payload: shop})
    }
    state.setLoading = (status) => {
       dispatch({type: 'SET_LOADING', payload: status})
    }
    state.addToBasket = (item, count) => {
       dispatch({type: 'ADD_TO_BASKET', payload: {item,count}})
    }
    state.setDroppedItem = (item) => {
       dispatch({type: 'SET_DROPPED_ITEM', payload: item})
    }
    state.setIsDropped = (status) => {
       dispatch({type: 'SET_IS_DROPPED', payload: status})
    }
    state.deleteFromBasket = (id) => {
       dispatch({type: 'DELETE_FROM_BASKET', payload: id})
    }
    state.incrementCount = (id, item) => {
       dispatch({type: 'INCREMENT_COUNT', payload: {id, item}})
    }
    state.decrementCount = (id, item) => {
        dispatch({type: 'DECREMENT_COUNT', payload: {id, item}})
    }


    return (
        <customContext.Provider value={state}>
            {props.children}
        </customContext.Provider>
    );
}

export default MyContext;