import { useEffect } from 'react' 
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'


const GET_PLAYERS = 'GET_PLAYERS'
const GET_TEAM = 'GET_TEAM'

const initialState = {
    players: []
}

export default (state= initialState, action) =>{
    switch(action.type) {
        case GET_PLAYERS: 
            return {...state, players: action.payload}
        case GET_TEAM: 
            return {...state, players: action.payload}    
        default:
            return state
    }
}

const getPlayers = () => {
    return dispatch => {
        axios.get("/api/players").then(resp => {
            dispatch({
                type: GET_PLAYERS,
                payload: resp.data
            })
        })
    }
}

const getTeam = (team) => {
    return dispatch => {
        axios.get("/api/players/teams/"+team).then(resp => {
            dispatch({
                type: GET_TEAM,
                payload: resp.data
            })
        })
    }
}

export const usePlayers = () => {
    const players = useSelector(appState => appState.playerState.players)
    const team = team => dispatch(getTeam(team))
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getPlayers())

    },[dispatch])

    return { players, team }
}

