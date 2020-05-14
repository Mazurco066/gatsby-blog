// Styled components
import styled from 'styled-components';

// Container
export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  ${props => props.overlap ? 'margin-top: -3rem' : ''};
  @media (min-width: 576px) { max-width: 540px; }
  @media (min-width: 768px) { max-width: 720px; }
  @media (min-width: 992px) { max-width: 960px; }
  @media (min-width: 1280px) { max-width: 1200px; }
`;

export const DisplayContainer = styled.div`
  position: relative;
  z-index: 1;
  background-color: transparent;
  width: 100%;
  max-width: 100%;
  min-height: calc(100vh - 160px - 85px);
  padding: 0 12% 10vh 50%;  
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 991px) and (min-width: 768px) { padding: 60px 20% 60px 123px; }
  @media (max-width: 767px) and (min-width: 480px) { padding: 60px 20% 60px 85px; }
  @media (max-width: 479px) { padding: 30px 38px; }
`;

export const DisplayImg = styled.div`
  ${props => props.color ? `background-color: #${props.color}!important` : 'background-color: #CCCCCC!important'};
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 85px;
  overflow: hidden;
  width: calc(50% - 130px);
  border-radius: 8px;
  background: no-repeat center center;
  background-size: cover;
  overflow: hidden;
  @media (max-width: 1399px) and (min-width: 992px) {
    left: 0;
    width: calc(50% - 45px);
    border-radius: 0 5px 5px 0;
  }
  @media (max-width: 991px) {
    border-radius: 0;
    width: 100%;
    left: 0;
  }
`;

export const DisplayStarring = styled.p`
  background-color: ${props => props.theme.secondary};
  border-radius: 3rem;
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 0.25rem 0.75rem;
  margin-bottom: 3rem;
  @media (max-width: 991px) {
    margin-bottom: 1rem;
  }
`;

export const DisplayTitle = styled.h1`
  color: ${props => props.theme.secondary};
  margin-bottom: 2rem;
  @media (max-width: 991px) {
    color: #ffffff;
    margin-bottom: 1rem;
  }
`;

export const DisplayAuthor = styled.p`
  color: ${props => props.theme.secondary};
  font-size: 1rem;
  @media (max-width: 991px) {
    color: #ffffff;
    margin-bottom: 1rem;
  }
`;

export const PostContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  margin-bottom: 2rem;
  @media (min-width: 577px) and (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const PostItem = styled.div`
  background-color: ${props => props.theme.primary};
  background-image: ${props => `url(${props.imgUrl})`};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100%;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  padding: 2rem;
  padding-bottom: 3rem;
  min-height: 370px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 2;
  &:hover {
    transform: translateY(-0.5rem);
  }
  transition: 0.3s all;
`;

export const PostTitle = styled.h1`
  color: #FFFFFF;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

export const PostAuthor = styled.p`
  color: #FFFFFF;
  font-size: 1rem;
`;

export const PostCategory = styled.span`
  color: #FFFFFF;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 2rem;
  justify-self: flex-end;
  position: absolute;
  bottom: 2rem;
  left: 1.5rem;
  padding: 0 0.5rem;
  &:hover {
    background-color: #FFFFFF;
    color: ${props => props.theme.primary};
  }
  transition: 0.3s all;
`;

export const NoPosts = styled.p`
  text-align: center;
  font-weight: 600;
  margin-bottom: 2rem;
`;