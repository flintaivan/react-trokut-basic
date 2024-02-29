import { useState } from 'react'
import { userData } from './userData'

const StateExampleComponent = () => {

    console.log("user Data =>", userData)

    const initialGreeting = 'Hello guest'
    const [greeting, setGreeting] = useState(initialGreeting)

    const [counter, setCounter] = useState(0)

    let initialUser = {
        name: "Ivan",
        lastName: "Flinta",
        role: "Developer",
    }
    if(userData !== undefined) initialUser = userData

    const [user, setUser] = useState(initialUser)

    const handleCount = () => {
        const noGreeting = 'No greetings for you'
        if(counter === 3) {
            setCounter(noGreeting)
            return
        } else if (counter === noGreeting) {
            setCounter(3 + 1)
            return
        }
        setCounter(counter + 1)
    }

    const handleGreeting = () => {
        setGreeting(`Hello ${user.name} ${user.lastName} (${user.role})`)
    }

    const buttonStyle = {
        margin: 10,
        backgroundColor: "gold",
        padding: 10,
        color: "white",
        borderRadius: 4,
        border: "none"
    }

    return (
        <div>
            <h3>{(counter !== 3) && greeting}</h3>
            <img src={userData.imageUrl} alt="" />
            <button onClick={() => handleGreeting()} style={buttonStyle}>Greet me</button>
            <button onClick={() => handleCount()} style={buttonStyle}>Count</button>
            <h3>{counter}</h3>

        </div>
    )
}

export default StateExampleComponent