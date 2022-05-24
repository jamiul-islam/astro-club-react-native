import * as React from "react"
import Svg, {
  SvgProps,
  Defs,
  Circle,
  Path,
  G,
  Mask,
  Use,
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
        <Path
          id="prefix__e"
          d="M0 0c76.768 0 139 62.232 139 139S76.768 278 0 278z"
        />
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
        <G transform="translate(146 6)">
          <Mask id="prefix__f" fill="#fff">
            <Use xlinkHref="#prefix__e" />
          </Mask>
          <Use fill="#7A939C" xlinkHref="#prefix__e" />
          <Circle
            cx={1}
            cy={140}
            r={131}
            fill="#9AB2BB"
            mask="url(#prefix__f)"
          />
          <Circle
            cx={1}
            cy={139}
            r={95}
            fill="#E8903F"
            mask="url(#prefix__f)"
          />
          <Circle
            cx={0.5}
            cy={139.5}
            r={41.5}
            fill="#FFEA87"
            mask="url(#prefix__f)"
          />
        </G>
      </G>
    </Svg>
  )
}

export default SvgComponent
