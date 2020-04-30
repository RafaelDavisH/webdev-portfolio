import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../src/components/layout'

export default ({ data }) => {
    const baseurl = 'https://www.youtube.com/watch?v=';
    console.log(data)
    return  (
        <Layout>
            <div>
            <h1>Building with Google Maps API</h1>
            {data.allYoutubeVideo.edges.map(({ node }) => (
                <div key={node.videoId}>
                    <h2>{node.title}</h2>
                    <a href={`${baseurl}${node.videoId}`}>
                        <img src={node.thumbnail.url} alt={node.title}width='300'/>
                    </a>
                </div>
            ))}
            </div>
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