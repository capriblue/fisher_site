import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react';
import Image from "next/image"
import picture from "../../eigenA/resnet18_fp32/nodamping/epoch0/conv1.png"
const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}

const MyImage = (props) => {
  return (
    <Image
      src={picture}
      alt="figure"
      width={500}
      height={500}
    />
  )
}
export default MyImage;