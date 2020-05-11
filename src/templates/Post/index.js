import React from 'react';

import { graphql } from 'gatsby';

import SEO from '../../components/SEO';

import { Container } from './styles';

const Post = ({ data }) => {
  return <div>
    <SEO title={data.post.title}/>
    <Container>
      post com o slug {data.post.slug}
    </Container>
  </div>;
}

export const query = graphql`
  query GetSinglePost($slug: String) {
    post: contentfulPost(slug: { eq: $slug }) {
      author
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