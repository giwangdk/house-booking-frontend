import React from 'react'
import { Avatar } from '../../atoms'
import Card from '../Card'
import { CardProfileProps } from '../interface'
import style from './index.module.scss'

const CardProfile:React.FC<CardProfileProps>= () => {
  return (
    <Card className={style.card__profile}>
        <Avatar />
        <div className={style.card__profile__profile}>
          <p>John Doe</p>
          <p>UI/UX Designer</p>
        </div>
    </Card>
  )
}

export default CardProfile