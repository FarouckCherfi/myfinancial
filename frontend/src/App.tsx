import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {Helmet} from "react-helmet";


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

const Home: React.FC = () => {
    return (
        <div>
            <Helmet>
                <title>Home page</title>
                <meta name="description" content="This page is the home page."/>
            </Helmet>
            <div>Home</div>
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
                <Link to="/">Home</Link> <Link to="/about">About</Link> <Link to="/news">News</Link>
                <br />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/news" element={<News />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
