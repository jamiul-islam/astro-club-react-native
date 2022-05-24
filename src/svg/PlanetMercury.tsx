import * as React from "react"
import Svg, {
  SvgProps,
  Defs,
  Circle,
  G,
  Mask,
  Use,
  Path,
} from "react-native-svg"

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      width={290}
      height={290}
      {...props}
    >
      <Defs>
        <Circle id="prefix__a" cx={145} cy={145} r={145} />
        <Circle id="prefix__c" cx={145} cy={145} r={145} />
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Circle cx={145} cy={145} r={145} fill="#DEF4FC" fillRule="nonzero" />
        <Mask id="prefix__b" fill="#fff">
          <Use xlinkHref="#prefix__a" />
        </Mask>
        <Path
          fill="#B1D5E2"
          fillRule="nonzero"
          d="M154 253c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zm86-48c6.627 0 12 5.373 12 12s-5.373 12-12 12h-62c-6.627 0-12-5.373-12-12s5.373-12 12-12h62zm-110 0c6.627 0 12 5.373 12 12s-5.373 12-12 12-12-5.373-12-12 5.373-12 12-12zm-45-60c0-6.627-5.373-12-12-12H2c-6.627 0-12-5.373-12-12s5.373-12 12-12h49c6.627 0 12-5.373 12-12s-5.373-12-12-12h-5c-6.627 0-12-5.373-12-12s5.373-12 12-12h73c6.627 0 12 5.373 12 12s-5.373 12-12 12H99v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h45c6.627 0 12 5.373 12 12s-5.373 12-12 12h-2l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.499 11.99l.001.01h52c6.627 0 12 5.373 12 12s-5.373 12-12 12H70c-6.627 0-12-5.373-12-12s5.373-12 12-12h3c6.627 0 12-5.373 12-12zm160 12c6.627 0 12 5.373 12 12s-5.373 12-12 12-12-5.373-12-12 5.373-12 12-12zm-223 0c6.627 0 12 5.373 12 12s-5.373 12-12 12H2c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zm199-96c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zm24-48c6.627 0 12 5.373 12 12s-5.373 12-12 12h-58c-6.627 0-12-5.373-12-12s5.373-12 12-12h58z"
          mask="url(#prefix__b)"
        />
        <Mask id="prefix__d" fill="#fff">
          <Use xlinkHref="#prefix__c" />
        </Mask>
        <Path
          fill="#000"
          fillRule="nonzero"
          mask="url(#prefix__d)"
          opacity={0.078}
          d="M146 0h145v290H146z"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
