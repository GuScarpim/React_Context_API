import { combineContexts } from './combineContexts'

import { UserContextProvider } from './user/index'

const providers = [UserContextProvider]
export const AppContextProvider = combineContexts(...providers)
