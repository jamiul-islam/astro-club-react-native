import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function DrawerSvg(props: SvgProps) {
  return (
    <Svg width={24} height={17} {...props}>
      <Path
        d="M0 0h24v3H0zm0 7h24v3H0zm0 7h24v3H0z"
        fill="#FFF"
        fillRule="evenodd"
      />
    </Svg>
  )
}

export default DrawerSvg