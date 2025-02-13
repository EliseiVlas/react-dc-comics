export default function navBar(props){
    return(
        <div>
                <ul>
                    {props.linkProp.map((link) => (
                        <li key={link.id} className={link.current ? "active" : ""}>
                            {link.text}
                        </li>
                ))}
                </ul>
            </div>
    )
}