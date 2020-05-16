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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  ${props => props.paddingTop ? 'padding-top: 2.5rem' : ''};
  ${props => props.borderBottom ? 'border-bottom: 1px solid #CCCCCC' : ''};
  ${props => props.borderBottom ? 'margin-bottom: 1rem' : ''};
  @media (min-width: 576px) { max-width: 540px; }
  @media (min-width: 768px) { max-width: 700px; }
`;

export const ArticleCategory = styled.span`
  margin-bottom: 20px;
  background-color: ${props => props.theme.secondary};
  color: #ffffff;
  padding: 0 0.5rem;
  border-radius: 2rem;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: #CCCCCC;
    color: ${props => props.theme.secondary};
  }
  transition: 0.3s all;
`;

export const ArticleTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1.2;
  padding-top: 20px;
  margin-bottom: 1rem;
`;

export const ArticleSubtitle = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const ArticleAuthor = styled.span`
  font-size: 1rem;
`;

export const FeaturedImage = styled.div`
  max-width: 1920px;
  margin: 30px auto;
`;

export const BottomAuthorContainer = styled.div`
  width: 100%;
  max-width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1rem;
  @media (min-width: 576px) { max-width: 540px; }
  @media (min-width: 768px) { max-width: 700px; }
`;

export const BottomAuthorImg = styled.div`
  background-color: ${props => props.theme.primary};
  border-radius: 100%;
  margin-right: 1rem;
`;

export const BottomAuthorInfo = styled.div`
  flex-grow: 1;
`;

export const BottomAuthorWritten = styled.span`
  font-size: 0.875rem;
  color: #ABABAB;
`;

export const BottomAuthorName = styled.h4`
  font-size: 1.25rem;
  color: ${props => props.theme.secondary};
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
`;

export const BottomAuthorRole = styled.p`
  font-size: 1rem;
`;

export const PostArticle = styled.article``;

export const EmbeddedImage = styled.img`
  max-width: 100%;
  object-fit: cover;
`;

export const EmbeddedArticle = styled.div``;