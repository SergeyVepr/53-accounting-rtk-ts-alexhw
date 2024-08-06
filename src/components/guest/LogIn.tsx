import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { loginFetch} from "../../features/actions/accountAcrion"
import { encryptedToken } from "../../utils/constans"

const LogIn = () => {

  const{ status, counterRejected} = useAppSelector(state => state.user)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const dispatch = useAppDispatch();

  const handleClickLogin = () => {
    const token = encryptedToken(email,password)
    dispatch(loginFetch(token))

    setEmail("")
    setPassword("")
  }

  return (


    <div>
      <div className="row">
        <div className="col-12">
          <div className="mb-5">
            <h3>Log in</h3>
          </div>
        </div>
      </div>
      <div className="row gy-3 overflow-hidden">
        <div className="col-12">
          <div className="form-floating mb-1">
            <input onChange={e => setEmail(e.target.value.trim())} value={email} type="email"
                   className="form-control  border-2 " name="email" id="email"
                   placeholder="name@example.com" required />
            <label form="email" className="email form-label">Email</label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-floating mb-1">
            <input onChange={e => setPassword(e.target.value.trim())} value={password} type="password"
                   className="password form-control border-2" name="password" id="password"
                   placeholder="Password" required />
            <label htmlFor="password" className="pass form-label">Password</label>
          </div>
        </div>

        <div className="col-12">
          <div className="d-grid">
            <button onClick={handleClickLogin} disabled={counterRejected > 3} className="btn bsb-btn-3xl btn-primary py-3" type="submit">Log in now
            </button>
          </div>
        </div>
        <div className="col-12">
          <div className="d-grid">
            <button className="btn bsb-btn-3xl btn-primary py-3" type="submit">Clear</button>
          </div>

          <div className="col-12">{status}</div>
        </div>
      </div>
    </div>


  )
}


export default LogIn