import "../../App.css"

import Setting from "./Setting"


const User = () => {

  const handleClickExit = () => {
    window.location.reload()
  }

  return (

    <div className="d-flex gap-md-4 flex-column justify-content-md-center py-3 col-12">
      <div><Setting/></div>
      <div className="d-grid py-3">
        <button onClick={handleClickExit} className={"col-12 py-1 btn btn-danger "}>Exit</button>
      </div>
    </div>
  )
}

export default User;