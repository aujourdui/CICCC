const INCREMENT_VALUE = "INCREMENT_VALUE"
const DECREMENT_VALUE = "DECREMENT_VALUE"

export const incrementValueAction = (value) => ({ type: INCREMENT_VALUE , payload: value })
export const decrementValueAction = (value) => ({ type: DECREMENT_VALUE , payload: value })

export const reducer = (state = { value: 0 }, action) => {
    switch (action.type) {
        case INCREMENT_VALUE:
            return {
                ...state,
                value: action.payload + 1
            }

        case DECREMENT_VALUE:
            
            return {
                ...state,
                value: action.payload - 1
            }
    
        default:
            return state
    }
}