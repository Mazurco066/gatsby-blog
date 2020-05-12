import Img from 'gatsby-image';
import React from 'react';
import Zoom from 'react-reveal/Zoom';

import { graphql, Link } from 'gatsby';

import SEO from '../components/SEO';

import star from '../images/star.svg';

import { 
  Container,
  DisplayAuthor,
  DisplayContainer,
  DisplayImg,
  DisplayTitle,
  DisplayStar,
  DisplayStarring,
  PostAuthor,
  PostCategory,
  PostContainer,
  PostItem,
  PostTitle
} from './styles';

const IndexPage = ({ data }) => {
  const { posts: { nodes } } = data;
  const latest = nodes.length ? nodes[0] : null
  return <div>
    <SEO title="Blog"/>
    <Zoom>
      <DisplayContainer>
        <DisplayImg>
          <Img style={{maxHeight: '100%'}} fluid={latest.thumb.fluid} />
        </DisplayImg>
        <DisplayStarring><DisplayStar src={star} /> Ultima Postagem</DisplayStarring>
        <DisplayTitle>{latest.title}</DisplayTitle>
        <DisplayAuthor>
          por <strong>{latest.author}</strong> em { new Date(latest.publishDate).toLocaleDateString('pt-br') }
        </DisplayAuthor>
      </DisplayContainer>
    </Zoom>
    <Zoom>
      <Container overlap>
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
      </Container>
    </Zoom>
  </div>
};

export const query = graphql`
  {
    posts: allContentfulPost(sort: {fields: publishDate, order: DESC}) {
      nodes {
        author
        thumb {
          fluid {
            ...GatsbyContentfulFluid,
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

export default IndexPage;
