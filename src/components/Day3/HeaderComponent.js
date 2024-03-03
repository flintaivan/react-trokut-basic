const HeaderComponent = (props) => {
    // console.log("headerComp => ", props.companyTitle.title)
    let title = "Some company title"
    let subtitle = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta cumque labore modi non! Soluta in, pariatur fuga ut deserunt optio."
    if(props.companyTitle) {
        title = props.companyTitle.title
        subtitle = props.companyTitle.subtitle
        
    }

    return (
        <div>
            <div className="w-screen-full h-96 bg-indigo-400 flex items-center justify-start text-indigo-100">
                <div className="container max-w-screen-xl mx-auto p-4">
                    <h1 className="text-4xl my-4">{title}</h1>
                    <span className="text-md">{subtitle}</span>
                </div>
            </div>
        </div>
    ) 
}

export default HeaderComponent