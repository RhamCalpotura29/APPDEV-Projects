import Footer from "./Footer";
import Header from "./Header";
import Body from "./Body";

function App() {
    return (
        <>
            <Header />
            <br />
            <div className="container">
                <Body /> 
                <Body name="Rham" food="Burger" isHealth={false} age={21}/>
                <Body name="Ira" food="Samgy" isHealth={false} age={22}/>
                <Body name="Jp" food="Chicken" isHealth={false} age={21}/>
                <Body name="Raja" food="Chicken" isHealth={false} age={22}/>
                <Body name="Ivan" food="Burger" isHealth={false} age={22}/>
            </div>
            <Footer />
        </>
    );
}

export default App;

