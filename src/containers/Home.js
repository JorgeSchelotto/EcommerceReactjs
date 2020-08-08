import React from 'react';
import Title from '../components/title'
import Link from '../components/link'


function Home({link, title, subtitle}){

    return (
        <>
        <Title title={title} subtitle={subtitle} />
        <Link link={link} />
        </>

    )


}

export default Home;