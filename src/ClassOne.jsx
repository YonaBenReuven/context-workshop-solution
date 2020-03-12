import React, { Component } from 'react';

import { MyContext } from "./AppProvider";

// this method of consuming context is available both in class based and functional components;
// it can only be used in the render method;

class ClassOne extends Component {
    render() {
        // one of the context object's attributes is Consumer;
        // the Consumer is a wrapper component that recieves a function as its child which recieves the value of the context object;
        return (
            <MyContext.Consumer>
                {({ theme, language }) => (
                    <div className={`${theme}-theme-clr`}>{language === "English" ? theme : theme === "dark" ? "כהה" : "בהיר"}</div>
                )}
            </MyContext.Consumer>
        );
    }
}

export default ClassOne;