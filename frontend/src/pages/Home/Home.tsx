import React from 'react';
import { HomeProps } from '../../types';
import { Helmet } from 'react-helmet';

const Home: React.FC<HomeProps> = ({ data, loading }) => {
    return (
        <div>
            <Helmet>
                <title>My Financial</title>
                <meta name="description" content=""/>
            </Helmet>
        </div>
    );
};

export default Home;
