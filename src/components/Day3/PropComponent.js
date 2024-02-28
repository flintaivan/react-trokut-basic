const PropComponent = (props) => {
    // console.log(props)

    const containerStyle = {
        backgroundColor: 'crimson',
        borderRadius: '10px',
        padding: '20px',
        marginBottom: '20px',
        minWidth: '200px',
        color: 'white'
    }

    return (
        <div style={containerStyle}>
            <h4>{props.title}</h4>
            <h6>Written by: {props.username}</h6>
            <p>{props.subtitle}</p>
        </div>

    )
}

export { PropComponent }