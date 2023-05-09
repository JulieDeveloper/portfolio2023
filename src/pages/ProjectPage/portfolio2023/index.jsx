import clsx from 'clsx';
import styled, { keyframes } from 'styled-components';
import { useTranslation } from 'react-i18next';
import ProjectBackground from '../../../components/projectPage/ProjectBackground.jsx';
import DarkmodeAnimation from './DarkmodeAnimation.jsx';
import ColorCards from './ColorCards.jsx';
import { device } from 'styles/device.js';
import {
  ArrowBlueLinkIcon,
  ArrowTwoEndsIcon,
  LightThemeIcon,
  DarkThemeIcon,
} from 'assets/images/icons/index.js';
import * as assets from 'assets/projectsImage/01/index.js';

import { DeviceFrameset } from 'react-device-frameset';
import 'styles/marvel-devices.min.css';
import { useImmer } from 'use-immer';

const Style = styled.div`
  scroll-snap-type: y mandatory;
  /* reset style */
  height: 100svh;
  background-color: var(--01-landing_primary-bg);
  color: var(--01-primary-text);
  p {
    font-weight: 300;
  }
  @media ${device.tablet} {
    font-size: 1.1rem;
  }
  @media ${device.laptop} {
    font-size: 1.2rem;
  }
  /* .landing-animation {
    position: absolute;
    z-index: 800;
    top: 0;
    left: 0;
    height: 100svh;
    width: 100vw;
    background-color: var(--white);
    animation: ${keyframes`
      0%,99%{
        display: block;
      }
      100%{
        display:none;
      }
    `}2s linear 1;
    animation-delay: 2s;
    animation-fill-mode: forwards;
  } */
  .scroll-snap-container {
    height: 100svh;
    width: 100vw;

    scroll-snap-type: y mandatory;
    overflow-y: scroll;
  }

  .scroll-snap-item {
    height: 100svh;
    width: 100vw;
    padding: 0 5vw;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .scroll-snap-item.title-landing {
    padding-top: 20svh;

    .wrapper {
      position: relative;
      z-index: 0;

      padding-top: 2rem;
      padding-bottom: 4rem;
      color: var(--01-landing_role-and-url);
      .role,
      .url {
        text-align: end;
      }

      &::before {
        content: '';
        position: absolute;
        z-index: -1;
        top: 0;
        left: -5vw;
        background-color: var(--01-landing_role-and-url-bg);
        width: 100vw;
        height: 100%;
      }
    }
    .num,
    .name {
      width: 100%;
      padding-left: auto;
      line-height: 90%;
    }
    .num {
      margin-bottom: 1rem;
      font-size: 5vw;
      font-weight: 100;
      color: var(--01-landing_num);
    }

    .name {
      text-align: right;
      font-size: 15vw;
      color: transparent;
      -webkit-text-stroke: 0.5px var(--01-primary-text);
    }

    @media ${device.tablet} {
      .name {
        font-size: 13vw;
        -webkit-text-stroke-width: 1px;
      }
    }
    @media ${device.laptop} {
      .name {
        font-size: 10vw;
        text-align: left;
        span {
          font-size: 8vw;
        }
      }
    }
  }

  /* animation*/
  .line-animation-section {
    @media ${device.tablet} {
      height: 100svh;
      position: relative;
    }
  }

  /* section common */
  .section-title-wrapper {
    width: fit-content;

    .title {
      font-size: 2.5rem;
      font-weight: 500;
      color: transparent;
      -webkit-text-stroke: 0.5px var(--01-primary-text);
      @media ${device.laptop} {
        font-size: 3rem;
        -webkit-text-stroke-width: 1px;
      }
    }
    /* bottom line */
    .line {
      margin-top: 2px;
      transform: translateX(40px);
      border-bottom: 0.5px solid var(--01-sub-text);
    }
  }
  .section-container {
    margin-top: 8rem;
  }

  /* overview */
  .scroll-snap-item.overview {
    .text0 {
      font-size: 1.2em;
      font-weight: 400;
      line-height: 100%;
      max-width: 250px;
      text-align: justify;
      color: var(--01-overview_text0);
      background-color: var(--01-overview_text0-bg);

      padding: 1.5rem 3rem;

      @media ${device.tablet} {
        max-width: 400px;
      }
    }

    .wrapper {
      padding-top: 20%;

      width: 60vw;
      margin: 0 auto;

      color: var(--01-primary-text);

      @media ${device.tablet} {
        width: 40vw;
        height: 80%;

        margin: 0;
        margin-left: auto;
      }
    }
  }

  /* tech */
  .tech-section {
    position: relative;
    justify-content: space-between;
    background-color: var(--01-tech_bg);
    padding: 5vw;
    align-items: center;

    .links-box {
      margin-right: auto;
      margin-top: auto;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      width: 160px;
      height: 70px;
      padding: 5px;
      border: 1px solid var(--01-tech_links-border);
      background-color: var(--01-tech_links-bg);
      .shadow-box {
        position: absolute;
        top: -2px;
        right: -2px;
        padding-left: 10px;
        padding-bottom: 10px;
        background-color: var(--01-tech_bg);
        transform: scale(0.6);
        transform-origin: top right;
      }
      .link-code,
      .link-liveDemo {
        font-family: 'Menlo';
        font-weight: 400;
        font-size: 1em;
        text-align: end;
        padding-left: auto;
        color: var(--01-tech_link);
        border-bottom: 1px solid var(--01-tech_link-border-bottom);
      }
      .link-code {
        margin-right: 40%;
      }
      .link-liveDemo {
        margin-top: 5px;
      }

      @media ${device.tablet} {
        width: 35vw;
        height: 10vw;
        padding: 2vw;
        .shadow-box {
          transform: scale(1);
        }

        .link-code,
        .link-liveDemo {
          letter-spacing: 0.2em;
          &:active,
          &:hover {
            letter-spacing: normal;
          }
        }
        .link-code {
          padding-left: 8vw;
          margin-right: auto;
        }
        .link-liveDemo {
          text-align: start;
          margin-left: 8vw;
          margin-top: 2vw;
        }
      }
    }
    .tree-grid {
      position: absolute;
      top: 50%;
      transform: translateY(-40%);

      display: grid;
      grid-template-columns: 0.9fr repeat(2, 0.8fr) 1fr;
      grid-template-rows: auto 1em 1em repeat(3, auto);
      grid-gap: 0;
      font-family: 'Menlo';
      font-weight: 400;
      font-size: 1.125em;
      width: 80%;
      color: var(--01-tech_tree-text);

      .tree-tech,
      .tree-design {
        font-size: 0.9em;
      }
      .type {
        color: var(--01-tech_tree-type);
        font-size: 0.8em;
      }

      .tree-tech {
        color: var(--01-tech_tree-type);
        grid-column: 1/2;
        grid-row: 3/4;
      }
      .tree-design {
        color: var(--01-tech_tree-type);
        grid-column: 1/2;
        grid-row: 1/2;
      }

      .tree-wrapper {
        text-align: end;
        grid-column: 4/5;
        padding-bottom: 20px;

        &.language {
          grid-row: 4/5;
        }
        &.framework {
          grid-row: 5/6;
        }
        &.tools {
          grid-row: 6/7;
        }
        &.design {
          grid-row: 1/2;
        }

        .content {
          margin-top: 10px;
        }
      }
      .line {
        transform: translateY(0.5em);

        &.design-left {
          border-top: 0.5px solid var(--01-tech_tree-line);
          grid-column: 2/3;
          grid-row: 1/2;
        }
        &.design-right {
          grid-column: 3/4;
          grid-row: 1/2;
        }
        &.tech-right,
        &.design-right {
          border-top: 0.5px solid var(--01-tech_tree-line);
        }
        &.tech-left {
          border-top: 0.5px solid var(--01-tech_tree-line);
          border-right: 0.5px solid var(--01-tech_tree-line);
          grid-column: 2/3;
          grid-row: 3/6;
        }
        &.tech-right {
          grid-column: 3/4;
          &.language {
            grid-row: 4/5;
          }
          &.framework {
            grid-row: 5/6;
          }
          &.tools {
            grid-row: 6/7;
          }
        }
      }
    }
  }
  /* features */

  .feature-title {
    font-weight: 500;
    font-size: 1.2rem;
    text-align: center;

    @media ${device.laptop} {
      font-size: 1.5rem;
    }
  }
  .feature-detail-section {
    background-color: var(--01-feature-detail-section-bg);
  }

  /* feature RWD */

  .rwd-texts-flex p {
    margin-top: 2rem;
    text-align: center;
    @media ${device.tablet} {
      width: 60%;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .nav-container-flex {
    position: sticky;
    top: 4rem;
    z-index: 2;

    .nav-item {
      font-family: 'Menlo';
      font-size: 1rem;
      margin: 0 2rem;

      &:hover:not(.active) {
        font-weight: 700;
        cursor: pointer;
      }
      &.active {
        color: var(--01-rwd_nav-active);
        cursor: default;
      }
    }
    @media ${device.tablet} {
      .nav-item {
        text-align: end;
        font-size: 1.2rem;
      }
    }
    @media ${device.laptop} {
      font-size: 1.5rem;
    }
  }
  .demo-container {
    position: relative;
    top: 0;

    left: -5vw;
    width: 100vw;
    height: 70svh;
    overflow-y: scroll;
    overflow-x: hidden;
    background-color: var(--01-feature-detail-section-bg);
    scroll-snap-type: y mandatory;
    -ms-overflow-style: none; /* Hide scrollbar IE and Edge */
    scrollbar-width: none; /* Hide scrollbar Firefox */
    &::-webkit-scrollbar {
      display: none; /* Hide scrollbar for Chrome, Safari and Opera */
    }

    .demo-item {
      position: sticky;
      top: 0;
      width: 100vw;
      height: 70svh;

      display: flex;
      justify-content: center;

      &.mobile,
      &.tablet,
      &.laptop {
        background-color: var(--01-primary-bg);
      }

      .marvel-device {
        transform-origin: center 10%;
        &.iphone-x {
          aspect-ratio: 375/812;
          transform: scale(0.45);
        }
        &.ipad {
          aspect-ratio: 576/768;
          transform: scale(0.4);
        }
        &.macbook {
          aspect-ratio: 960/600;
          transform: scale(0.3);
          transform-origin: center 20%;
        }

        @media (min-width: 480px) {
          &.iphone-x {
            transform: scale(0.4);
          }
          &.ipad {
            transform: scale(0.35);
          }
          &.macbook {
            transform: scale(0.4);
          }
        }
        @media ${device.tablet} {
          &.iphone-x {
            transform: scale(0.5);
            transform-origin: top;
          }
          &.ipad {
            transform: scale(0.45);
            transform-origin: top;
          }
          &.macbook {
            transform: scale(0.5);
            transform-origin: top;
          }
        }
        @media ${device.laptop} {
          &.iphone-x {
            transform: scale(0.5);
            transform-origin: top;
          }
          &.ipad {
            transform: scale(0.45);
            transform-origin: top;
          }
          &.macbook {
            transform: scale(0.6);
            transform-origin: top;
          }
        }
      }
    }
  }

  /* feature darkmode */
  .darkmode-container .feature-title {
    text-align: center;
  }
  .darkmode-container .text0 {
    margin: 0 auto;
    margin-top: 5svh;

    max-width: 40%;
    text-align: center;
  }
  .darkmode-grid {
    width: 100%;
    height: 100%;
    padding-top: 60px;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 6fr 7fr 7fr;
    grid-gap: 5vw;
    place-items: center;
    background-color: var(--01-feature-detail-section-bg);

    @media ${device.tablet} {
      padding: 5% 0;
      grid-template-rows: 20% 30% 50%;
      grid-template-columns: 45% 45%;
      grid-gap: 0 10%;
    }

    .text1,
    .text2 {
      grid-column: 1/2;
      color: var(--01-darkmode_grid-text);
    }
    .text1 {
      grid-row: 1/2;
      @media ${device.tablet} {
        text-align: right;
      }
    }
    .text2 {
      grid-row: 3/4;
      text-align: right;

      @media ${device.tablet} {
        grid-column: 2/3;
        text-align: left;
        align-self: end;
      }
    }

    .control-panel {
      grid-row: 2/3;
      grid-column: 1/2;

      width: 6rem;
      aspect-ratio: 3/8;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 2rem 0;
      background-color: var(--01-control-panel_bg);
      border: 1px solid var(--01-control-panel_border);
      animation: ${keyframes`
        0%{ box-shadow: 3px 3px 10px var(--01-control-panel_box-shadow);}
        50%{box-shadow: none;}
        100%{box-shadow: 3px 3px 10px var(--01-control-panel_box-shadow);}

      `} 1.2s linear infinite;
      @media ${device.tablet} {
        grid-row: 2/3;
        grid-column: 2/3;
        width: 8rem;
        padding: 3rem 0;
      }
      svg:nth-child(1),
      svg:nth-child(3) {
        transform: scale(2);
        -webkit-filter: drop-shadow(
          0px 4px 4px var(--01-control-panel_icon-shadow)
        );
        filter: drop-shadow(0px 4px 4px var(--01-control-panel_icon-shadow));
        cursor: pointer;
        @media ${device.tablet} {
          transform: scale(2.5);
        }
      }
      svg:nth-child(2) {
        transform: scale(1.5);
      }

      svg path {
        fill: var(--01-darkmode_icon);
        stroke: var(--01-darkmode_icon-stroke);
        opacity: 50%;
      }
      svg:hover path,
      svg:active path {
        opacity: 100%;
      }
      svg.active path {
        fill: var(--01-darkmode_icon-active);
        opacity: 100%;
        cursor: default;
      }
    }

    .demo-wrapper {
      grid-row: 2/4;
      grid-column: 2/3;
      height: fit-content;
      width: 80%;
      @media ${device.tablet} {
        justify-self: end;
        align-self: end;
        max-width: 50%;
        grid-row: 2/4;
        grid-column: 1/2;
        max-height: unset;
      }
      @media ${device.laptop} {
        max-width: 45%;
      }
      img {
        width: 100%;
        height: 100%;
        max-height: 55svh;
        object-fit: contain;

        @media ${device.tablet} {
          max-height: 80svh;
        }
        @media ${device.laptop} {
          max-height: 65svh;
        }
      }
    }
  }

  /* feature bilingual */
  .bilingual {
    .bilingual-grid {
      margin-top: 4rem;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      grid-auto-rows: auto;
      grid-gap: 2rem;
      justify-items: center;
      @media ${device.tablet} {
        width: 100%;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto;
        grid-auto-rows: auto;
        grid-gap: 4rem;
      }
    }
    .feature-title,
    .text0 {
      text-align: center;
    }
    .text0 {
      margin-top: 5svh;
      white-space: pre;
    }
    .control-panel,
    .demo-box {
      height: 6rem;

      aspect-ratio: 3/1;
      display: flex;
      align-items: center;
      justify-self: start;
      @media ${device.tablet} {
        width: 100%;
        aspect-ratio: 8/3;
      }
    }
    .demo-box {
    }

    .control-panel {
      padding: 0 1rem;

      justify-content: space-around;
      background-color: var(--01-control-panel_bg);
      border: 1px solid var(--01-control-panel_border);
      animation: ${keyframes`
        0%{ box-shadow: 3px 3px 10px var(--01-control-panel_box-shadow);}
        50%{box-shadow: none;}
        100%{box-shadow: 3px 3px 10px var(--01-control-panel_box-shadow);}

      `} 1.2s linear infinite;
      @media ${device.tablet} {
        justify-self: end;
        max-width: 320px;
      }
      svg {
        transform: rotate(90deg) scale(1.5);
        transform-origin: center;
      }
      div {
        font-size: 1.5em;
        opacity: 50%;
      }
      div:not(.active) {
        cursor: pointer;
        &:hover {
          opacity: 100%;
        }
      }
      div.active {
        opacity: 100%;
        cursor: default;
      }
    }
    .demo-box {
      justify-self: end;
      padding: 0 1rem;
      font-family: 'Menlo';
      background-color: var(--01-bilingual_demo-box-bg);
      color: var(--01-bilingual_demo-box-text);
      border: 1px solid var(--01-bilingual_demo-box-border);
      @media ${device.tablet} {
        justify-self: start;
        max-width: 320px;
      }
    }

    .text1 {
      margin-top: 2rem;
      @media ${device.tablet} {
        margin-top: 0;
        justify-self: end;
        max-width: 320px;
      }
      .fw400 {
        font-weight: 400;
      }
    }
    @media ${device.tablet} {
      .text2 {
        justify-self: start;
        max-width: 320px;
        padding-top: 1rem;
      }
    }
  }

  /* design */

  .design-intro-wrapper {
    width: 100%;
    min-height: 50svh;

    display: grid;
    grid-template-columns: 10% 80% 10%;
    grid-template-rows: 1fr 0.5fr repeat(2, auto) 0.5fr 1fr;
    grid-template-areas:
      '. text-top line-top'
      '. . line-top'
      '. hero-top .'
      '. hero-bottom .'
      'line-bottom . .'
      'line-bottom text-bottom .';

    .text-top {
      grid-area: text-top;
      align-self: center;
      margin-left: auto;
      text-align: end;
      width: 85%;
    }
    .line-top {
      grid-area: line-top;
      align-self: end;
      justify-self: end;
      position: relative;

      height: 75%;
      width: 1px;
      background-color: var(--01-less-is-more_line);

      &:before {
        content: '\u25C6';
        position: absolute;
        top: 0;
        left: 0;
        color: var(--01-less-is-more_line);
        transform: translate(-50%, -50%);
      }
    }
    .text-bottom {
      grid-area: text-bottom;
      align-self: center;
    }
    .line-bottom {
      grid-area: line-bottom;
      align-self: start;
      justify-self: start;
      position: relative;
      height: 75%;
      width: 1px;
      background-color: var(--01-less-is-more_line);

      &:before {
        content: '\u25C6';
        position: absolute;
        bottom: 0;
        color: var(--01-less-is-more_line);
        transform: translate(-50%, 50%);
      }
    }
    .hero-less,
    .hero-is-more {
      align-self: center;
      font-size: 64px;
      line-height: 80%;
      font-weight: 700;
      opacity: 40%;
    }

    .hero-less {
      grid-area: hero-top;
      color: var(--01-less-is-more_less);
      -webkit-text-stroke: 1px var(--01-less-is-more_text-stroke);
    }
    .hero-is-more {
      grid-area: hero-bottom;
      color: var(--01-less-is-more_is-more);
      -webkit-text-stroke: 1px var(--01-less-is-more_text-stroke);
      text-shadow: 2px 2px 0px var(--01-less-is-more_text-shadow);
      white-space: pre;
    }
    @media ${device.tablet} {
      margin-left: auto;
      grid-template-columns: 1fr 16vw 25vw;
      grid-template-rows: 1.5fr 1fr repeat(2, auto) 1fr 2fr;
      grid-template-areas:
        'text-top text-top line-top'
        '. . line-top'
        '. . hero-top'
        '. hero-bottom hero-bottom'
        'line-bottom . .'
        'line-bottom text-bottom text-bottom ';
      .text-top {
        max-width: 50vw;
        justify-content: start;
        padding-right: 8vw;
        width: 100%;
      }

      .line-top {
        justify-self: start;
        margin-left: 0;

        left: -5vw;
        height: 62.5%;
      }
      .text-bottom {
        max-width: 60vw;

        margin-left: -2vw;
      }
      .line-bottom {
        justify-self: end;
        margin-right: 5vw;
        height: 62.5%;
      }

      .hero-less,
      .hero-is-more {
        font-size: 10vw;
      }
    }
  }

  .colors-container {
    height: 100%;

    .flex {
      display: flex;
      height: 100%;
      align-items: center;
    }
    /* right area */
    /* default */
    .flex .show-box {
      flex-basis: 50%;

      .default {
        margin-left: 1rem;
        font-size: 1.5rem;
        font-family: 'Menlo';
        font-weight: 700;
        white-space: pre;

        @media ${device.tablet} {
          font-size: 2.5rem;
          margin-left: 40%;
        }
      }

      .active {
        width: 55%;
        margin: 0 auto;
        aspect-ratio: 2/5;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-top: 14px;
        border-radius: 10px;
        box-shadow: -2px 4px 4px var(--01-control-panel_icon-shadow);
        font-family: 'Menlo';
        @media ${device.tablet} {
          width: 40%;
        }
        .variable {
          padding: 0 2vw;
          font-weight: 700;
          font-size: 2.5vw;
          color: var(--01-color_card-variable);
        }
        &.black {
          background-color: #222222;
        }
        &.dark {
          background-color: #404040;
        }
        &.dark-grey {
          background-color: #808080;
        }
        &.grey {
          background-color: #bfbfbf;
          .variable {
            color: var(--01-color_card-variable-sub);
          }
        }
        &.cream {
          background-color: #eeeeee;
          .variable {
            color: var(--01-color_card-variable-sub);
          }
        }
        &.white {
          background-color: #ffffff;
          .variable {
            color: var(--01-color_card-variable-sub);
          }
        }

        .wrapper {
          height: 28%;
          padding: 0 2vw;
          padding-bottom: 14px;
          background-color: var(--01-color_card-bottom-bg);
          border-radius: 0 0 10px 10px;
          .code-row:first-child {
            margin: 1vw 0;
          }
          .type {
            font-size: 1.2vw;
            align-self: flex-start;
            color: var(--01-color_card-bottom-type);
          }
          .code {
            font-size: 2.5vw;
            align-self: flex-end;
            color: var(--01-color_card-bottom-code);
          }
        }
        @media ${device.tablet} {
          .variable {
            font-size: 1.5em;
          }

          .wrapper .type {
            font-size: 1.8vw;
          }
          .wrapper .code {
            font-size: 2vw;
          }
        }
        @media ${device.laptop} {
          .wrapper .type {
            font-size: 1.6vw;
          }
          .wrapper .code {
            font-size: 1.8vw;
          }
        }
      }
    }
    /* right area - cards*/
    .cards {
      position: relative;
      flex-basis: 50%;
      height: 80%;
    }
  }
  .font-section {
    justify-content: space-between;
  }
  .font-container {
    position: relative;
    margin: 0 auto;
    margin-top: 10%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media ${device.tablet} {
      height: 60%;
      width: 90%;
      border: 1px solid var(--01-font_border);
      padding: 5% 10%;
      flex-direction: row;
      text-align: left;

      animation: ${keyframes`
      0%, 50%,100% {
        border-radius: 0;
      }
      25% {
        border-radius: 0 0 45% 0;
        box-shadow: 1px 3px 10px var(--01-font_shadow25);
      }
      50%{
        box-shadow: 3px 3px 10px var(--01-font_shadow50);
      }
      75%{
        border-radius: 20% / 45%;
        box-shadow: 1px 3px 10px var(--01-font_shadow75);
      }
    
    `} 8s linear infinite;
    }

    .flex {
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 1px solid var(--01-font_border);

      padding: 20% 0;
      animation: ${keyframes`
      0%, 50%,100% {
        border-radius: 0;
      }
      25% {
        border-radius: 0 0 45% 0;
        box-shadow: 1px 3px 10px var(--01-font_shadow25);
      }
      50%{
        box-shadow: 3px 3px 10px var(--01-font_shadow50);
      }
      75%{
        border-radius: 20% / 45%;
        box-shadow: 1px 3px 10px var(--01-font_shadow75);
      }
    
    `} 8s linear infinite;

      @media ${device.tablet} {
        flex-basis: 65%;

        height: fit-content;
        border: none;
        padding: 0;
        animation: none;
      }
    }
    .title {
      width: 50vw;
      text-align: center;

      font-size: 10vw;

      font-weight: 400;

      @media ${device.tablet} {
        width: 100%;
        text-align: left;
      }
    }
    .detail {
      text-align: center;
      white-space: pre-wrap;
      width: 80%;
      margin-top: 1rem;
      @media ${device.tablet} {
        text-align: left;
        width: 100%;
      }
    }
    .sample {
      width: 40vw;
      font-size: 1.1em;
      margin-top: 3rem;
      text-align: center;

      @media ${device.tablet} {
        flex-basis: 35%;
        margin-top: 4rem;
        text-align: left;
      }
    }
    .PP {
      font-family: 'Mori';
    }
    .Menlo {
      font-family: 'Menlo';
    }
    .Taipei {
      font-family: 'Taipei Sans TC';
    }
  }
  .font-control-panel {
    display: flex;
    width: 50%;
    margin: 0 auto;
    margin-bottom: 2rem;
    justify-content: space-evenly;
    @media ${device.tablet} {
      margin-left: auto;
    }

    .font-option {
      cursor: pointer;
      padding-top: 0.5rem;
      &:not(.active):hover,
      &:not(.active):active {
        font-style: italic;
        font-weight: 600;
      }

      &.active {
        font-weight: 600;
        border-top: 1px solid var(--01-primary-text);
        cursor: default;
      }
    }
  }
`;
const RwdImageWrapper = styled.div`
  background-image: url(${(props) => props.imageUrl});
  background-repeat: no-repeat;
  background-repeat: repeat;

  background-size: cover;
  width: 100%;
  height: 100%;
`;

const Portfolio2023 = () => {
  const { t } = useTranslation('project01');
  const [demoStatus, updateDemoStatus] = useImmer({
    features: { rwdPage: 'home', darkmode: false, isTC: false },
    designs: { color: { hex: '', rgb: '', variable: '' }, font: 'PP Mori' },
  });

  const handleDemoChange = ({ type, value }) => {
    switch (type) {
      case 'rwdPage':
        const changeRwdPage = () => {
          updateDemoStatus((draft) => {
            draft.features.rwdPage = value;
          });
        };
        return changeRwdPage;

      case 'darkmode':
        const changeDarkmode = () => {
          updateDemoStatus((draft) => {
            draft.features.darkmode = !draft.features.darkmode;
          });
        };
        return changeDarkmode;

      case 'isTC':
        const changeIsTC = () => {
          updateDemoStatus((draft) => {
            draft.features.isTC = !draft.features.isTC;
          });
        };
        return changeIsTC;

      case 'color':
        const changeColor = () => {
          updateDemoStatus((draft) => {
            draft.designs.color.name = value.name;
            draft.designs.color.hex = value.hex;
            draft.designs.color.rgb = value.rgb;
          });
        };
        return changeColor;

      case 'font':
        const changeFont = () => {
          updateDemoStatus((draft) => {
            draft.designs.font = value;
          });
        };

        return changeFont;

      default:
        console.log(` handleDemoChange(${type}) Error!`);
    }
  };

  const getImageUrl = (device) => {
    const page = demoStatus.features.rwdPage;
    return assets[page + device];
  };

  let fontDetail;
  if (demoStatus.designs.font === 'PP Mori') {
    fontDetail = t('design.fontPP');
  }
  if (demoStatus.designs.font === 'Taipei Sans TC') {
    fontDetail = t('design.fontTaipei');
  }
  if (demoStatus.designs.font === 'Menlo') {
    fontDetail = t('design.fontMenlo');
  }

  return (
    <ProjectBackground>
      <Style>
        {/* <div className="landing-animation">
          <div className="line-animation-section">
            <LineAnimation />
          </div>
        </div> */}
        <div className="scroll-snap-container">
          <div className="scroll-snap-item title-landing">
            <div className="num">01</div>
            <h1 className="name EN">
              PORTFOLIO <span>2023</span>
            </h1>
            <div className="wrapper">
              <p className="role">
                {t('landing.role')} | {t('landing.roleContent')}
              </p>
              <p className="url">{t('landing.url')} | www.julie-chou.com</p>
            </div>
          </div>

          {/* overview */}
          <div className="scroll-snap-item overview">
            <p className="text0">{t('briefDesign')}</p>
          </div>
          <div className="scroll-snap-item overview">
            <div className="wrapper">
              <p>{t('briefSummary.line1')}</p>
              <br />
              <p>{t('briefSummary.line2')}</p>
              <br />
              <p>{t('briefSummary.line3')}</p>
            </div>
          </div>

          {/* technology */}

          <div className="scroll-snap-item tech-section">
            <div className="tree-grid">
              <h3 className="tree-tech">{t('techTree.techStack')}</h3>
              <div className="line tech-left"></div>
              <div className="line tech-right language"></div>

              <div className="tree-wrapper language">
                <h3 className="type">{t('techTree.techLanguage')}</h3>
                <p className="content">JavaScript</p>
              </div>
              <div className="line tech-right framework"></div>

              <div className="tree-wrapper framework">
                <h3 className="type">{t('techTree.techFramework')}</h3>
                <p className="content">React.js</p>
              </div>
              <div className="line tech-right tools"></div>

              <div className="tree-wrapper tools">
                <h3 className="type">{t('techTree.techLibrary')}</h3>
                <p className="content">
                  styled-component
                  <br />
                  clsx
                  <br />
                  i18n
                  <br />
                  formspree
                  <br />
                  react-reveal
                </p>
              </div>
              <h3 className="tree-design">{t('techTree.design')}</h3>
              <div className="line design-left"></div>
              <div className="line design-right"></div>
              <div className="tree-wrapper design">
                <h3 className="type">{t('techTree.designTool')}</h3>
                <p className="content">Figma</p>
              </div>
            </div>

            <div className="links-box">
              <div className="shadow-box">
                <ArrowBlueLinkIcon className="icon" />
              </div>
              <a
                href="https://github.com/JulieDeveloper/portfolio2023"
                className="link-code"
              >
                {t('techLinks.code')}
              </a>
              <a
                href="https://github.com/JulieDeveloper/portfolio2023"
                className="link-liveDemo"
              >
                {t('techLinks.liveDemo')}
              </a>
            </div>
          </div>
          <div className="scroll-snap-item">
            <div className="section-title-wrapper">
              <h1 className="title">{t('titleFeature')}</h1>
              <div className="line"></div>
            </div>
          </div>
          {/* feature */}
          <div className="scroll-snap-item">
            <h3 className="feature-title">{t('rwd.title')}</h3>

            <div className="rwd-texts-flex">
              <p>{t('rwd.line1')}</p>
              <p>{t('rwd.line2')}</p>
            </div>
          </div>
          <div className="scroll-snap-item">
            <div className="nav-container-flex">
              <div
                className={clsx(
                  'nav-item',
                  demoStatus.features.rwdPage === 'home' && 'active',
                )}
                onClick={handleDemoChange({
                  type: 'rwdPage',
                  value: 'home',
                })}
              >
                {t('rwd.navHome')}
              </div>
              <div
                className={clsx(
                  'nav-item',
                  demoStatus.features.rwdPage === 'about' && 'active',
                )}
                onClick={handleDemoChange({
                  type: 'rwdPage',
                  value: 'about',
                })}
              >
                {t('rwd.navAbout')}
              </div>
              <div
                className={clsx(
                  'nav-item',
                  demoStatus.features.rwdPage === 'projects' && 'active',
                )}
                onClick={handleDemoChange({
                  type: 'rwdPage',
                  value: 'projects',
                })}
              >
                {t('rwd.navProjects')}
              </div>
              <div
                className={clsx(
                  'nav-item',
                  demoStatus.features.rwdPage === 'contact' && 'active',
                )}
                onClick={handleDemoChange({
                  type: 'rwdPage',
                  value: 'contact',
                })}
              >
                {t('rwd.navContact')}
              </div>
            </div>
            <div className="feature-detail-section">
              <div className="demo-container">
                {/* mobile */}
                <div className="demo-item mobile">
                  <DeviceFrameset device="iPhone X">
                    <RwdImageWrapper imageUrl={getImageUrl('S')} />
                  </DeviceFrameset>
                </div>

                {/* tablet */}
                <div className="demo-item tablet">
                  <DeviceFrameset device="iPad Mini" color="black">
                    <RwdImageWrapper imageUrl={getImageUrl('M')} />
                  </DeviceFrameset>
                </div>

                {/* laptop */}
                <div className="demo-item laptop">
                  <DeviceFrameset device="MacBook Pro">
                    <RwdImageWrapper imageUrl={getImageUrl('L')} />
                  </DeviceFrameset>
                </div>
              </div>
            </div>
          </div>
          {/* feature darkmode */}

          <div className="scroll-snap-item darkmode-container">
            <h3 className="feature-title">{t('darkmode.title')}</h3>

            <p className="text0">{t('darkmode.line0')}</p>
          </div>
          <div className="scroll-snap-item feature-detail-section">
            <div className="darkmode-grid">
              <p className="text1">{t('darkmode.grid.line1')}</p>
              <p className="text2">{t('darkmode.grid.line2')}</p>
              <div className="control-panel">
                <LightThemeIcon
                  className={clsx(!demoStatus.features.darkmode && 'active')}
                  onClick={handleDemoChange({
                    type: 'darkmode',
                  })}
                />

                <ArrowTwoEndsIcon />

                <DarkThemeIcon
                  className={clsx(demoStatus.features.darkmode && 'active')}
                  onClick={handleDemoChange({
                    type: 'darkmode',
                  })}
                />
              </div>
              <DarkmodeAnimation isDark={demoStatus.features.darkmode} />

              <div className="demo-wrapper">
                <img
                  src={
                    demoStatus.features.darkmode
                      ? assets.darkmodeDark
                      : assets.darkmodeLight
                  }
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="scroll-snap-item bilingual">
            {/* feature bilingual */}
            <h3 className="feature-title">{t('bilingual.title')}</h3>
            <p className="text0">{t('bilingual.line0')} </p>
          </div>
          <div className="scroll-snap-item bilingual feature-detail-section">
            <div className="bilingual-grid">
              <div className="control-panel">
                <div
                  className={clsx(!demoStatus.features.isTC && 'active')}
                  onClick={handleDemoChange({
                    type: 'isTC',
                    value: false,
                  })}
                >
                  {t('bilingual.controlBtn.en')}
                </div>{' '}
                <ArrowTwoEndsIcon />
                <div
                  className={clsx(demoStatus.features.isTC && 'active')}
                  onClick={handleDemoChange({
                    type: 'isTC',
                    value: true,
                  })}
                >
                  {t('bilingual.controlBtn.tc')}
                </div>
              </div>
              <div className="demo-box">
                {demoStatus.features.isTC
                  ? '我的名字是周原（Julie Chou），我是一名網頁工程師...'
                  : 'My name is Julie Chou, I’m a Web developer...'}
              </div>
              <p className="text1">
                <span className="fw400">{t('bilingual.line1I18n')}</span>
                <br />
                {t('bilingual.line1')}
              </p>
              <p className="text2">{t('bilingual.line2')}</p>
            </div>
          </div>

          {/* design section */}
          <div className="scroll-snap-item">
            <div className="design-intro-wrapper">
              <p className="text-top">{t('design.line1')}</p>
              <div className="line-top"></div>

              <h1 className="hero-less">LESS</h1>
              <h1 className="hero-is-more">IS MORE</h1>

              <div className="line-bottom"></div>
              <p className="text-bottom">{t('design.line2')}</p>
            </div>
          </div>
          <div className="scroll-snap-item">
            <div className="section-title-wrapper">
              <h1 className="title">{t('design.fontAndColor')}</h1>
              <div className="line"></div>
            </div>
          </div>
          <div className="scroll-snap-item">
            {/* design colors */}
            <div className="colors-container">
              <div className="flex">
                {/* color cards */}
                <ColorCards handleDemoChange={handleDemoChange} />
                {/* default*/}
                <div className="show-box">
                  {demoStatus.designs.color.name ? (
                    <div className={`active ${demoStatus.designs.color.name}`}>
                      <div className="variable">
                        {demoStatus.designs.color.name}
                      </div>
                      <div className="wrapper">
                        <div className="code-row">
                          <div className="type">HEX</div>
                          <div className="code">
                            {demoStatus.designs.color.hex}
                          </div>
                        </div>
                        <div className="code-row">
                          <div className="type">RGB</div>
                          <div className="code">
                            {demoStatus.designs.color.rgb}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="default">{t('design.pickYourColor')}</div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="scroll-snap-item font-section">
            {/* design fonts */}
            <div className="font-container">
              <div className="flex">
                <h1 className={clsx('title', `${demoStatus.designs.font}`)}>
                  {demoStatus.designs.font}
                </h1>
                <p className="detail">{fontDetail}</p>
              </div>

              <p className={clsx('sample', `${demoStatus.designs.font}`)}>
                Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu
                Vv Ww Xx Yy Zz
                <br />0 1 2 3 4 5 6 7 8 9
              </p>
            </div>
            <div className="font-control-panel">
              <div
                className={clsx(
                  'font-option',
                  demoStatus.designs.font === 'PP Mori' && 'active',
                )}
                onClick={handleDemoChange({
                  type: 'font',
                  value: 'PP Mori',
                })}
              >
                PP
              </div>
              <div
                className={clsx(
                  'font-option',
                  demoStatus.designs.font === 'Menlo' && 'active',
                )}
                onClick={handleDemoChange({
                  type: 'font',
                  value: 'Menlo',
                })}
              >
                Menlo
              </div>
              <div
                className={clsx(
                  'font-option',
                  demoStatus.designs.font === 'Taipei Sans TC' && 'active',
                )}
                onClick={handleDemoChange({
                  type: 'font',
                  value: 'Taipei Sans TC',
                })}
              >
                Taipei
              </div>
            </div>
          </div>
        </div>
      </Style>
    </ProjectBackground>
  );
};

export default Portfolio2023;
