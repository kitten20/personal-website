import { useState, useEffect } from 'react';

interface IUseFontsProgressReturn {
    inPercents: number;
    hasWindowBeenLoaded: boolean
}

const useWindowLoadingProgress = (): IUseFontsProgressReturn => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setProgress(5);

        if (document.readyState === 'complete') {
            setProgress(100);
            return;
        }

        const progressInterval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 95) return prev;
                return prev + Math.random() * 10;
            });
        }, 200);

        const handleLoad = () => {
            clearInterval(progressInterval);
            setTimeout(() => {
                setProgress(100);
            }, 300);
        };

        window.addEventListener('load', handleLoad);
        
        return () => {
            clearInterval(progressInterval);
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    return { inPercents: progress, hasWindowBeenLoaded: progress === 100 };
};

export default useWindowLoadingProgress;