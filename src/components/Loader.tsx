import React from "react"
import CircularProgress from "@material-ui/core/CircularProgress"

const Loader = () => {
  return (
    <div className="loader-container">
      <CircularProgress color="inherit" />
    </div>
  )
}

export default Loader
