import { useState, useEffect } from 'react';

const useFontsProgress = (): number => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (!document.fonts) {
            setProgress(100);
            return;
        }

        setProgress(10);

        document.fonts.ready
            .then(() => {
                setTimeout(() => {
                    setProgress(100);                    
                }, 1000);
            })
            .catch(error => {
                console.error('Ошибка загрузки шрифтов:', error);
                setProgress(100);
            });

        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 90) return prev;
                return prev + 5;
            });
        }, 300);

        return () => clearInterval(interval);

    }, []);

    return progress;
};

export default useFontsProgress;