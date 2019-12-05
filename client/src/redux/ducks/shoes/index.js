import Axios from "axios"
import { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'

// action names
const LIST_SHOES = "calls/LIST_SHOES"
const GET_BRAND_SHOES = 'GET_BRAND_SHOES'

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
// custom hooks

export function useShoes() {
  const dispatch = useDispatch()
  const shoes = useSelector(appState => appState.shoesReducer.shoes)
  const brandShoes = brand => dispatch(getBrandShoes(brand))

  useEffect(() => {
    dispatch(showShoes())
  }, [dispatch])

  return { shoes, brandShoes}
}