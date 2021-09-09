import styled, { css } from 'styled-components'

import { bounceDown } from '@/styles/animation'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  padding: 1em 0.5em;
  ${props =>
    props.fixed &&
    css`
       {
        ${bounceDown()}
        position: fixed;
        z-index: 1;
        left: 0;
        right: 0;
        margin: 0 auto;
        background: #fff;
        border-radius: 60px;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
        padding: 5px;
        max-width: 400px;
        top: -2px;
        transform: scale(0.8);
      }
    `}

  &::-webkit-scrollbar {
    display: none;
  }
`

export const Item = styled.li`
  padding: 0 8px;
  text-decoration: none;
`
