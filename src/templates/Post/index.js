import React from 'react';
import Zoom from 'react-reveal/Zoom';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { graphql } from 'gatsby';

import SEO from '../../components/SEO';

import {
  ArticleContainer,
  Container,
  EmbeddedArticle,
  EmbeddedImage,
  FeaturedImage,
  PostArticle
} from './styles';

const Post = ({ data }) => {
  const { post: { content } } = data;
  const options = {
    renderNode: {
      'embedded-asset-block': (node) => (
        <EmbeddedImage src={node.data.target.fields.file['en-US'].url} alt='Embedded Image'/>
      ),
      'embedded-entry-block': (node) => (
        <EmbeddedArticle></EmbeddedArticle>
      )
    }
  }
  return <div>
    <SEO title={data.post.title}/>
    <Zoom>
      <Container>
        <ArticleContainer>

        </ArticleContainer>
      </Container>
      <FeaturedImage>
        image
      </FeaturedImage>
      <Container>
        <ArticleContainer className='article-content'>
          <PostArticle>
            { documentToReactComponents(content.json, options) }
          </PostArticle>
        </ArticleContainer>
      </Container>
    </Zoom>
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
      publishDate
      subtitle
      slug
      title
    }
  }
`

export default Post;