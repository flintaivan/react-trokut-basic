import './Day3Style.scss'
const FooterComponent = (props) => {
    // console.log(props.content.content)
    return (
        <footer className='footer'>
            {props.content.content}
        </footer>
    )
}

export default FooterComponent