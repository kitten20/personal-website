import ContactButton from './contact-button';

import * as S from './index.styles';

import telegramIcon from 'assets/contact-icons/telegram.png';
import githubIcon from 'assets/contact-icons/github.png';
import linkedinIcon from 'assets/contact-icons/linkedin.png';
import soundcloudIcon from 'assets/contact-icons/soundcloud.png';
import discordIcon from 'assets/contact-icons/discord.png';

function ContactsModule() {
    return ( 
        <S.ContactsModule>
            <S.ContactsTitle>Where can you find me?</S.ContactsTitle>
            <S.ContactsButtons>
                <ContactButton
                    href='t.me/qMilly' imgSrc={telegramIcon}
                />
                <ContactButton
                    href='https://discordapp.com/users/426331342436040704' imgSrc={discordIcon}
                />
                <ContactButton
                    href='https://soundcloud.com/qrellyq/tracks' imgSrc={soundcloudIcon}
                />
                <ContactButton
                    href='https://github.com/kitten20' imgSrc={githubIcon}
                />
                <ContactButton
                    href='https://www.linkedin.com/in/daniil-ulyanov-175819374/' imgSrc={linkedinIcon}
                />
            </S.ContactsButtons>
        </S.ContactsModule>
    );
}

export { ContactsModule };