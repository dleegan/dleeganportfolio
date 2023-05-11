import Facebook from './facebook'
import Github from './github'
import Twitter from './twitter'

export default {
  facebook: (color: string) => <Facebook color={color} />,
  twitter: (color: string) => <Twitter color={color} />,
  github: (color: string) => <Github color={color} />,
}
