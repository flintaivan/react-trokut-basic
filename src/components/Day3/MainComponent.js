import './Day3Style.scss'
import SidebarComponent from './SidebarComponent'

const MainComponent = (props) => {
    const sidebarContent = {
        sidebarContent: [
            'Lorem ipsum dolor sit amet.',
            'Lorem ipsum dolor sit amet. dolor sit amet',
            'Lorem ipsum dolor sit amet.',
            'Lorem ipsum dolor sit amet. dolor sit amet'
        ],
        sidebarTitle: 'Recent Articles',
    }
    // console.log(props.content.mainContent)
    return (
        <main className={'main-tag'}>
            <SidebarComponent sidebarContent={sidebarContent} />            
            <div className="main-content">
                <h2>{props.content.mainTitle}</h2>
                <p>
                   {props.content.mainContent}
                </p>
            </div>
        </main>
    )
}

export default MainComponent