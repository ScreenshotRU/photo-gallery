import styled, { css, keyframes } from 'styled-components';

const leftBtn = css`
  left: 0;
`;

const rightBtn = css`
  right: 0;
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  background-color: #414057;
  height: 300px;
  &:nth-child(4n + 2) {
    background-color: #201f30;
  }
  &:nth-child(4n + 3) {
    background-color: #201f30;
  }
`;

export const FullItem = styled(Item)`
  height: unset;
  cursor: pointer;
`;

export const FullImage = styled.img`
  position: relative;
  width: 100%;
  max-width: unset;
`;

export const AlbumLogo = styled.img`
  padding: 5px;
  filter: invert(1);
  max-width: 50px;
`;

export const Text = styled.p`
  color: #f5f5f5;
`;

export const LoaderWrap = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 40%;
  left: 0;
  overflow: auto;
  display: flex;
  justify-content: center;
`;

export const DualRing = styled.div`
  width: 80px;
  height: 80px;
  &:after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    color: #f5f5f5;
    border-radius: 50%;
    border: 6px solid #f5f5f5 ;
    border-color: #f5f5f5 transparent #f5f5f5 transparent;
    animation: ${rotate} 1.2s linear infinite;
  }
`;

export const PopUpWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export const IconClose = styled.span`
  color: #f5f5f5;
  cursor: pointer;
  position: fixed;
  right: 5%;
  top: calc(100vh - 92vh - 33px);
  background: #2d2c40;
  width: 36px;
  height: 36px;
  line-height: 34px;
  text-align: center;
  border: 2px solid #f5f5f5;
`;

export const ScrollContainer = styled.div`
  overflow: hidden;
  width: ${(props) => props.width}px;
  display: flex;
  text-align: center;
  margin: 0 auto;
  align-items: center;
`;

export const SliderWrap = styled.div`
  display: flex;
  white-space: nowrap;
  transform: translateX(${(props) => props.translateX}px);
  transition: 0.3s;
  & > div {
    margin-right: 15px;
  }
`;

export const Card = styled.div`
  position: relative;
  width: 100vh;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    max-width: 600px;
    max-height: 600px;
  }
  @media (max-width: 576px) {
    max-width: 320px;
    max-height: 320px;
  }
  & > img {
    display: flex;
    width: 100%;
    height: 100%;
  }
  & > span {
    color: #f5f5f5;
    bottom: 0;
    background: rgb(0, 0, 0, 0.6);
    width: 100%;
    position: absolute;
    white-space: pre-wrap;
    overflow: hidden;
    padding: 20px 0;
    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
`;

export const NavButton = styled.button`
  width: 40px;
  height: 40px;
  cursor: pointer;
  background: #2d2c40;
  color: #f5f5f5;
  border: 2px solid #f5f5f5;
  position: absolute;
  ${(props) => (props.position === 'left' ? leftBtn : rightBtn)};
  top: 50%;
  margin: 0 20px;
  z-index: 2;
`;

export const BackButton = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
  width: 100px;
  height: 30px;
  background: #2d2c3f;
  position: fixed;
  color: #f5f5f5;
  z-index: 2;
  border: 2px solid #f5f5f5;
  bottom: 20px;
  left: 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
   background: #403f55; 
  }
  &:active {
    opacity: 1;
    color: #daa520;
  }
  & > span {
    line-height: 30px;
    font-family: 'Montserrat', sans-serif;
    font-size: 17px;
    font-weight: bold;
  }
`;
