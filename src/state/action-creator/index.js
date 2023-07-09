//action Creators are here -
export const IncreaseCount = (count) => {
    return (dispatch) => {
        dispatch({
            type: "INCREAMENT_COUNT",
            payload: count
        })
    }
}
export const DecreaseCount = (count) => {
    return (dispatch) => {
        dispatch({
            type: "DECREASE_COUNT",
            payload: count
        })
    }
}
export const IncCount=(IncCount)=>{
    return(dispatch)=>{
        dispatch({
            type:"INCCOUNT",
            payload: IncCount
        })
    }
}