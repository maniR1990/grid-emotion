import React from 'react'
import styled, { css } from 'emotion/react'
import { responsiveStyle } from 'styled-system'
import { oneOfType, number, string, array, bool } from 'prop-types'
import propTypes from './propTypes'
import Box from './Box'

const wrap = responsiveStyle('flexWrap', 'wrap', 'wrap')
const direction = responsiveStyle('flexDirection', 'direction')
const align = props => responsiveStyle('alignItems', 'align')
const justify = props => responsiveStyle('justifyContent', 'justify')
const column = props => props.column ? css`flex-direction:column;` : null

const Flex = styled(Box)`
  display: flex;
  ${wrap};
  ${column};
  ${direction};
  ${align};
  ${justify};
`
Flex.displayName = 'Flex'

const responsivePropType = oneOfType([
  number,
  string,
  array,
  bool
])

Flex.propTypes = Object.assign({}, propTypes, {
  wrap: responsivePropType,
  direction: responsivePropType,
  align: responsivePropType,
  justify: responsivePropType,
  column: bool
})

export default Flex
