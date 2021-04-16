import React, { createContext, useState } from "react";

var colorMenu = localStorage.getItem('colorMenu')
var textColorMenu = localStorage.getItem('textColorMenu')
var textColorMenuHover = localStorage.getItem('textColorMenuHover')
var colorButtonClose = localStorage.getItem('colorButtonClose')

const DEFAULT_VALUE = {
  state: {
    colorMenu: colorMenu,
    textColorMenu: textColorMenu,
    textColorMenuHover: textColorMenuHover,
    colorButtonClose: colorButtonClose
  },
  setState: () => { },
};

const UserContext = createContext(DEFAULT_VALUE);

const ColorDefaultContextProvider = ({ children }: any) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);
  return (
    <UserContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { ColorDefaultContextProvider };
export default UserContext;
