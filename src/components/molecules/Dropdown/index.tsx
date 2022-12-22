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
    <React.StrictMode>
      <div className={style.input}>
        <select name={name} value={value} onChange={onChange}>
          {values?.map((value) => {
            return (
              <option key={value.value} value={value.value}>
                {value.label}
              </option>
            );
          })}
        </select>
      </div>
    </React.StrictMode>
  );
};

export default Dropdown;
