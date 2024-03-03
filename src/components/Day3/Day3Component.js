// import './Day3Style.scss'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import MainComponent from './MainComponent'
import NavbarComponent from './NavbarComponent'

const Day3Component = () => {

const menuItems = ['Home', 'About', 'Blog', 'Contact', 'Day3Component']
const companyMessage = {
    title: 'This is blog marketing message',
    subtitle: 'This is our company subtitle message, thank you for your visit!'
}

return (
    <div className={'blog-container'}>
        <NavbarComponent menuItems={menuItems} />
        <HeaderComponent companyTitle={companyMessage} />
        <MainComponent />
        <div className='mt-40'>
            <FooterComponent />
        </div>
    </div>
    )
}


export default Day3Component 