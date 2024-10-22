import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import postsReducer from "./features/Posts.js"

const store = configureStore({
  reducer: {
    posts: postsReducer //初期の値に記事(action.payload)を追加する処理がストアに入っている状態
  },
});



createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
