import React, { Component, createContext } from 'react';

// import createContext from react;
// createContext is a function that recieves an default value and returns a context object;
// this context object is what we use to provide context to components and to consume the value in components;

export const MyContext = createContext();

class AppProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: "dark",
            language: "English"
        }
    }

    toggleTheme = () => {
        const theme = this.state.theme === "dark" ? "light" : "dark";
        this.setState({ theme });
    }

    toggleLanguage = () => {
        const language = this.state.language === "English" ? "Hebrew" : "English";
        this.setState({ language });
    }

    render() {
        const { state, toggleLanguage, toggleTheme } = this;

        // one of the context object's attributes is Provider;
        // the Provider is a component that wraps our components and has one prop: value;
        // the value is what we pass to our components;
        // it can be of any type: object, array string...;
        // no matter how deep a component is in our tree, if it's in the provider, it can consume the context;

        // there are 3 ways to consume context;
        // see ClassOne.jsx, ClassTwo.jsx and Func.jsx;

        return (
            <MyContext.Provider value={{ ...state, toggleLanguage, toggleTheme }}>
                {this.props.children}
            </MyContext.Provider>
        );
    }
}

export default AppProvider;

// explanation about props.children:

// we are used to our components being self closing: 
/*
<AppProvider />
*/

// but our components don't need to be self closing. they can look like this:
/*
<AppProvider>

</AppProvider>
*/

// everything that's in the components is passed as children in the props;

// so when we do this:
/*
<MyContext.Provider value={{ ...state, toggleLanguage, toggleTheme }}>
    {this.props.children}
</MyContext.Provider>
*/

// and this:
/*
<AppProvider>
    <div className="App">
        <ClassOne />
        <ClassTwo />
        <Func />
    </div>
</AppProvider>
 */

// it's just like doing this:
/*
<MyContext.Provider value={{ ...state, toggleLanguage, toggleTheme }}>
    <div className="App">
        <ClassOne />
        <ClassTwo />
        <Func />
    </div>
</MyContext.Provider>
*/

/*
the reason we use the providers as wrapping components is because we want separate
the context from the components we provide it to;
*/