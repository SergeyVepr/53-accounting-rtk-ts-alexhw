import { useState } from "react"
import type { userUpdatePassword } from "../../utils/interface"

import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { passwordFetch } from "../../features/actions/accountAcrion"


const ChangePassword = () => {

  const {status,data} = useAppSelector(state => state.user)

  const [newPassword, setNewPassword] = useState('');
  const [password , setPassword] = useState('');
  const [email, setEmail] = useState(data.login);

  const dispatch = useAppDispatch();


  const handleClickChangePassword = () => {

    const userRe:userUpdatePassword = {
      userName: email,
      password: password,
      newPassword: newPassword
    }

    dispatch(passwordFetch(userRe));

    setPassword('');
    setEmail('');
    setNewPassword('');
  }

  return (
    <div>
      <div>
        <div className="row">
          <div className="col-12">
            <div className="mb-3">
              <h3>Change Password</h3>
            </div>
          </div>
        </div>

        <div className="row gy-3 overflow-hidden">
          <div className="col-12">
            <div className="form-floating mb-1">
              <input onChange={e => setNewPassword(e.target.value.trim())}
                     type="password" className="form-control border-2" name="newPassword" id="newPassword"
                     placeholder={''} value={newPassword} required />
              <label form="newFirstName" className="user form-label">New Password</label>
            </div>
          </div>

          <div className="col-12">
            <div className="form-floating mb-1">
              <input onChange={e => setEmail(e.target.value.trim())}
                     type="email" className="form-control border-2" name="email" id="email"
                     placeholder={data.login} value={email} required />
              <label form="email" className="email form-label">Email</label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-floating mb-1">
              <input onChange={e => setPassword(e.target.value.trim())}
                     type="password" className="password form-control border-2" name="password"
                     id="password"
                     placeholder="Password" value={password} required />
              <label htmlFor="password" className="pass form-label">Password</label>
            </div>
          </div>

          <div className="col-12 ">
            <div className="d-grid">
              <button onClick={handleClickChangePassword} className="btn bsb-btn-3xl btn-primary py-3"
                      type="submit">Update new Password
              </button>
              <div className="col-12 "> {status}</div>
              <div className='py-3'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChangePassword