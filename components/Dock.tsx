// @ts-nocheck

import React, { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import useRaf from "@rooks/use-raf";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import chrome from "../public/logos/chrome.svg";
import docs from "../public/logos/docs.svg";
import excel from "../public/logos/excel.svg";
import gmail from "../public/logos/gmail.svg";
import photoshop from "../public/logos/photoshop.svg";
import powerpoint from "../public/logos/image 74.svg";
import safari from "../public/logos/image 71.svg";
import slack from "../public/logos/image 72.svg";
import spotify from "../public/logos/image 73.svg";
import steam from "../public/logos/steam.svg";
import vlc from "../public/logos/image 75.svg";

import home from "../public/logos/home.svg";
import projects from "../public/logos/projects.svg";
import experiments from "../public/logos/experiments.svg";
import blog from "../public/logos/blog.svg";
import about from "../public/logos/about.svg";

const images = [
  // chrome,
  // docs,
  // excel,
  // gmail,
  // photoshop,
  // powerpoint,
  // safari,
  // slack,
  // spotify,
  // vlc,
  [home, "/"],
  [projects, "projects"],
  [experiments, "experiments"],
  [blog, "blog"],
  [about, "about"],
];

export default function Dock() {
  const mouseX = useMotionValue(null);

  return (
    <>
      <div className="dock">
        <div
          className="icons"
          onMouseMove={(event) => mouseX.set(event.nativeEvent.x)}
          onMouseLeave={() => mouseX.set(null)}
        >
          {images.map((image, index) => (
            <Img src={image[0]} key={index} mouseX={mouseX} link={image[1]} />
          ))}
        </div>
      </div>
    </>
  );
}

const baseWidth = 60;
const distanceLimit = baseWidth * 3;
const beyondTheDistanceLimit = distanceLimit + 1;
const distanceInput = [
  -distanceLimit,
  -distanceLimit / 1.25,
  -distanceLimit / 2,
  0,
  distanceLimit / 2,
  distanceLimit / 1.25,
  distanceLimit,
];
const widthOutput = [
  baseWidth,
  baseWidth * 1.3,
  baseWidth * 1.7,
  baseWidth * 2.5,
  baseWidth * 1.7,
  baseWidth * 1.3,
  baseWidth,
];

function Img({ src, mouseX, link }) {
  const distance = useMotionValue(beyondTheDistanceLimit);
  const width = useSpring(useTransform(distance, distanceInput, widthOutput), {
    damping: 25,
    stiffness: 250,
  });

  const ref = useRef();

  useRaf(() => {
    const el = ref.current;
    const mouseXVal = mouseX.get();
    if (el && mouseXVal !== null) {
      const rect = el.getBoundingClientRect();

      // get the x coordinate of the img DOMElement's center
      // the left x coordinate plus the half of the width
      const imgCenterX = rect.left + rect.width / 2;

      // difference between the x coordinate value of the mouse pointer
      // and the img center x coordinate value
      const distanceDelta = mouseXVal - imgCenterX;
      distance.set(distanceDelta);
      return;
    }

    distance.set(beyondTheDistanceLimit);
  }, true);

  return (
    <div>
      <motion.div ref={ref} style={{ width }}>
        <Link href={link}>
          <a>
            <Image src={src} className="icon" />
          </a>
        </Link>
      </motion.div>
      <p></p>
    </div>
  );
}

//<motion.img ref={ref} src={src} className="icon" style={{ width }} />
