import SidebarComponent from './SidebarComponent'
import ArticleComponent from './ArticleComponent'

const MainComponent = (props) => {
    const article = props.articleList
    return (
        <main className="container max-w-screen-xl mx-auto p-4 grid grid-cols-10 gap-4 mt-8">
            <SidebarComponent />
            <ArticleComponent articleList={article} />
        </main>
    )
}

export default MainComponent