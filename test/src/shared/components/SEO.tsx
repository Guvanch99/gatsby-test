import Helmet from 'react-helmet'
import React, {FC} from "react";
import { graphql, useStaticQuery } from "gatsby";


const query=graphql`
{
  site{
    siteMetadata{
      description
      keywords
    }
   }
}
`

type TQueryData={
  site:{
    siteMetadata:{
      description:string
      keywords:string
    }
  }
}

type TProps={
  title:string
  description?:string
  keywords?:string
}

const SEO:FC<TProps>=({title, description, keywords})=>{
  const { site:{siteMetadata} }=useStaticQuery<TQueryData>(query)
  const helmetDescription=description || siteMetadata.description
  const helmetKeywords=keywords || siteMetadata.keywords
  return(
    <Helmet
      htmlAttributes={{lang:'en'}}
      title={title}
      meta={[
        {name:'description', content:helmetDescription},
        {name:'keywords', content:helmetKeywords}
      ]}
    />
  )
}

export default SEO


