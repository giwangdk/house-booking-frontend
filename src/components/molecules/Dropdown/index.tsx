import React from 'react';
import { DropdownProps } from '../interface';
import style from './index.module.scss';

const Dropdown: React.FC<DropdownProps> = ({
  values,
  name,
  onChange,
  value,
}) => {
  return (
    <div className={style.input}>
      <select name={name} value={value} onChange={onChange}>
        {values?.map((value, index) => {
          return (
            <option key={index} value={value.value}>
              {value.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Dropdown;
