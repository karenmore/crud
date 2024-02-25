import { useState, useEffect } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import UserCard from './components/UserCard'
import FormUser from './components/FormUser'

function App() {

  const [userUpdate, setUserUpdate ] = useState()
  const [isFormClose, setIsFormClose] = useState(true)

  const baseUrl = 'https://back-end-user-app.onrender.com'

  const [users, getUsers, createUser, deleteUser, updateUser] = useFetch(baseUrl)

  useEffect(() => {
    getUsers()
  }, [])

  console.log(users)

  const handleOpenForm = () => {
    setIsFormClose(false)
  }

  return (
      <div>
        <h1 className='user__title'>User</h1>
        <button className='btn__create' onClick={handleOpenForm}>+ create new user</button>
        <div className={`form__container ${isFormClose && 'form__close'}`}>
          <FormUser
            createUser={createUser}
            userUpdate={userUpdate}
            updateUser={updateUser}
            setUserUpdate={setUserUpdate}
            setIsFormClose={setIsFormClose}
          />
          </div>
        <div className="user__cards__container">
          {
            users?.map(user => (
              <UserCard
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setUserUpdate={setUserUpdate}
              setIsFormClose={setIsFormClose}
              />
            ))
          }
        </div>
      </div>
  )
}

export default App
