import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import CommAfAs, { Awnsers } from './pages/CommAfAs';
import StRleg, { Ans } from './pages/StRleg';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)


ReactDOM.createRoot(document.getElementById('afsectop') as HTMLElement).render(
  <React.StrictMode>
    <CommAfAs />
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('ans') as HTMLElement).render(
  <React.StrictMode>
    <Awnsers />
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('strelgtop') as HTMLElement).render(
  <React.StrictMode>
    <StRleg />
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('ans2') as HTMLElement).render(
  <React.StrictMode>
    <Ans />
  </React.StrictMode>
)


