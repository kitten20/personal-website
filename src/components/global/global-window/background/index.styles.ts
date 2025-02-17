import styled from 'styled-components';

export const Stars = styled.div`
    width: 100vw;
    height: 100dvh;

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    overflow: hidden;
`;

export const Star = styled.div`
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    position: absolute;
    z-index: -10;

    background-image: radial-gradient(
        2px 2px at 50px 200px,
        #f97ee8,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(2px 2px at 40px 70px, #cc3d8b, rgba(0, 0, 0, 0)),
      radial-gradient(3px 4px at 120px 40px, #72a9e2, rgba(0, 0, 0, 0));
    background-repeat: repeat;
    background-size: 250px 250px;
    opacity: 0;
    animation: zoom 10s infinite;

  &:nth-child(2) {
    animation-delay: 1.3s;

    background-position: 10% 90%;
    background-image: radial-gradient(
        2px 2px at 50px 200px,
        #6c296a,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(2px 2px at 40px 70px, #da669a, rgba(0, 0, 0, 0)),
      radial-gradient(3px 4px at 120px 40px, #2a79a7, rgba(0, 0, 0, 0));
  }

  &:nth-child(3) {
    animation-delay: 2.6s;

    background-position: 20% 50%;
    background-size: 270px 500px;
    background-image: radial-gradient(
        2px 2px at 50px 200px,
        #8c4c83,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(2px 2px at 40px 70px, #f1cfb6, rgba(0, 0, 0, 0)),
      radial-gradient(3px 4px at 120px 40px, #40d5f7, rgba(0, 0, 0, 0));
  }

  &:nth-child(4) {
    animation-delay: 3.9s;

    background-position: 40% -80%;
    background-image: radial-gradient(
        2px 2px at 50px 200px,
        #97aac9,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(2px 2px at 40px 70px, #6c6697, rgba(0, 0, 0, 0)),
      radial-gradient(3px 4px at 120px 40px, #fbafcd, rgba(0, 0, 0, 0));
  }

  &:nth-child(5) {
    animation-delay: 5.2s;

    background-position: 90% -30%;
    background-image: radial-gradient(
        2px 2px at 50px 200px,
        #97aac9,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(2px 2px at 40px 70px, #6c6697, rgba(0, 0, 0, 0)),
      radial-gradient(3px 4px at 120px 40px, #fbafcd, rgba(0, 0, 0, 0));
  }

  &:nth-child(6) {
    animation-delay: 6.5s;

    background-position: 100% -50%;
    background-image: radial-gradient(
        2px 2px at 50px 200px,
        #97aac9,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(2px 2px at 40px 70px, #6c6697, rgba(0, 0, 0, 0)),
      radial-gradient(3px 4px at 120px 40px, #fbafcd, rgba(0, 0, 0, 0));
  }

  &:nth-child(7) {
    animation-delay: 7.8s;

    background-position: 120% -30%;
    background-image: radial-gradient(
        2px 2px at 50px 200px,
        #97aac9,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(2px 2px at 40px 70px, #6c6697, rgba(0, 0, 0, 0)),
      radial-gradient(3px 4px at 120px 40px, #fbafcd, rgba(0, 0, 0, 0));
  }

  @keyframes zoom {
    0% {
      opacity: 0;
      transform: scale(0.5);
      transform: rotate(5deg);
      animation-timing-function: ease-in;
    }

    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: scale(2.2);
    }
  }
`;