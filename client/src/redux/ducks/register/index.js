import { useDispatch } from "react-redux"
import axios from "axios"

const CREATE_USER = 'register/CREATE_USER'

const initialState = { 
    user: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CREATE_USER:
            return { ...state, user: action.payload }
      default:
        return state
    }
}

function createUser(username, password, dispatch) {
    return new Promise((resolve, reject) => {
        axios
        .post('/register', {username, password})
        .then(resp => {
            dispatch({
                type: CREATE_USER,
                payload: resp.data
            })
            resolve()
        }).catch(e => {
            reject()
        })
    })
}

export function useCreateUser() {
    const dispatch = useDispatch()
    const create = (username, password) => {
        return createUser(username, password, dispatch)
    }

    return { create }
}