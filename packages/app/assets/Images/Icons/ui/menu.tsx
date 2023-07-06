type Props = {
  color: string
  width?: number
  height?: number
}

const Menu: React.FC<Props> = ({ color, width = 24, height = 24 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0H18V2H0V0ZM0 7H18V9H0V7ZM0 14H18V16H0V14Z" fill="#607B96" />
    </svg>
  )
}

export default Menu
