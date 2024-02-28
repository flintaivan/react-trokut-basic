import './FunctionComponent.css'
import './styleSass.scss'

function FunctionComponent() {
  
    const validation = true
  
    let customClass = 'heading'
    if(validation) {
        customClass += " blue"
    }

    return (
    <div>
        <h3 className={customClass}>Dynamic color Greeting from function component</h3>
    </div>
)
}

export default FunctionComponent