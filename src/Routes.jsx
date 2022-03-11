import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import HtmlHead from "./components/HtmlHead";
import Characters from "./pages/characters/Characters";
import Episodes from "./pages/episodes/Episodes";
import Home from "./pages/Home";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";

const Routes = () => {
    return (
        <BrowserRouter>
            <Route exact path={'/'}>
                <HtmlHead/>
                <TopBar extended/>
                <Home/>
                <Footer/>
            </Route>
            <Route path={'/characters'}>
                <HtmlHead page={"Characters"}/>
                <TopBar extended/>
                <Characters/>
                <Footer/>
            </Route>
            <Route path={'/episodes'}>
                <HtmlHead page={"Episodes"}/>
                <TopBar extended/>
                <Episodes/>
                <Footer/>
            </Route>
        </BrowserRouter>
    );
}

export default Routes;
