import { useEffect } from 'react' 
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'

// action names
const GET_PLAYERS = 'GET_PLAYERS'
const GET_TEAM = 'GET_TEAM'
const GET_PLAYER_SEARCH = 'GET_PLAYER_SEARCH'

// initial state
const initialState = {
    players: []
}

// reducer
export default (state= initialState, action) =>{
    switch(action.type) {
        case GET_PLAYERS: 
            return {...state, players: action.payload}
        case GET_TEAM: 
            return {...state, players: action.payload}    
        case GET_PLAYER_SEARCH: 
            return {...state, players: action.payload}     
        default:
            return state
    }
}

//actions
const getPlayers = () => {
    return dispatch => {
        axios.get("/api/players").then(resp => {
            console.log('data', resp.data)
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

const PlayerSearch = (search) => {
    return dispatch => {
        axios.get("api/players/search/"+search).then(resp => {
            dispatch({
                type: GET_PLAYER_SEARCH,
                payload: resp.data
            })
        })
    }
}

// custom hooks

export const usePlayers = () => {
    const dispatch = useDispatch()
    const players = useSelector(appState => appState.playerState.players)
    const playersearch = search =>dispatch(PlayerSearch(search))
    const allPlayers = ()=> dispatch(getPlayers())
    const team = team => dispatch(getTeam(team))
    
    useEffect(()=>{
        dispatch(getPlayers())
    },[dispatch])

    return { players, team, playersearch, allPlayers }
}

