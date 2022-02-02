import imgCapaAlberto from './assets/img/Alberto.png'
import {Header} from './components/Header'

function App() {
  return (
    <div>
     <Header/>

     <main>
       <div>
         <img src={imgCapaAlberto} alt="Capa do Filme: Oi, Alberto" />
         <p>Oi, Alberto</p>
         <p>12 NOV 2021</p>
       </div>
     </main>
    </div>
  );
}

export default App;
