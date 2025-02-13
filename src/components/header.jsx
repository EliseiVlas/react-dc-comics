export default function Header() {

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
    <header>
        <div className ="container-header">
            <div className="logo">
                <img src="./public/dc-logo.png" alt="" />
            </div>
            <div>
                <ul>
                    {links.map((link) => (
                        <li key={link.id} className={link.current ? "active" : ""}>
                            {link.text}
                        </li>
                ))}
                    {/* <li>CHARACTERS</li>
                    <li>COMICS</li>
                    <li>MOVIES</li>
                    <li>TV</li>
                    <li>GAMES</li>
                    <li>COLLECTIBLES</li>
                    <li>VIDEOS</li>
                    <li>FANS</li>
                    <li>NEWS</li>
                    <li>SHOP</li> */}
                </ul>
            </div>
      </div>
    </header>
    )
}