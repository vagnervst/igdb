import {
  FaPlaystation,
  FaSteam,
  FaXbox,
  FaAndroid,
  FaApple,
} from 'react-icons/fa'
import { includes } from 'ramda'

const isPlaystation = value => includes(value, ['PS4', 'PS5'])
const isXbox = value => includes(value, ['X360', 'XONE'])
const isPC = value => includes(value, ['PC', 'Mac'])

const PlatformIcon = ({ platform }) => {
  const props = {
    size: 24,
  }

  if (isPC(platform)) {
    return <FaSteam {...props} />
  }

  if (isPlaystation(platform)) {
    return <FaPlaystation {...props} />
  }

  if (isXbox(platform)) {
    return <FaXbox {...props} />
  }

  if (includes(platform, ['Android'])) {
    return <FaAndroid {...props} />
  }

  if (includes(platform, ['iOS'])) {
    return <FaApple {...props} />
  }

  return <p>{platform}</p>
}

export default PlatformIcon
