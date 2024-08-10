import { HTMLAttributes, PropsWithChildren } from 'react';

import * as S from './index.style';

function RowWrapper({children, ...props}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
    return ( 
        <S.RowWrapper {...props}>
            {children}
        </S.RowWrapper>
    );
}

export default RowWrapper;