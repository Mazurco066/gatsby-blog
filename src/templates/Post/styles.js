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

export const ArticleContainer = styled.div`
  width: 100%;
  max-width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 576px) { max-width: 540px; }
  @media (min-width: 768px) { max-width: 700px; }
`;

export const FeaturedImage = styled.div``;

export const PostArticle = styled.article``;

export const EmbeddedImage = styled.img``;

export const EmbeddedArticle = styled.div``;