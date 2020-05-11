import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 576px) { max-width: 540px; }
  @media (min-width: 768px) { max-width: 720px; }
  @media (min-width: 992px) { max-width: 960px; }
  @media (min-width: 1280px) { max-width: 1200px; }
`;

export const CustomHeader = styled.header`
  background-color: #212121;
  border-bottom: 1px solid #E0E0E0;
  min-height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 3;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderAvatar = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const HeaderAvatarImage = styled.img`
  max-width: 50px;
  object-fit: cover;
  border-radius: 15px;
  margin-right: 0.5rem;
`;

export const HeaderAvatarName = styled.span`
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #FFFFFF;
  @media (max-width: 576px) { display: none; }
`;

export const HeaderBlog = styled.span`
  font-size: 0.75rem;
  border: 2px solid #FFFFFF;
  border-radius: 4px;
  margin-left: 0.5rem;
  padding: 0.25rem;
  text-transform: uppercase;
  font-weight: 600;
  color: #FFFFFF;
  &:hover {
    color: ${props => props.theme.primary};
    border-color: ${props => props.theme.primary};
  }
`;

export const HeaderCetegories = styled.nav`
  
  @media (max-width:991px) {
    display: none;
  }
`;

export const HeaderLink = styled.p`
  display: inline-block;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  margin-right: 0.5rem!important;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.primary}
  }
  &:last-child {
    margin-right: 0;
  }
`;

export const Drawer = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  width: 0;
  ${props => props.opened && css`width: 100%;`}
  ${props => props.opened && css`border-left: 1px solid #E0E0E0;`}
  max-width: 300px;
  background-color: #303030;
  z-index: 10;
  transition: 0.5s all;
  @media (min-width:991px) { display: none; }
`;

export const DrawerButton = styled.div`
  max-width: 40px;
  max-height: 40px;
  border-radius: 20px;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #00000030;
  }
  @media (min-width:991px) { display: none; }
`;

export const DrawerButtonIcon = styled.img`
  max-width: 100%;
  object-fit: cover;
`;

export const DrawerTitleContainer = styled.div`
  width: 90%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  border-bottom: 1px solid #E0E0E0;
`;

export const DrawerTitle = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: #FFFFFF;
  text-transform: uppercase;
`;

export const DrawerItemsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  padding-top: 0.5rem;
`;

export const DrawerItem = styled.li`
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  color: #FFFFFF;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  &:hover {
    color: ${props => props.theme.secondary };
  }
`;