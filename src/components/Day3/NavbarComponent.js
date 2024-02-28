import './Day3Style.scss'

const NavbarComponent = () => {
    return (
        <div className="navbar">
            <div className="logo">Blog</div>
            <nav className='nav'>
                <ul className='links-ul'>
                    <li className='link'>Home</li>
                    <li className='link'>About</li>
                    <li className='link'>Blog</li>
                    <li className='link'>Contact</li>
                </ul>
            </nav>
        </div>
    )
}

export default NavbarComponent