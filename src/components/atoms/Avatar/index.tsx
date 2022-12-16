import React from 'react'
import { AvatarProps } from '../interface'
import style from './index.module.scss'

const Avatar:React.FC<AvatarProps> = ({src}) => {
  return (
    <div className={style.avatar} style={{backgroundColor:"#F5F5F5"}}>
        <img src={src} alt="" />
    </div>
  )
}

export default Avatar