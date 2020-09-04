import React, { useContext, useState } from 'react';


export const cartContext = React.createContext(0);


export const useCarteContext = () => useContext(cartContext);

export default function CacheProvider({ defaultValue = [], children }) {
    const [ cache, setCache ] = useState(defaultValue);

    function getFromCache(id) {
        return caches.find( obj => obj.id === id);
    }

    function isInCache(id) {
        return id === undefined ? undefined : getFromCache !== undefined;
    }

    function addToCache(obj) {
        if (isInCache(obj && obj.id)){
            console.log('Wont-t add existing obj to cache');
            return;
        }
        
        setCache([ ...cache, obj ]);
    }

    return <cartContext.Provider value={{ cache, addToCache, isInCache, cacheSize: cache.length}}>
        {children}
    </cartContext.Provider>
}

