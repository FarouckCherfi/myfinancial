import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import {Helmet} from "react-helmet";
import HomeContainer from './containers/Home/HomeContainer';
import Header from './components/Header/Header';


const About: React.FC = () => {
    return (
        <div>
            <Helmet>
                <title>About page</title>
                <meta name="description" content="This page explains everything about our react app."/>
            </Helmet>
            <div>About</div>
        </div>
    );
};

const News: React.FC = () => {
    return (
        <div>
            <Helmet>
                <title>News page</title>
                <meta name="description" content="This page shows the latest news."/>
            </Helmet>
            <div>News</div>
        </div>
    );
};

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<HomeContainer />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/news" element={<News />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
