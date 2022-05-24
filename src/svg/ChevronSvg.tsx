import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function ChevronSvg(props: SvgProps) {
  return (
    <Svg width={6} height={8} {...props}>
      <Path fill="none" stroke="#FFF" opacity={0.4} d="M1 0l4 4-4 4" />
    </Svg>
  )
}

export default ChevronSvg
