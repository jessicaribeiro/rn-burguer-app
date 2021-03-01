import React, {useState} from 'react';
import Layout from "../components/Layout";
import BurgerBuilder from "../components/BurgerBuilder";

const App = () => {


    return (
        <div>
            <Layout>
                <BurgerBuilder/>
            </Layout>
        </div>
    );
};


export default App;

//components folder -> components without state, only for layout
//containers folder -> components with state
