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

    function price(){
        return cache.reduce((prev, next) =>
        (prev + (next.item.price * next.total)), 0)
    }

    function deleteElement(id) {
        if (isInCache(id)) {
            cache.filter( e => e.id !== id)
        }
    }

    return <cartContext.Provider value={{ cache, price,addToCache, isInCache, cacheSize: cache.length, cleanCache, deleteElement }}>
        {children}
    </cartContext.Provider>
}

