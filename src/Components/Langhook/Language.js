import React from 'react';
import { useTranslation } from 'react-i18next';
import './Language.css'
function Language() {
  const { i18n } = useTranslation();
  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };
  return (
    <div>
        <select onChange={changeLanguage} >
        <option style={{ color: 'black' }} >Select Language</option>
        <option style={{ color: 'black' }} value="en">English</option>
        <option style={{ color: 'black' }} value="ar"  >Arabic</option>     
        </select>
    </div>
  )
}

export default Language
