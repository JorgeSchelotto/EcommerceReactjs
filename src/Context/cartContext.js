import React, { useContext, useState } from 'react';


export const cartContext = React.createContext([]);


export const useCartContext = () => useContext(cartContext);

export function CacheProvider({ defaultValue = [], children }) {
    const [cache, setCache] = useState(defaultValue);

    function getFromCache(id) {
        return cache.find(obj => obj.id === id);
    }

    function isInCache(id) {
        return id === undefined ? undefined : getFromCache !== undefined;
    }

    function addToCache(obj) {
        const newItem = [...cache, obj];
        setCache(newItem);
    }

    function cleanCache() {
        setCache([]);
    }

    return <cartContext.Provider value={{ cache, addToCache, isInCache, cacheSize: cache.length, cleanCache }}>
        {children}
    </cartContext.Provider>
}

