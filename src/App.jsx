import Header from "./components/header"
import Main from "./components/main"
import Footer from "./components/footer"
// import './App.css'

function App() {
 // dati ricavati per la gestione dei link della Navbar
 const links = [
  { id: 1, text: 'CHARACTERS', url: '#', current: false },
  { id: 2, text: 'COMICS', url: '#', current: true },
  { id: 3, text: 'MOVIES', url: '#', current: false },
  { id: 4, text: 'TV', url: '#', current: false },
  { id: 5, text: 'GAMES', url: '#', current: false },
  { id: 6, text: 'COLLECTIBLES', url: '#', current: false },
  { id: 7, text: 'VIDEOS', url: '#', current: false },
  { id: 8, text: 'FANS', url: '#', current: false },
  { id: 9, text: 'NEWS', url: '#', current: false },
  { id: 10, text: 'SHOP', url: '#', current: false },
  
];

  return (
    <>
     <Header linkProp={links} />
     <Main />
     <Footer />
    </>
  )
}

export default App
