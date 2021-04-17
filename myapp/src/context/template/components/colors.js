import React, { createContext, useState } from "react";

const colorCard = localStorage.getItem('colorCard')
const colorBackAvatar = localStorage.getItem('colorBackAvatar')
const colorTitle = localStorage.getItem('colorTitle')
const colorSubTitle = localStorage.getItem('colorSubTitle')

const DEFAULT_VALUE = {
  state: {
    colorCard: colorCard,
    colorBackAvatar: colorBackAvatar,
    colorTitle: colorTitle,
    colorSubTitle: colorSubTitle
  },
  setState: () => { },
};

const Context = createContext(DEFAULT_VALUE);

const ColorDefaultContextProvider = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);
  return (
    <Context.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ColorDefaultContextProvider };
export default Context;
