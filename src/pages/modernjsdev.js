import React from 'react';
import { graphql } from 'gatsby';
import { Flex } from "@theme-ui/components";
import Layout from '../../src/components/layout'
import styled from 'styled-components'


const YoutubeImg = styled.img`
    width: 350px;
    @media (min-width: 768px) {
        width: 600px;
    }
`
const PlaylistTitle = styled.h1`
    font-size: 26px;
    @media (min-width: 768px) {
        font-size: 46px;
    }
`

const PublishedOn = styled.p`
    margin: 0;
    font-size: 12px;
    @media (min-width: 768px) {
        font-size: 16px;
    }
`
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
                    gap: 4,
                }}
            >
            <PlaylistTitle>
                <a href="https://www.youtube.com/watch?v=YeFqkdMAd_M&list=PLmA1GhLZ8HStjoE9zzjFoQsVrQTzj4Iba"
                    alt="Beginner's Series on Build with Google Maps API"
                >
                    Beginner's Series
                </a>
            </PlaylistTitle>
            {data.allYoutubeVideo.edges.map(({ node }) => (
                <Flex
                    sx={{
                        // variant: `dividers.bottom`,
                        // alignItems: `center`,
                        justifyContent: `center`,
                        mt: 3,
                        flexFlow: `column`,
                        flex: `1 1 auto`

                    }}
                    key={node.videoId}
                >
                    <a href={`${baseurl}${node.videoId}`}>
                        <YoutubeImg
                        src={node.thumbnail.url} 
                        alt={node.title}
                        />
                    </a>
                    <PublishedOn>
                        Published on:{` `}
                        <em> {node.publishedAt}</em>
                    </PublishedOn>
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
                    publishedAt(formatString: "MMMM DD, YYYY")
                }
            }
        }
    }
`