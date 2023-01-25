import { Navbar } from "../components/Navbar"
import { Products } from "../components/Products"
import { Wrapper } from "../components/Wrapper"

export const Home = () => {
    return (
        <>
            <Wrapper>
                <Navbar/>
                <Products/>
            </Wrapper>
        </>
    )
}