import { useState } from "react"
import { registerFetch } from "../../features/actions/accountAcrion"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import type { userRequest } from "../../utils/interface"

const Register = () => {
  //TODO create style, inputs and button

  const {status} = useAppSelector(state => state.user)

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useAppDispatch();

  const { user } = useAppSelector(state => state);

  console.log(user)

  const handleClickRegister = () => {
    // const token = encryptedToken(email, password);

    const user: userRequest = {
      firstName,
      lastName,
      password,
      login: email
    }
    dispatch(registerFetch(user));
    setFirstName('');
    setLastName('');
    setPassword('');
    setEmail('');
  }



  return (
    <div>
      <div className="row">
        <div className="col-12">
          <div className="mb-5">
            <h3>Register</h3>
          </div>
        </div>
      </div>
      <div className="row gy-3 overflow-hidden">
        <div className="col-12">
          <div className="form-floating mb-1">
            <input type="text" onChange={(e) =>
              setFirstName(e.target.value.trim())} className="form-control border-2" name="name" id="name"
                   placeholder="First Name" value={firstName} />
            <label form="name" className="user form-label">First Name</label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-floating mb-1">
            <input type="text" onChange={(e) =>
              setLastName(e.target.value.trim())} className="form-control border-2" name="lastname" id="lastname"
                   placeholder="name@example.com" value={lastName} required />
            <label form="lastname" className="user form-label">Last name</label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-floating mb-1">
            <input type="email" onChange={(e) =>
              setEmail(e.target.value.trim())} className="form-control border-2" name="email" id="email"
                   placeholder="name@example.com" value={email} required />
            <label form="email" className="email form-label">Email</label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-floating mb-1">
            <input type="password" onChange={(e) =>
              setPassword(e.target.value.trim())} className="password form-control border-2" name="password" id="password"
                   placeholder="Password" value={password} required />
            <label htmlFor="password" className="pass form-label">Password</label>
          </div>
        </div>

        <div className="col-12">
          <div className="d-grid">
            <button onClick={handleClickRegister} className="btn bsb-btn-3xl btn-primary py-3" type="submit">Register</button>
          </div>
        </div>
        <div className="col-12">{status}
        </div>
      </div>
    </div>
  )
}

export default Register