import React from 'react'
import styled from 'emotion/react'
import { space, width, responsiveStyle } from 'styled-system'
import { number, string, array, oneOfType } from 'prop-types'
import propTypes from './propTypes'

export const flex = responsiveStyle('flex')
export const order = responsiveStyle('order')

const Box = styled.div`
  composes: ${width} ${space} ${flex} ${order};
  box-sizing: border-box;
`

const responsivePropType = oneOfType([
  number,
  string,
  array
])

Box.propTypes = Object.assign({}, propTypes, {
  flex: responsivePropType,
  order: responsivePropType
})

export default Box
