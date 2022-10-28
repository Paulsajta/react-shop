

export function reducer (state, {type, payload}) {
    // noinspection FallThroughInSwitchStatementJS
    switch (type) {

        case 'ON_MODAL' : {
            return {...state, modalActive: true}
        }

        case 'OFF_MODAL' : {
            document.querySelector('body').style.overflow = 'scroll'
            return {...state, modalActive: false}
        }

        case 'SET_GOODS' : {
            return {...state, goods: payload}
        }

        case 'SET_LOADING' : {
            return {...state, loading: payload}
        }

        case 'ADD_TO_BASKET' : {
            const {mainId} = payload.item
            let {item,count} = payload
            if (state.basket[`${mainId}`]) {
                count = state.basket[`${mainId}`].count + count
                return {
                    ...state,
                    basket: {...state.basket, [`${mainId}`] : {item,count}},
                    isDropped: true,
                    droppedItem: {item}
                }
            }
            else {
                return {
                    ...state,
                    basket: {...state.basket, [`${mainId}`]: {item, count}},
                    isDropped: true,
                    droppedItem: {item}
                }
            }
        }

        case 'INCREMENT_COUNT' : {
            let count = state.basket[`${payload.id}`].count + 1
            const {item, id} = payload
            return {
                ...state,
                basket: {...state.basket, [`${id}`] : {item, count}}
            }
        }

        case 'DECREMENT_COUNT' : {
            const {item, id} = payload
            if (state.basket[`${id}`].count - 1 > 0) {
                let count = state.basket[`${id}`].count - 1
                return {
                    ...state,
                    basket: {...state.basket, [`${id}`] : {item, count}}
                }
            }
            else {
                state.deleteFromBasket(id)
            }
        }

        case 'DELETE_FROM_BASKET' : {
            let resBasket = {...state.basket}
            delete resBasket[`${payload}`]
            return {
                ...state,
                basket: resBasket,
            }
        }

        case 'SET_DROPPED_ITEM' : {
            return {...state, droppedItem: payload}
        }

        case 'SET_IS_DROPPED' : {
            return {...state, isDropped: payload}
        }

        default:
            return state
    }
}