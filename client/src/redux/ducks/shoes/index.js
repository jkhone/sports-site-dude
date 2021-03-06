import Axios from "axios"
import { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'

// action names
const LIST_SHOES = "calls/LIST_SHOES"
const GET_BRAND_SHOES = 'GET_BRAND_SHOES'
const GET_SHOES_SEARCH = 'GET_SHOES_SEARCH'
const GET_SIZE = 'GET_SIZE'

// initial state
const initialState = {
  shoes: []
}

// reducer 
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LIST_SHOES:
      return { ...state, shoes: action.payload }
    case GET_BRAND_SHOES:
      return {...state, shoes: action.payload}
    case GET_SHOES_SEARCH:
      return {...state, shoes: action.payload}  
    case GET_SIZE:
        return {...state, shoes: action.payload}    
    default:
      return state
  }
}

// actions
export function showShoes() {
  return dispatch => {
    Axios.get("api/shoes").then(resp => {
      console.log('data', resp.data)
      dispatch({
        type: LIST_SHOES,
        payload: resp.data
      })
    })
  }
}

const getBrandShoes = (brand) => {
  return dispatch => {
      Axios.get("/api/shoes/brands/"+ brand).then(resp => {
          dispatch({
              type: GET_BRAND_SHOES,
              payload: resp.data
          })
      })
  }
}

const ShoeSearch = (search) => {
  return dispatch => {
      Axios.get("api/shoes/search/"+search).then(resp => {
          dispatch({
              type: GET_SHOES_SEARCH,
              payload: resp.data
          })
      })
      console.log("ShoeSearch duck")
  }
}

const shoeSize = (size) => {
  return dispatch => {
      Axios.get("api/shoes/size/"+size).then(resp => {
          dispatch({
              type: GET_SIZE,
              payload: resp.data
          })
      })
      console.log(size)
  }
}

// custom hooks

export function useShoes() {
  const dispatch = useDispatch()
  const shoes = useSelector(appState => appState.shoesReducer.shoes)
  const shoesearch = search => dispatch(ShoeSearch(search))
  const brandShoes = brand => dispatch(getBrandShoes(brand))
  const getSize = size => dispatch(shoeSize(size))
  const show = () => dispatch(showShoes())

  useEffect(() => {
    dispatch(showShoes())
  }, [dispatch ])

  return { shoes, brandShoes, shoesearch, show, getSize}
}

