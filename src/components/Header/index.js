import Img from 'gatsby-image';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useStaticQuery, graphql, Link } from 'gatsby';

import bars from '../../images/bars.svg';
import close from '../../images/close.svg';

import {
  Container,
  CustomHeader,
  Drawer,
  DrawerButton,
  DrawerButtonIcon,
  DrawerItem,
  DrawerItemsContainer,
  DrawerTitle,
  DrawerTitleContainer,
  HeaderAvatar,
  HeaderAvatarImage,
  HeaderAvatarName,
  HeaderBlog,
  HeaderCetegories,
  HeaderContainer,
  HeaderLink
} from './styles';

function Header({ siteTitle }) {
  const data = useStaticQuery(graphql`
  {
    categories: allContentfulCategory(sort: {fields: title, order: ASC}) {
      nodes { id, title, slug }
    }
    file(name: {eq: "me"}) {
      childImageSharp {
        fixed(width:50, height:50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }`);
  const { categories: { nodes }, file } = data;
  const [ isDrawerOpened, setDrawerOpenState ] = useState(false);

  return (
    <CustomHeader>  
      <Container>
        <HeaderContainer>
          <HeaderAvatar>
            <Link to={'/'}>
              <HeaderAvatarImage>
                <Img fixed={file.childImageSharp.fixed} />
              </HeaderAvatarImage>
            </Link>
            <Link to={'/'}>
              <HeaderAvatarName>{siteTitle}</HeaderAvatarName>
            </Link>
            <Link to={'/'}>
              <HeaderBlog>Blog</HeaderBlog>
            </Link>
          </HeaderAvatar>
          <HeaderCetegories>
            { nodes.map(n => (
              <Link to={`/categories/${n.slug}`} key={n.id}>
                <HeaderLink>{n.title}</HeaderLink>
              </Link>
            )) }
          </HeaderCetegories>
          <DrawerButton onClick={() => setDrawerOpenState(!isDrawerOpened)}>
            <DrawerButtonIcon
              src={bars} 
              alt='Open Drawer'
            ></DrawerButtonIcon>
          </DrawerButton>
        </HeaderContainer>
      </Container>
      <Drawer opened={isDrawerOpened}>
        <DrawerTitleContainer>
          <DrawerTitle>Categorias</DrawerTitle>
          <DrawerButton onClick={() => setDrawerOpenState(!isDrawerOpened)}>
            <DrawerButtonIcon src={close} alt='Open Drawer'/>
          </DrawerButton>
        </DrawerTitleContainer>
        <DrawerItemsContainer>
          <Link to={'/'}>
            <DrawerItem onClick={() => { setDrawerOpenState(false) }}>Home</DrawerItem>
          </Link>
          { nodes.map(n => (
            <Link to={`/categories/${n.slug}`} key={n.id}>
              <DrawerItem onClick={() => { setDrawerOpenState(false) }}>{n.title}</DrawerItem>
            </Link>
          ))}
        </DrawerItemsContainer>
      </Drawer>
    </CustomHeader>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;