import { useState, useEffect } from 'react';

const useWindowProgress = (): number => {
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

    return progress;
};

export default useWindowProgress;