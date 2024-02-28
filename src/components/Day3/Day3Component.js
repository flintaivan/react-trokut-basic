import './Day3Style.scss'
import FooterComponent from './FooterComponent'
import MainComponent from './MainComponent'
import NavbarComponent from './NavbarComponent'

const Day3Component = () => {
const mainContent = {
    mainContent: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo dolore, similique ad suscipit ut cumque nihil eos, molest',
    mainTitle: 'About page',
}
const navbarContent = {
    navigation: {
        home: 'Home',
        about: 'About',
        blog: 'Blog',
        contact: 'Contact',
    },
    logo: 'Blog'
}
const footerContent = {
    content: 'footer'
}
return (
    <div className={'blog-container'}>
    <NavbarComponent content={navbarContent} />
    <MainComponent content={mainContent} />
    <FooterComponent content={footerContent} />
    </div>
    )
}


export default Day3Component 