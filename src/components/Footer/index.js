import React from 'react';

import { useStaticQuery, graphql, Link } from 'gatsby';

import {
  Container,
  FooterAuthor,
  FooterAuthorCard,
  FooterAuthorImg,
  FooterAuthorName,
  FooterContact,
  FooterContent,
  FooterCopyright,
  FooterCopyrightText,
  FooterLinks,
  FooterNavigation,
  FooterNavigationLink,
  FooterSectionTitle,
  FooterSubtitle,
  GatsbyImg,
  GatsbyLink,
  GatsbyLinks,
  MainFooter
} from './styles';

import avatar from '../../images/me.png';
import gLogo from '../../images/gatsby-logo.png';
import rLogo from '../../images/react-logo.png';

export default function Footer() {
  const data = useStaticQuery(graphql`
    query footerQuery {
      categories: allContentfulCategory(sort: {fields: title, order: ASC}) {
        nodes {
          id
          title
          slug 
        }
      }
      site {
        siteMetadata {
          email1
          email2
        }
      }
    }
  `);
  const { categories: { nodes } } = data;  
  return (
    <MainFooter>
      <Container>
        <FooterContent>
          <FooterAuthor>
            <FooterSectionTitle>Autor</FooterSectionTitle>
            <FooterSubtitle>Blog desenvolvido por:</FooterSubtitle>
            <FooterAuthorCard>
              <FooterAuthorImg src={avatar} alt="author"/>
              <FooterAuthorName>Gabriel Mazurco</FooterAuthorName>
            </FooterAuthorCard>
            <FooterSubtitle>Utilizando as tecnologias:</FooterSubtitle>
            <GatsbyLinks>
              <GatsbyLink href="https://www.gatsbyjs.org/" target="_blank">
                <GatsbyImg src={gLogo} alt="Gatsby logo"/>
              </GatsbyLink>
              <GatsbyLink href="https://pt-br.reactjs.org/" target="_blank">
                <GatsbyImg src={rLogo} alt="Gatsby logo"/>
              </GatsbyLink>
            </GatsbyLinks>
          </FooterAuthor>
          <FooterLinks>
            <FooterSectionTitle>Contato</FooterSectionTitle>
            <FooterContact>{data.site.siteMetadata.email1}</FooterContact>
            <FooterContact>{data.site.siteMetadata.email2}</FooterContact>
          </FooterLinks>
          <FooterNavigation>
            <FooterSectionTitle>Categorias</FooterSectionTitle>
            { nodes.map(n => (
              <Link to={`/categories/${n.slug}`} key={n.id}>
                <FooterNavigationLink >
                { n.title }
              </FooterNavigationLink>
              </Link>
              
            ))}
          </FooterNavigation>
        </FooterContent>
      </Container>
      <FooterCopyright>
        <Container>
          <FooterCopyrightText>
            © {new Date().getFullYear()}, Gabriel Mazurco
          </FooterCopyrightText>
        </Container>
      </FooterCopyright>
    </MainFooter>
  );
}
