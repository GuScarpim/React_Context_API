import React from "react";

import { ColorDefaultContextProvider } from "./template/color/colorMenu";

const GlobalContext = ({ children }: any) => {
  return (
    <>
      <ColorDefaultContextProvider>{children}</ColorDefaultContextProvider>
    </>
  );
};

export default GlobalContext;