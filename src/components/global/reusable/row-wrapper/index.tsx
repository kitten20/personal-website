import { PropsWithChildren } from 'react';

import * as S from './index.style';

interface IRowWrapperProps {
    className?: string
}

function RowWrapper({children, className}: PropsWithChildren<IRowWrapperProps>) {
    return ( 
        <S.RowWrapper className={className} id='row-wrapper'>
            {children}
        </S.RowWrapper>
    );
}

export default RowWrapper;