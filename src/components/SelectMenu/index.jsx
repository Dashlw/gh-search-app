import React from 'react';
import { majorScale, Select } from 'evergreen-ui';
import useSearchData from '../../hooks/useSearchData';
import './SelectMenu.css';

const SelectMenu = ({ query, handleChange, options, defaultLabel, values, ...props }) => {
  const { languageList } = useSearchData(query);
  const dropdownOptions = options ? options : languageList;

  return (
    <Select
      height={majorScale(5)}
      onChange={event => handleChange(event.target.value.toLowerCase())}
      {...props}
    >
      <option value="">{defaultLabel}</option>
      {dropdownOptions?.map((option, i) => (
        option && (
          <option key={option} value={values ? values[i] : option}>
            {option}
          </option>
        )))}
    </Select>
  );
};

export default SelectMenu;