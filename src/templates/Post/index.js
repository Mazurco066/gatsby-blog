import Img from 'gatsby-image';
import React from 'react';
import Zoom from 'react-reveal/Zoom';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { MARKS } from '@contentful/rich-text-types';

import { graphql, Link } from 'gatsby';

import SEO from '../../components/SEO';

import {
  ArticleAuthor,
  ArticleCategory,
  ArticleContainer,
  ArticleSubtitle,
  ArticleTitle,
  BottomAuthorContainer,
  BottomAuthorImg,
  BottomAuthorInfo,
  BottomAuthorName,
  BottomAuthorRole,
  BottomAuthorWritten,
  Container,
  EmbeddedArticle,
  EmbeddedImage,
  FeaturedImage,
  PostArticle
} from './styles';

const Post = ({ data }) => {
  const { file, post: { author, category, content, image, publishDate, title, subtitle } } = data;
  const options = {
    renderNode: {
      'embedded-asset-block': (node) => (
        <EmbeddedImage src={node.data.target.fields.file['en-US'].url} alt='Embedded Image'/>
      ),
      'embedded-entry-block': (node) => (
        <EmbeddedArticle></EmbeddedArticle>
      )
    },
    renderMark: {
      [MARKS.CODE]: text => {
        return <code><pre key={`${text}-key`}>{text}</pre></code>;
      },
    }
  }
  return <div>
    <SEO title={data.post.title}/>
    <Zoom>
      <Container>
        <ArticleContainer paddingTop>
          <Link to={`categories/${category.slug}`}>
            <ArticleCategory>{category.title}</ArticleCategory>
          </Link>
          <ArticleTitle>{title}</ArticleTitle>
          <ArticleSubtitle>{subtitle}</ArticleSubtitle>
          <ArticleAuthor>por <strong>{author}</strong> as <strong>{publishDate}</strong></ArticleAuthor>
        </ArticleContainer>
      </Container>
      <FeaturedImage>
        <Img fluid={image.fluid} />
      </FeaturedImage>
    </Zoom>
    <Container>
      <ArticleContainer borderBottom className='article-content'>
        <PostArticle>
          { documentToReactComponents(content.json, options) }
        </PostArticle>
      </ArticleContainer>
      <BottomAuthorContainer>
        <BottomAuthorImg>
          <Img fixed={file.childImageSharp.fixed} />
        </BottomAuthorImg>
        <BottomAuthorInfo>
          <BottomAuthorWritten>Escrito por</BottomAuthorWritten>
          <BottomAuthorName>Gabriel Mazurco</BottomAuthorName>
          <BottomAuthorRole>Desenvolvedor Fullstack Javascript</BottomAuthorRole>
        </BottomAuthorInfo>
      </BottomAuthorContainer>
    </Container>
  </div>;
}

export const query = graphql`
  query GetSinglePost($slug: String) {
    post: contentfulPost(slug: { eq: $slug }) {
      author
      content {
        json
      }
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
        id
        title
      }
      category {
        slug
        id
        title
      }
      publishDate(formatString:"DD/MM/YYYY")
      subtitle
      slug
      title
    }
    file(name: {eq: "me"}) {
      childImageSharp {
        fixed(width:80, height:80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Post;