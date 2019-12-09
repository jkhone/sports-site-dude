// import { useEffect } from 'react' 
// import axios from 'axios'
// import { useSelector, useDispatch } from 'react-redux'

// const GET_PROFILE = 'GET_PROFILE'

// const initialState = {
//     profile: []
// }

// export default (state= initialState, action) =>{
//     switch(action.type) {
//         case GET_PROFILE: 
//             return {...state, profile: action.payload}  
//         default:
//             return state
//     }
// }

// const getProfile = (username) => {
//     return dispatch => {
//         axios.get("/profiles/" + username).then(resp => {
//             console.log("this profile", resp.data)
//             dispatch({
//                 type: GET_PROFILE,
//                 payload: resp.data
//             })
//         })
//     }
// }

// const postProfile = (profilepic) => {
//     return dispatch => {
//         axios.post('/profiles', {profilepic}).then(resp=> {
//             console.log('profiles')
//             dispatch({getProfile})
//           })
//     }
// }

// export const useProfile = () => {
//     const profilepic = useSelector(appState => appState.profileState.profile)
//     const addProfile = profile => dispatch(postProfile(profile))

//     const dispatch = useDispatch()

//     useEffect(() => {
//         dispatch(getProfile())

//     },[dispatch])

//     return { profilepic, addProfile }
// }

import { useEffect } from 'react' 
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'

const GET_PICTURE = 'GET_PICTURE'

const initialState = {
    pictures: []
}

export default (state= initialState, action) =>{
    switch(action.type) {
        case GET_PICTURE: 
            return {...state, pictures: action.payload}  
        default:
            return state
    }
}

const getPicture = (username) => {
    return dispatch => {
        axios.get("/profiles/" + username).then(resp => {
            console.log("this profile", resp.data)
            dispatch({
                type: GET_PROFILE,
                payload: resp.data
            })
        })
    }
}

const postPicture = () => {
    return dispatch => {
        axios.post('/profiles', {profilepic}).then(resp=> {
            console.log('profiles')
            dispatch(getProfile())
          })
    }
}

export const useProfile = () => {
    const profilepic = useSelector(appState => appState.profileState.pictures)
    const addProfile = profile => dispatch(postProfile(profile))

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProfile())

    },[dispatch])

    return { profilepic, addProfile }
}