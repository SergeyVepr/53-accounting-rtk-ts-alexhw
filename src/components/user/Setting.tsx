import { useState } from "react"
import { useAppSelector } from "../../app/hooks"
import { CHANGE_PASSWORD, SETTING, UPDATE_USER } from "../../utils/windowsSwitch"
import UpdateUser from "./UpdateUser"
import ChangePassword from "./ChangePassword"


const Setting = () => {
  const [currentWindow, setCurrentWindow] = useState<string>('');

  const user = useAppSelector(state =>  state.user.data);

  const handleChangeWindowUpdate = () => {
    return setCurrentWindow(UPDATE_USER);
  }
  const handleChangeWindowPassword = () => {
    return setCurrentWindow(CHANGE_PASSWORD);
  }
  const handleChangeWindowSetting = () => {

    return setCurrentWindow(SETTING);
  }
  if(currentWindow === UPDATE_USER ){

    return (
      <div className={"pt-5 px-5"}>
        <UpdateUser />
        <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center">

          <button onClick={handleChangeWindowSetting} className="btn bsb-btn-3xl btn-warning p-1 col-6">Back to Setting
          </button>

        </div>
      </div>
    )

  } else if (currentWindow === CHANGE_PASSWORD) {
    return (
      <div className={"pt-5 px-5"}>
        <ChangePassword />
        <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center">
          <button  onClick={handleChangeWindowSetting} className="btn bsb-btn-3xl btn-warning p-1 col-6">Back to Setting
          </button>
        </div>
      </div>
    )

  } else {

    return (

      <div>
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-12">
              <h3 className={'px-5 py-4'} style={{ fontFamily: 'fantasy', fontSize: '2em' }}>Setting:</h3>
                <div className={"px-5"}>
                  <div className="mb-5 p-3 border-1 border">
                    <h3>First Name: <span style={{ color: 'green' }}>{user.firstName}</span></h3>
                    <h3>Last Name: <span style={{ color: 'green' }}>{user.lastName}</span></h3>
                    <h5>Email: <span style={{ color: 'blue' }}>{user.login}</span></h5>
                    <h5>Roles: <span style={{ color: 'blue' }}>{user.roles}</span></h5>
                  </div>
                </div>
              </div>
            </div>
            <hr className="mb-2 border-secondary-subtle" />
            <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center pb-4 col-12">

              <button onClick={handleChangeWindowUpdate} className="btn bsb-btn-3xl btn-primary p-3 col-11">Change First
                and Last Name
              </button>

            </div>
            <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center">

              <button onClick={handleChangeWindowPassword} className="btn bsb-btn-3xl btn-primary p-3 col-11">Change Password
              </button>

            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Setting