import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useLocationChanged = () => {
    const location = useLocation();
    const [locationIsChanged, setLocationIsChanged] = useState(false);
    const [previousLocation, setPreviousLocation] = useState<typeof location | null>(null);

    useEffect(() => {
        if (previousLocation && location !== previousLocation) {
            setLocationIsChanged(true);
        }
        
        setPreviousLocation(location);

        return () => {
            setPreviousLocation(null);
        };
    }, [location, previousLocation]);

    return { locationIsChanged };
};

export default useLocationChanged;