import React from 'react'

// Passa array de context e combina todos
export const combineContexts = (...contexts) => {
  return contexts.reduce(
    (AccumulatedContexts, CurrentContext) => {
      return ({ children }) => {
        return React.createElement(
          AccumulatedContexts,
          null,
          React.createElement(CurrentContext, null, children)
        )
      }
    },
    ({ children }) => React.createElement(React.Fragment, null, children)
  )
}
