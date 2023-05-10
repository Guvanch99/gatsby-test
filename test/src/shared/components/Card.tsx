import React, {FC, memo} from "react";
import {Link} from "gatsby";
import styled from "styled-components"
import {flex, fontFamily} from "../styles/mixins";
import { GatsbyImage, getImage, type ImageDataLike, type IGatsbyImageData } from "gatsby-plugin-image"

const WrapperStyled = styled(Link)`
 &&{
   ${flex({})};
   flex-direction: column;
   border: 1px solid ${({theme})=>theme.colors.grey300};
   border-radius: 10px;
 }
`

const GatsbyImageStyled=styled(GatsbyImage)`
  object-fit: contain;
`

const SectionStyled=styled.section`
  padding: 10px;
`

const TitleStyled=styled.p`
  ${fontFamily('Inter')};
  font-size: 18px;
  line-height: 24px;
  color: ${({theme})=>theme.colors.secondary};
  font-weight: 500;
  margin-bottom: 10px;
`

const PriceStyled=styled.p`
  ${fontFamily('Inter')};
  font-size: 16px;
  line-height: 20px;
  color: ${({theme})=>theme.colors.secondary};
`

type TProps={
  id:string
  image: string
  name: string
  price: string
}
const Card:FC<TProps> = ({image:url, price, name, id})=>(
  <WrapperStyled to={`/product-detail/${id}`}>
    <GatsbyImageStyled
      image={getImage(url as unknown as ImageDataLike) as IGatsbyImageData}
      alt={name}
    />
    <SectionStyled>
      <TitleStyled>Name:{name}</TitleStyled>
      <PriceStyled>Price: {price}</PriceStyled>
    </SectionStyled>
  </WrapperStyled>
)

export default Card
