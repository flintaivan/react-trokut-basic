import './Day3Style.scss'

const NavbarComponent = (props) => {
    // console.log(props.content.navigation)
    return (
        <div className="navbar">
            <div className="logo">{props.content.logo}</div>
            <nav className='nav'>
                <ul className='links-ul'>
                    <li className='link'>{props.content.navigation.home}</li>
                    <li className='link'>{props.content.navigation.about}</li>
                    <li className='link'>{props.content.navigation.blog}</li>
                    <li className='link'>{props.content.navigation.contact}</li>
                    </ul>
            </nav>
        </div>
    )
}

export default NavbarComponent