import { PropsWithChildren } from 'react';
import { Link as LinkRouter, LinkProps } from 'react-router-dom';

const handleClick = () => document.getElementById('row-wrapper')?.scrollIntoView(({ behavior: 'smooth', block: 'nearest' }));

function Link({children, ...linkProps}: PropsWithChildren<LinkProps>) {
    return ( <LinkRouter {...linkProps} onClick={handleClick}>{children}</LinkRouter> );
}

export default Link;