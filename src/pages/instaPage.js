import React from 'react';
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby"
import {pulse, bounceIn }from 'react-animations'
import styled, { keyframes } from 'styled-components';
import Img from "gatsby-image"
import useSiteMetadata from "../hooks/use-site-metadata";
import replaceSlashes from "../utils/replaceSlashes";

import bgPattern from  '../images/bgPattern.png'

const pulseAnimation = keyframes`${pulse}`;

const PulseDiv = styled.div`
  animation: 1s infinite ${pulseAnimation};
`;


const extLinks = [
    {name: 'Portfolio', url: 'https://rafaeldavis.dev', emoji: '💼' },
    {name: 'GitHub', url: 'https://github.com/RafaelDavisH', emoji: '👨🏽‍💻' },
    {name: 'LinkedIn', url: 'https://www.linkedin.com/in/rafaeldavish/', emoji: '🧔🏽'},
    {name: 'Twitter', url: 'https://twitter.com/rafaeldavish', emoji: '👓' },
];

const LinksList = extLinks.map((link, key) => 
    <li className="text-yellow-500 hover:text-gray-900 rounded list-none text-center transition duration-500 ease-in-out bg-blue-500 hover:bg-red-500 transform hover:-translate-y-3 hover:scale-110 hover:shadow-lg py-6 px-10 my-4"><a className=" no-underline text-4xl font-bold font-mono " key={key} href={link.url}>{link.name}{" "}{link.emoji}</a></li>
);

const InstaPage = () => {
    const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "profile.JPG" }) {
        childImageSharp {

          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
            src
            srcSet
            base64
            aspectRatio
            sizes
          }
        }
      }
    }
  `)
    const { siteTitle, basePath } = useSiteMetadata();
    return (
        <div style={{backgroundImage: `url(${bgPattern})`}} className=" flex w-screen h-screen items-center justify-center flex-col gap-5">
            <div className="w-auto">
            <PulseDiv>
              <Link
                  className="font-bold text-5xl"
                  to={replaceSlashes(`/${basePath}`)}
                  aria-label={`${siteTitle} - HomePage`}
                  sx={{ color: `heading`, textDecoration: `none` }}
                  >
                  {/* <h1 className="text-4xl text-center font-bold text-gray-200">
                  </h1> */}
                  <Img className="rounded-full w-32 mx-auto" fluid={data.file.childImageSharp.fluid} alt="profile pic" />
                  <p className="text-base text-center text-yellow-500">Web Developer </p>
              </Link>
            </PulseDiv>
            {LinksList}
            </div>
        </div>
    );
};

export default InstaPage;