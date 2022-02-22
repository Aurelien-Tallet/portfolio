import React, { useEffect } from 'react';
import './Style/Home.css';
import Title from './Title'




const Home = () => {
    console.log('monter Home')
    useEffect(() => {
        return () => console.log('démonter SSH test')
    }, [])

    return (
        <div className="Home">
            <Title />


        </div>
    )
}
export default Home
