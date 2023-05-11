type Props = {
  color: string
  width?: number
  height?: number
}

const Facebook: React.FC<Props> = ({ color, width = 24, height = 24 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_11049_725)">
        <path
          d="M14 14H16.5L17.5 10H14V8C14 6.97 14 6 16 6H17.5V2.64C17.174 2.597 15.943 2.5 14.643 2.5C11.928 2.5 10 4.157 10 7.2V10H7V14H10V22.5H14V14Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_11049_725">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Facebook
