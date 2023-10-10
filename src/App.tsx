import './pages/App.css'
import { Image, Collapsable } from './pages/util';

export default function App(){
  return(
    <main>
      <Image name='/home.jpeg'>
        <h1>Jack Summers --- P3 Modern World History</h1>
        <Collapsable name='Sections'>
          <a href='#afsectop'>
            <button>Go To Communties in AfroEurasia</button>
          </a>
        </Collapsable>
      </Image>
    </main>
  )
}