import React from 'react';
import { graphql } from 'gatsby';
import { tailwind } from "@theme-ui/presets"
import { Flex } from "@theme-ui/components";
import Layout from '../../src/components/layout'

export default ({ data }) => {
    const baseurl = 'https://www.youtube.com/watch?v=';
    console.log(data)
    return  (
        <Layout>
            <Flex 
                sx={{
                    width: ['100%', '100%', '100%'],
                    alignItems: `center`, 
                    justifyContent: `space-around`, 
                    flexDirection: `column`,
                }}
            >
            {data.allYoutubeVideo.edges.map(({ node }) => (
                <Flex
                    sx={{
                        variant: `dividers.bottom`,
                        alignItems: `center`,
                        justifyContent: `center`,
                        mt: 3,
                        flexFlow: `column`

                    }}
                    key={node.videoId}
                >
                    <h2
                        // sx={{
                        //     fontSize: [2, 3, 4]
                        // }}
                    >
                        {node.title}
                    </h2>
                    <a href={`${baseurl}${node.videoId}`}>
                        <img 
                        sx={{
                            boxShadow: `xy`
                        }}
                        src={node.thumbnail.url} 
                        alt={node.title}width='300'

                        />
                    </a>
                </Flex>
            ))}
            </Flex>
        </Layout>
    )
}

export const query = graphql`
    query {
        allYoutubeVideo {
            edges {
                node {
                    videoId
                    title
                    description
                    thumbnail {
                        url
                    }
                }
            }
        }
    }
`