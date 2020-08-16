import React, {useState, useEffect} from 'react';
import Title from '../components/title';
import Link from '../components/link';
import Counter from "../components/Count/Counter";


function Home({link, title, subtitle}){
    const [total, setTotal] = useState(0);

    useEffect(() => {
        if (total > 1) {
          console.log('Threshold of over 1 reached.');
        } else {
          console.log('No threshold reached.');
        }
      }, [total]);


    function onAddTotal(count){
        setTotal(total + count)
    }

    return (
        <>
            <Title title={title} subtitle={subtitle} />
            <Link link={link} />
            <div>
                <Counter
                    initial={1}
                    min={1}
                    max={20}
                    onAdd={onAddTotal}
                />
            </div>
            <p>{total}</p>


        </>

    )


}

export default Home;