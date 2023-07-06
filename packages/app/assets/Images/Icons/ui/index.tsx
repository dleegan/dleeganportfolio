import Chevron from './chevron'
import Close from './close'
import Menu from './menu'

export default {
  chevron: (color: string) => <Chevron color={color} />,
  menu: (color: string, width?: number, height?: number) => (
    <Menu color={color} width={width} height={height} />
  ),
  close: (color: string, width?: number, height?: number) => (
    <Close color={color} width={width} height={height} />
  ),
}
