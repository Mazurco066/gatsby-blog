import React from 'react';

import { graphql } from 'gatsby';

import SEO from '../../components/SEO';

import { Container } from './styles';

const Post = ({ data }) => {
  return <div>
    <SEO title={data.category.title} />
    <Container>
      categoria com o slug {data.category.slug}
    </Container>
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
  }
`

export default Post;