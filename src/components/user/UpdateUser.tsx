import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import  type { userUpdateRequest } from "../../utils/interface"
import { updateFetch } from "../../features/actions/accountAcrion"

const UpdateUser = () => {

  const {status, data} = useAppSelector(state => state.user)


    const [newFirstName, setNewFirstName] = useState('');
    const [newLastName, setNewLastName] = useState('');
    const [email, setEmail] = useState(data.login);
    const [password, setPassword] = useState('');

    const dispatch = useAppDispatch();

    const  handleClickUpdateDate = () => {

      const user: userUpdateRequest = {
        firstName: newFirstName,
        lastName: newLastName,
        userName: email,
        password: password,
      }
      dispatch(updateFetch(user));

      setNewFirstName('');
      setNewLastName('');
      setEmail('');
      setPassword('');
  }

  return (
    <div>
      <div>
        <div className="row">
          <div className="col-12">

              <h3 >Update First and Last Name</h3>
          </div>
        </div>

        <div className="row gy-3 overflow-hidden">
          <div className="col-12">
            <div className="form-floating">
              <input onChange={e => setNewFirstName(e.target.value.trim())}
                type="text" className="form-control border-2" name="newFirstName" id="newFirstName"
                     placeholder={''} value={newFirstName} />
              <label form="newFirstName" className="user form-label">New First Name</label>
            </div>
          </div>

          <div className="col-12">
            <div className="form-floating mb-1">
              <input onChange={e => setNewLastName(e.target.value.trim())}
                type="text" className="form-control border-2" name="newLastName" id="newLastName"
                     placeholder={''} value={newLastName} required />
              <label form="newLastName" className="user form-label">New Last name</label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-floating mb-1">
              <input onChange={e => setEmail(e.target.value.trim())}
                type="email" className="form-control border-2" name="email" id="email"
                     placeholder="name@example.com" value={email} required />
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
              <button onClick={handleClickUpdateDate} className="btn bsb-btn-3xl btn-primary py-3"
                      type="submit">Update new data
              </button>
              <div className='px-3'></div>
            </div>
          </div>
          <div className="col-12 ">
            {status}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateUser