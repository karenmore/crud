import React from 'react'
import './styles/UserCard.css'

const UserCard = ({user, deleteUser, setUserUpdate, setIsFormClose}) => {

    const handeDelete = () => {
        deleteUser(user.id)
    }

    const handeEdit = () => {
        setUserUpdate(user)
        setIsFormClose(false)
    }

  return (
      <article className='user__card'>
      <h2 className='user__card__name'>{user.first_name} {user.last_name}</h2>
      <hr className='user__card__hr' />
      <ul className='user__list'>
        <li className='user__card__item'>
          <span className='user__card__label'>Email:</span>
          <span className='user__card__value'>{user.email}</span>
        </li>
        <li className='user__card__item'>
          <span className='user__card__label'>Birthday:</span>
          <span className='user__card__value'>{user.birthday}</span>
        </li>
      </ul>
      <hr className='user__card__hr' />
      <footer className='user__card__footer'>
        <button className='btn__delete' onClick={handeDelete}><i className='bx bx-trash'></i></button>
        <button className='btn__edit' onClick={handeEdit}><i className='bx bx-edit-alt' ></i></button>
      </footer>
    </article>
  )
}

export default UserCard
