import * as S from './index.styles';

interface IContactButtonProps {
    href: string;
    imgSrc: string;
}

function ContactButton({ href, imgSrc }: IContactButtonProps) {
    return (
        <S.ContactsButtonLinkLayer
            href={href}
            target="_blank"
            draggable={false}
        >
            <S.ContactButton
                primary
            >
                <img
                    src={imgSrc} alt={imgSrc} draggable={false}
                />
            </S.ContactButton>
        </S.ContactsButtonLinkLayer>
    );
}

export { ContactButton };