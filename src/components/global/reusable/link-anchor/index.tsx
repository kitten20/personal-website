import { PropsWithChildren, useEffect } from 'react';
import { LinkProps } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function LinkAnchor({children, ...linkProps}: PropsWithChildren<LinkProps>) {
    useEffect(() => {
        const { hash } = window.location;
        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) element.scrollIntoView();
        }
    }, []);

    return ( <HashLink {...linkProps} smooth>{children}</HashLink> );
}

export default LinkAnchor;