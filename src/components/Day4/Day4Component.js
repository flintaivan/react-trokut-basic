import { articlesList } from './articleList'
import NavbarComponent from "../Day3/NavbarComponent"
import StateExampleComponent from "./StateExampleComponent"
import HeaderComponent from "../Day3/HeaderComponent"
import MainComponent from "../Day3/MainComponent"
import FooterComponent from '../Day3/FooterComponent'

const Day4Component = () => {
    const companyTitle = {
        title: 'Hello from Day4 component',
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente non eligendi fuga repellat, sit sunt quae tempora nesciunt aut asperiores."
    }
    // console.log(articlesList)
    return (
        <div>
            <NavbarComponent />
            <HeaderComponent companyTitle={companyTitle} />
            <MainComponent articleList={articlesList} />
            <FooterComponent />
            {/* <h3>Day 4 component</h3> */}
            {/* <NavbarComponent /> */}
            {/* <StateExampleComponent  /> */}
        </div>
    )
}

export default Day4Component