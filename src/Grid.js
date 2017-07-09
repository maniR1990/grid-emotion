import styled from 'emotion/react'
import Box from './Box'

const Grid = styled(Box)`
  display: inline-block;
  vertical-align: ${(props) => props.align || 'top'}
`

export default Grid
