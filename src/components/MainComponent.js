import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Services from './ServicesComponent';
import Gallery from './GalleryComponent';
import Products from './ProductsComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    render() {

        const HomePage = () => {
            return (
                <Home />
            );
        };
        
        return(
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route path='/services' component={Services} />
                    <Route path='/gallery' component={Gallery} />
                    <Route path='/products' component={Products} />
                    <Route path='/contact' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;