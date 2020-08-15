import React from 'react';
import Title from '../components/title';
import Link from '../components/link';
import Counter from "../components/Count/Counter";


function Home({link, title, subtitle}){

    return (
        <>
            <Title title={title} subtitle={subtitle} />
            <Link link={link} />
            <div>
                <Counter
                    initial={1}
                    min={1}
                    max={20}
                />
            </div>


        </>

    )


}

export default Home;