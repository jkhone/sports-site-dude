import React from "react"
import ReactDOM from "react-dom"
import "./styles/base.css"
import App from "./components/App"
import * as serviceWorker from "./lib/serviceWorker"
import { Provider } from "react-redux"
import store from "./redux/store"

const Main = props => {
  return <Provider store={store}>{props.children}</Provider>
}

ReactDOM.render(
  <Main>
    <App />
  </Main>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

export default Main
