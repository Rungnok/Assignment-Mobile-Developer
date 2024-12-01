import Svg, {Path} from 'react-native-svg';
import {IconComponentsType} from './type';

export default function SuccessIcon({color, width, height}: IconComponentsType) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 132 132"
      fill="none">
      <Path
        d="M66 2C30.654 2 2 30.654 2 66C2 101.346 30.654 130 66 130C101.346 130 130 101.346 130 66C129.96 30.6708 101.329 2.04018 66 2Z"
        stroke={color}
        stroke-width="3"
      />
      <Path
        d="M87.3077 52.48L58.3316 81.5877C57.7656 82.1555 56.8488 82.1555 56.2829 81.5877L44.6924 69.9446C44.1435 69.3733 44.1512 68.4658 44.7101 67.9044C45.269 67.343 46.1723 67.3352 46.7411 67.8866L57.3072 78.5007L85.259 50.422C85.8278 49.8706 86.7311 49.8784 87.29 50.4398C87.8489 51.0012 87.8567 51.9087 87.3077 52.48Z"
        fill={color}
      />
    </Svg>
  );
}
