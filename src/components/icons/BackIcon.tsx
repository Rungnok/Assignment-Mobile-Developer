import Svg, {Path} from 'react-native-svg';
import {IconComponentsType} from './type';

export default function BackIcon({color, width, height}: IconComponentsType) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.2122 19.7416C11.5517 19.4117 11.5596 18.8691 11.2298 18.5295L6.38269 13.5399H20.6408C21.1141 13.5399 21.4979 13.1561 21.4979 12.6827C21.4979 12.2094 21.1141 11.8256 20.6408 11.8256H6.38269L11.2298 6.83598C11.5596 6.49643 11.5517 5.95377 11.2122 5.62392C10.8726 5.29408 10.33 5.30194 10.0001 5.64149L3.23161 12.6091C3.19176 12.6501 3.19176 12.7154 3.23161 12.7564L10.0001 19.724C10.33 20.0636 10.8726 20.0714 11.2122 19.7416Z"
        fill={color}
      />
    </Svg>
  );
}
