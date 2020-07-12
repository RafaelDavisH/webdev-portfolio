/** @jsx jsx */
import { jsx } from "theme-ui";
import { Heading } from "@theme-ui/components";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import { Helmet } from "react-helmet";
import Layout from "./layout";
import ItemTags from "./item-tags";
import SEO from "./seo";
import { format } from "date-fns";
import getShareImage from "@jlengstorf/get-share-image";

type PostProps = {
  data: {
    post: {
      slug: string;
      title: string;
      date: string;
      tags?: {
        name: string;
        slug: string;
      }[];
      description?: string;
      body: string;
      excerpt: string;
      timeToRead: number;
      banner?: {
        childImageSharp: {
          resize: {
            src: string;
          };
        };
      };
    };
  };
};

const px = [`32px`, `16px`, `8px`, `4px`];
const shadow = px.map((v) => `rgba(0, 0, 0, 0.15) 0px ${v} ${v} 0px`);

const Post = ({ data: { post } }: PostProps) => {
  const socialImage = getShareImage({
    title: post.title,
    tagline: post.tags
      .map((tag) => `#${tag.name.split(" ").join("")}`)
      .join(" "),
    cloudName: "rafaeldavish",
    imagePublicID: "Frame_4_3x_kutirc.png",
    titlefont: "futura",
    titleExtraConfig: "_bold",
    textColor: "232129",
  });

  return (
    <Layout>
      {/* <SEO
        title={post.title}
        description={post.description ? post.description : post.excerpt}
        image={socialImage}
      /> */}
      <Helmet>
        <title>{post.title}</title>
        <meta name={post.description} content={post.excerpt} />
        <meta name="image" content={socialImage} />

        {/* OpenGraph tags */}
        <meta
          property="og:url"
          content={`https://rafaeldavis.dev${post.slug}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={socialImage} />

        {/* Twitter Card tags */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://rafaeldavis.dev" />
        <meta property="twitter:creator" content="@rafaeldavish" />
      </Helmet>
      <Heading variant="h2" as="h2">
        {post.title}
      </Heading>
      <p
        sx={{
          color: `secondary`,
          mt: 3,
          a: { color: `secondary` },
          fontSize: [1, 1, 2],
        }}
      >
        <time>{post.date}</time>
        {post.tags && (
          <React.Fragment>
            {` — `}
            <ItemTags tags={post.tags} />
          </React.Fragment>
        )}
        {` — `}
        <span>{post.timeToRead} min read</span>
      </p>
      <section
        sx={{
          my: 5,
          ".gatsby-resp-image-wrapper": {
            my: [4, 4, 5],
            boxShadow: shadow.join(`, `),
          },
        }}
      >
        <MDXRenderer>{post.body}</MDXRenderer>
      </section>
    </Layout>
  );
};

export default Post;
