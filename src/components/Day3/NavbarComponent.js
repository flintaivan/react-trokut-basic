const NavbarComponent = (props) => {
    // console.log(props.menuItems)
    let menuItems = ['Home', 'About', 'Blog', 'Contact']
    if(props.menuItems) {
        menuItems = props.menuItems
    }
    return (
        <nav className="bg-indigo-900 text-indigo-200">
            <div className="container max-w-screen-xl flex items-center justify-between mx-auto p-4">
                <a href="#" className="text-2xl">
                    Blog
                </a>
                <div>
                    <ul className="flex space-x-5">
                    {menuItems.map((item, index) => 
                        <li key={index}>
                            <a href="#" className="px-3 py-3 hover:bg-indigo-700">{item}</a>
                        </li>    
                    )}
                    </ul>
                </div>
            </div>
            
        </nav>
    )
}

export default NavbarComponent