import React from 'react';
import Logo from '../components/logo'
import Title from '../components/title'
import Link from '../components/link'
import logo from '../logo.svg';


function Home({link, title, subtitle}){

    return (
        <>
        {/* <Logo logo={logo} /> */}
        <Title title={title} subtitle={subtitle} />
        <Link link={link} />
        </>

    )


}

export default Home;