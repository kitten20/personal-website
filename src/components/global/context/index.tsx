import { useState, useEffect, createContext, PropsWithChildren } from 'react';

import { useLocation } from 'react-router-dom';

export interface IContext  {
    news: {
        date: string;
        info: string;
        tag?: string;
    }[],
    locationIsChanged: boolean
}

const contextBasicData: IContext = {
    news: [],
    locationIsChanged: false
};

export const Context = createContext(contextBasicData);

export default function ContextProvider({children}: PropsWithChildren) {
    const location = useLocation();
    const [locationIsChanged, setLocationIsChanged] = useState(false);
    const [previousLocation, setPreviousLocation] = useState<typeof location | null>(null);
    const [news, setNews] = useState<IContext['news']>([]);

    useEffect(() => {
        fetch('server/news.json').then(res => res.json()).then(i => setNews(i.news));
    }, []);

    useEffect(() => {
        if (previousLocation && location !== previousLocation) {
            setLocationIsChanged(true);
        }
        
        setPreviousLocation(location);

        return () => {
            setPreviousLocation(null);
        };
    }, [location, previousLocation]);

    return (
        <Context.Provider value={{
            news,
            locationIsChanged
        }}>
            {children}
        </Context.Provider>
    );
}