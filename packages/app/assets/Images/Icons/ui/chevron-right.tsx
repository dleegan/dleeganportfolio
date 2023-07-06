type Props = {
  color: string
  width?: number
  height?: number
}

const ChevronRight: React.FC<Props> = ({ color, width = 24, height = 24 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 9 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.69609 7.18971L0.746093 2.23971L2.16009 0.82571L8.52409 7.18971L2.16009 13.5537L0.746094 12.1397L5.69609 7.18971Z"
        fill="#607B96"
      />
    </svg>
  )
}

export default ChevronRight
