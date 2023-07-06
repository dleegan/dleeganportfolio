type Props = {
  color: string
  width?: number
  height?: number
}

const Chevron: React.FC<Props> = ({ color, width = 24, height = 24 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 9 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.24998 6.58521L-3.10421e-05 0.585206L8.5 0.585205L4.24998 6.58521Z"
        fill="white"
      />
    </svg>
  )
}

export default Chevron
