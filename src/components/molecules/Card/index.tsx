import classNames from 'classnames'
import React from 'react'
import {  CardProps } from '../interface'
import style from './index.module.scss'


const Card:React.FC<CardProps> = ({children, className}) => {

const classProps = classNames(
    style.card,
    className
)

  return (
    <div className={classProps}>
        {children}
    </div>
  )
}

export default Card