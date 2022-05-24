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
      width={300}
      height={300}
      viewBox="0 0 336 336"
      {...props}
    >
      <Defs>
        <Circle id="prefix__a" cx={168} cy={168} r={168} />
        <Circle id="prefix__c" cx={168} cy={168} r={168} />
        <Circle id="prefix__e" cx={168} cy={168} r={168} />
        <Circle id="prefix__g" cx={168} cy={168} r={168} />
        <Path
          id="prefix__i"
          d="M0 0c88.918 0 161 72.082 161 161S88.918 322 0 322z"
        />
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Circle cx={168} cy={168} r={168} fill="#FF6A45" fillRule="nonzero" />
        <Mask id="prefix__b" fill="#fff">
          <Use xlinkHref="#prefix__a" />
        </Mask>
        <Path
          fill="#FF9B6B"
          fillRule="nonzero"
          d="M102 36c0-6.627-5.373-12-12-12H55c-6.627 0-12-5.373-12-12S48.373 0 55 0h156c6.627 0 12 5.373 12 12s-5.373 12-12 12h-56l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.5 11.99V48h13c6.627 0 12 5.373 12 12s-5.373 12-12 12H41c-6.627 0-12-5.373-12-12s5.373-12 12-12h49c6.627 0 12-5.373 12-12zm172 12c6.627 0 12 5.373 12 12s-5.373 12-12 12h-5c-6.627 0-12-5.373-12-12s5.373-12 12-12h5z"
          mask="url(#prefix__b)"
        />
        <Mask id="prefix__d" fill="#fff">
          <Use xlinkHref="#prefix__c" />
        </Mask>
        <Path
          fill="#FF9B6B"
          fillRule="nonzero"
          d="M209 324c0-6.627-5.373-12-12-12h-35c-6.627 0-12-5.373-12-12s5.373-12 12-12h156c6.627 0 12 5.373 12 12s-5.373 12-12 12h-56l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.499 11.99v.01H275c6.627 0 12 5.373 12 12s-5.373 12-12 12H148c-6.627 0-12-5.373-12-12s5.373-12 12-12h49c6.627 0 12-5.373 12-12zm172 12c6.627 0 12 5.373 12 12s-5.373 12-12 12h-5c-6.627 0-12-5.373-12-12s5.373-12 12-12h5z"
          mask="url(#prefix__d)"
        />
        <Mask id="prefix__f" fill="#fff">
          <Use xlinkHref="#prefix__e" />
        </Mask>
        <Path
          fill="#D04237"
          fillRule="nonzero"
          d="M217 264c6.627 0 12 5.373 12 12s-5.373 12-12 12h-62c-6.627 0-12-5.373-12-12s5.373-12 12-12h62zm-117 0c6.627 0 12 5.373 12 12s-5.373 12-12 12H80c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zm163-96c6.627 0 12 5.373 12 12s-5.373 12-12 12H112l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.499 11.99l.001.01h19c6.627 0 12 5.373 12 12s-5.373 12-12 12H11c-6.627 0-12-5.373-12-12s5.373-12 12-12h32c6.627 0 12-5.373 12-12s-5.373-12-12-12h-64c-6.627 0-12-5.373-12-12s5.373-12 12-12h284zm-52 48c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zM139 72c6.627 0 12 5.373 12 12s-5.373 12-12 12H99c-6.627 0-12-5.373-12-12s5.373-12 12-12h40zm209 0c6.627 0 12 5.373 12 12s-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12s5.373-12 12-12h40z"
          mask="url(#prefix__f)"
        />
        <Mask id="prefix__h" fill="#fff">
          <Use xlinkHref="#prefix__g" />
        </Mask>
        <Path
          fill="#000"
          fillRule="nonzero"
          mask="url(#prefix__h)"
          opacity={0.078}
          d="M169-16h184v368H169z"
        />
        <G transform="translate(169 7)">
          <Mask id="prefix__j" fill="#fff">
            <Use xlinkHref="#prefix__i" />
          </Mask>
          <Use fill="#97271E" xlinkHref="#prefix__i" />
          <Circle
            cx={1}
            cy={161}
            r={154}
            fill="#DC5D1C"
            mask="url(#prefix__j)"
          />
          <Circle
            cx={1}
            cy={161}
            r={79}
            fill="#F8A053"
            mask="url(#prefix__j)"
          />
          <Circle
            cx={1}
            cy={161}
            r={54}
            fill="#FFCA79"
            mask="url(#prefix__j)"
          />
          <Circle
            cx={1}
            cy={162}
            r={40}
            fill="#FFF5C6"
            mask="url(#prefix__j)"
          />
        </G>
      </G>
    </Svg>
  )
}

export default SvgComponent
