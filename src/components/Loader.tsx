import React from "react"
import CircularProgress from "@material-ui/core/CircularProgress"
import "./../styles/css/loader.css"

const Loader = () => {
  return (
    <div className="loader-container">
      <CircularProgress color="inherit" />
    </div>
  )
}

export default Loader
