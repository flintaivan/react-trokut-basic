import './Day3Style.scss'

const SidebarComponent = (props) => {
    // console.log(props.sidebarContent.sidebarTitle)
    return (
        <div className="sidebar">
            <h2>{props.sidebarContent.sidebarTitle}</h2>
            <ul>
                <li>{props.sidebarContent.sidebarContent[0]}</li>
                <li>{props.sidebarContent.sidebarContent[1]}</li>
                <li>{props.sidebarContent.sidebarContent[2]}</li>
                <li>{props.sidebarContent.sidebarContent[3]}</li>
            </ul>
        </div>
    ) 
}

export default SidebarComponent