import React from 'react'
import styled from 'react-emotion'
import { space, width, responsiveStyle } from 'styled-system'
import { number, string, array, oneOfType } from 'prop-types'
import tag from 'tag-hoc'
import propTypes from './propTypes'
import removeProps from './remove-props'

export const flex = responsiveStyle('flex')
export const order = responsiveStyle('order')

const Tag = tag(removeProps)
const Base = Tag('div')

const Box = styled(Base)`
  ${width};
  ${space};
  ${flex};
  ${order};
  box-sizing: border-box;
`
Box.displayName = 'Box'

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
