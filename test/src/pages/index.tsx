import * as React from "react"
import {graphql, PageProps} from "gatsby"
import MainLayout from "../layout/mainLayout/components/MainLayout";
import styled from "styled-components"
import Card from "../shared/components/Card";
import SEO from "../shared/components/SEO";

const WrapperStyled=styled.article`
  display: grid;
  justify-content: center;
  height: 100%;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(200px, 376px));
  grid-gap:16px ;
`

type TProps={
  allProduct:{
    edges:{
     node:{
       image: string
       id: string
       name: string
       price: string
     }
    }[]
  }
}
const IndexPage = ({data:{allProduct:{edges}}}:PageProps<TProps>) => {
  return (
    <>
      <SEO title='Products Home Page' description='here you can see all our products'/>
      <MainLayout>
        <WrapperStyled>
          {
            edges.map(({node:{id, name, price, image}})=>(
              <Card image={image} name={name} price={price} id={id} key={id}/>
            ))
          }
        </WrapperStyled>
      </MainLayout>
    </>
  )
}
export const query = graphql`
  {
  allProduct {
    edges {
      node {
        id
        name
        price
        image {
          childImageSharp {
            gatsbyImageData(
              width: 250
              height: 250
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
}
`

export default IndexPage
