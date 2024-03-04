
const SidebarComponent = (props) => {
    // console.log("Article title => ", props.articleTitle)

    return (
        <div className="col-span-3 text-indigo-900 rounded border-1 shadow-2xl border-indigo-900 px-4 py-8">
            <h2 className="ms-8 text-2xl">All articles:</h2>
            <ul className="m-8 flex flex-col">
                {
                    props.articleTitle.map((article, index) => 
                        <a 
                            href="#"
                            className={`underline hover:text-indigo-400 hover:no-underline ${props.currentArticle === index ? 'no-underline text-indigo-400' : ''}`}
                            onClick={(e) => {
                                e.preventDefault()
                                props.articleChange(index)
                            }}
                            key={index}
                        >
                            <li>{article.name}</li>
                        </a>
                    )
                }
              </ul>
        </div>
    ) 
}

export default SidebarComponent