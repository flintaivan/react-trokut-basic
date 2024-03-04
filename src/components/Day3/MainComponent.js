import SidebarComponent from './SidebarComponent'
import ArticleComponent from './ArticleComponent'
import { useState } from 'react'

const MainComponent = (props) => {
    const article = props.articleList
    const [currentArticle, setCurrentArticle] = useState(0)

    const articleChange = (index) => {
        setCurrentArticle(index)
    }
    // console.log(currentArticle)
    return (
        <main className="container max-w-screen-xl mx-auto p-4 grid grid-cols-10 gap-4 mt-8">
            <SidebarComponent articleTitle={article} articleChange={articleChange} currentArticle={currentArticle} />
            <ArticleComponent articleList={article} currentArticle={currentArticle} />
        </main>
    )
}

export default MainComponent