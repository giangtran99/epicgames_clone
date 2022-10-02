




const useLatestState = (setState)=>{
    return new Promise((resolve)=>{
        setState(latestState=>{
            resolve(latestState)
            return latestState
        })
    })
}


export default useLatestState