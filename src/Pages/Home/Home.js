import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import Featured from './Feautured/Featured';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <div className="divider text-3xl my-12">Shop By Category</div>
            <Category></Category>
            <Featured></Featured>
        </div>
    );
};

export default Home;