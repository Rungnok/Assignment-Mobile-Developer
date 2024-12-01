import Svg, {Path} from 'react-native-svg';
import {IconComponentsType} from './type';

export default function CheckIcon({color, width, height}: IconComponentsType) {
  return (
    <Svg width={width} height={height} viewBox="0 0 44 33" fill="none">
      <Path
        d="M43.3077 2.48005L14.3316 31.5877C13.7656 32.1555 12.8488 32.1555 12.2829 31.5877L0.692414 19.9446C0.143452 19.3733 0.151234 18.4658 0.7101 17.9044C1.26897 17.343 2.17235 17.3352 2.74112 17.8866L13.3072 28.5007L41.259 0.422043C41.8278 -0.129411 42.7311 -0.121594 43.29 0.439809C43.8489 1.00121 43.8567 1.90869 43.3077 2.48005Z"
        fill={color}
      />
    </Svg>
  );
}
