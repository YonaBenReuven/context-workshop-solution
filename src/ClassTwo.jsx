import React, { Component } from 'react';

import { MyContext } from "./AppProvider";

// this method of consuming context is available ony in class based components;
// you cannot consume multiple context objects with this method;

class ClassTwo extends Component {

    // define that the context that is being used in this call is the context object that you want;
    static contextType = MyContext;

    render() {
        // the value of the context is found in this.context;
        const { theme, language, toggleTheme } = this.context;
        return (
            <button className={`${theme}-theme-button`} onClick={toggleTheme}>{language === "English" ? "Toggle Theme" : "החלף ערכת נושא"}</button>
        );
    }
}

export default ClassTwo;

// explanation about static:

// The static keyword defines a static variable (can be methods) for a class;
// static variables aren't defined on every instances of the class;
// instead they're defined for the class itself;

// example:

/*
class Car {
    static yeet = 'hello'
}

console.log(Car.yeet); // 'hello'
*/