import { PropsWithChildren } from 'react';
import { LinkProps } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function LinkAnchor({children, ...linkProps}: PropsWithChildren<LinkProps>) {
    return ( <HashLink {...linkProps} smooth>{children}</HashLink> );
}

export default LinkAnchor;