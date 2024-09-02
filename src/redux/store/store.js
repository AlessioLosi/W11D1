import { configureStore } from '@reduxjs/toolkit'
import mainReducer from '../reduces'

const store = configureStore(
mainReducer )

export default store