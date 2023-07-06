import ChevronFull from './chevron-full'
import ChevronRight from './chevron-right'
import Close from './close'
import Folder from './folder'
import Link from './link'
import Menu from './menu'
import File from './file'

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
  [`chevron-right`]: (color: string, width?: number, height?: number) => (
    <ChevronRight color={color} width={width} height={height} />
  ),
  folder: (color: string, width?: number, height?: number) => (
    <Folder color={color} width={width} height={height} />
  ),
  file: (color: string, width?: number, height?: number) => (
    <File color={color} width={width} height={height} />
  ),
}
