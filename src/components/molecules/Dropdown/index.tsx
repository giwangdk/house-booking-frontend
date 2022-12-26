import React from 'react';
import { DropdownProps } from '../interface';
import Select from 'react-select';
import style from './index.module.scss';

const Dropdown: React.FC<DropdownProps> = ({
  values,
  name,
  onChange,
  value,
}) => {
  return (
    <div className={style.input}>
      <Select
        options={values}
        className={style.select}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            border: 'none',
            backgroundColor: 'transparent',
          }),
        }}
        defaultValue={value}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export default Dropdown;
