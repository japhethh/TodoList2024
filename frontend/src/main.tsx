import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ListContextProvider from './context/ListContext.tsx'
import {BrowserRouter} from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
    <ListContextProvider>
    <App />
    </ListContextProvider>
    </BrowserRouter>
)
