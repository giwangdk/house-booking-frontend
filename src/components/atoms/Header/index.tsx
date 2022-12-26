import classNames from 'classnames'
import React from 'react'
import { HeaderProps } from '../interface'
import style from './index.module.scss'

const Header:React.FC<HeaderProps> = ({className, children}) => {
    const classProps = classNames(
        className,
        style.header
    )
    return (
    <div className={classProps}>
        {children}
    </div>
  )
}

export default Header