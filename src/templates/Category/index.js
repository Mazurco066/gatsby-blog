import Img from 'gatsby-image';
import React from 'react';
import Zoom from 'react-reveal/Zoom';

import { graphql, Link } from 'gatsby';

import SEO from '../../components/SEO';

import {
  Container,
  DisplayAuthor,
  DisplayContainer,
  DisplayImg,
  DisplayStarring,
  DisplayTitle,
  NoPosts,
  PostAuthor,
  PostCategory,
  PostContainer,
  PostItem,
  PostTitle
} from './styles';

const Category = ({ data }) => {
  const { posts: { nodes }, category } = data;
  return <div>
    <SEO title={data.category.title} />
    <Zoom>
      <DisplayContainer>
        <DisplayImg>
          <Img style={{maxHeight: '100%'}} fluid={category.image.fluid} />
        </DisplayImg>
        <DisplayStarring>Categoria</DisplayStarring>
        <DisplayTitle>{category.title}</DisplayTitle>
        <DisplayAuthor>{category.description}</DisplayAuthor>
      </DisplayContainer>
    </Zoom>
    <Zoom>
      <Container overlap={nodes.length}>
        <PostContainer>
          {nodes.map(p => (
            <Link to={`/posts/${p.slug}`} key={p.slug}>
              <PostItem imgUrl={p.thumb.fluid.src}>
                <PostTitle>{p.title}</PostTitle>
                <PostAuthor>
                  por <strong>{p.author}</strong> em { new Date(p.publishDate).toLocaleDateString('pt-br') }
                </PostAuthor>
                <Link to={`/categories/${p.category.slug}`}>
                  <PostCategory>
                    <small>{p.category.title}</small>
                  </PostCategory>
                </Link>
              </PostItem>
            </Link>
          ))}
        </PostContainer>
        { !nodes.length
          ? (<NoPosts>Essa categoria não possuí artigos no momento!</NoPosts>)
          : null
        }
      </Container>
    </Zoom>
  </div>;
}

export const query = graphql`
  query GetSingleCategory($slug: String) {
    category: contentfulCategory(slug: { eq: $slug }) {
      title
      slug
      description
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
    posts: allContentfulPost(sort: {fields: publishDate, order: DESC}, filter: {category: {slug: {eq: $slug}}}) {
      nodes {
        author
        thumb {
          fluid {
            src
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
        slug
        title
      }
    }
  }
`

export default Category;