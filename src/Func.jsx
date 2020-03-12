import React, { useContext } from 'react';

import { MyContext } from './AppProvider';

const Func = () => {
    // the useContext hook recieves the context object and returns the value (very simple);
    const { theme, language, toggleLanguage } = useContext(MyContext);
    return (
        <button className={`${theme}-theme-button`} onClick={toggleLanguage}>{language === "English" ? "Toggle Language" : "החלף שפה"}</button>
    );
}

export default Func;