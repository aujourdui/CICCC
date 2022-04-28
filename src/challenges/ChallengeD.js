import React from 'react'
import { useSelector,useDispatch } from 'react-redux'

import { incrementValueAction, decrementValueAction } from '../redux/reducers'

const CompA = () => {
    const dispatch = useDispatch()
    const value = useSelector((state) => state.value)

    const incrementHandler = () => {
        dispatch(incrementValueAction(value))
    }
    const decrementHandler = () => {
        dispatch(decrementValueAction(value))
    }

    return(
        <>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
        </>
    )
}
const CompB = () => {
    const value = useSelector((state) => state.value)
    return(
        <>
            <h2>{value}</h2>
        </>
    )
}

const ChallengeD = () => {
  return (
    <>
        <CompA />
        <CompB />
    </>
  )
}

export default ChallengeD