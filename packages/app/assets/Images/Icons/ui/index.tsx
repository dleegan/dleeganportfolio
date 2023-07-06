import ChevronFull from './chevron-full'
import Close from './close'
import Link from './link'
import Menu from './menu'

export default {
  [`chevron-full`]: (color: string, width?: number, height?: number) => (
    <ChevronFull color={color} width={width} height={height} />
  ),
  menu: (color: string, width?: number, height?: number) => (
    <Menu color={color} width={width} height={height} />
  ),
  close: (color: string, width?: number, height?: number) => (
    <Close color={color} width={width} height={height} />
  ),
  link: (color: string, width?: number, height?: number) => (
    <Link color={color} width={width} height={height} />
  ),
}
