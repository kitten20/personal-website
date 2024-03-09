import { useState, useEffect, createContext, PropsWithChildren } from 'react';

import { hooks } from 'global/reusable';

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
    const [news, setNews] = useState<IContext['news']>([]);
    const { locationIsChanged } = hooks.useLocationChanged();

    useEffect(() => {
        fetch('server/news.json').then(res => res.json()).then(i => setNews(i.news));
    }, []);

    return (
        <Context.Provider value={{
            news,
            locationIsChanged
        }}>
            {children}
        </Context.Provider>
    );
}