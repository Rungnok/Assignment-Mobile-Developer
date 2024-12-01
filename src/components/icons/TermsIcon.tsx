import Svg, {Path} from 'react-native-svg';
import {IconComponentsType} from './type';

export default function TermsIcon({color, width, height}: IconComponentsType) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M21.3119 13.0346V19.9311C21.1814 20.6318 20.6332 21.18 19.9326 21.3104H3.38085C3.00982 21.3284 2.64847 21.1888 2.38581 20.9262C2.12315 20.6635 1.9836 20.3022 2.00154 19.9311V11.6553"
        stroke={color}
        stroke-width="1.37931"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M6.31189 10.5H16.9991"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M6.31189 7H10.9991"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M6.31189 13.5H16.9991"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M6.31189 16.5H16.9991"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M2.00153 8.89655V3.37931C2.06567 2.64575 2.64727 2.06414 3.38084 2H19.9326C20.6943 2 21.3119 2.61754 21.3119 3.37931V10.2759"
        stroke={color}
        stroke-width="1.37931"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
