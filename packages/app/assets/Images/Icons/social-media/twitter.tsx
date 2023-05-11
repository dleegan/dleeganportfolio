type Props = {
  color: string
  width?: number
  height?: number
}

const Twitter: React.FC<Props> = ({ color, width = 24, height = 24 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_11049_721)">
        <path
          d="M22.383 6.15599C21.6196 6.49368 20.81 6.71546 19.981 6.81399C20.8548 6.29142 21.5087 5.469 21.821 4.49999C21.001 4.98799 20.102 5.32999 19.165 5.51499C18.5356 4.84157 17.7014 4.39495 16.792 4.24457C15.8826 4.09419 14.9489 4.24848 14.1363 4.68344C13.3236 5.1184 12.6774 5.80967 12.2981 6.64978C11.9188 7.48989 11.8277 8.43177 12.039 9.32899C10.3761 9.24564 8.74933 8.81351 7.26429 8.06065C5.77924 7.30779 4.46913 6.25104 3.419 4.95899C3.04729 5.59744 2.85196 6.32321 2.853 7.06199C2.853 8.51199 3.591 9.79299 4.713 10.543C4.04901 10.5221 3.39963 10.3428 2.819 10.02V10.072C2.8192 11.0377 3.15337 11.9736 3.76485 12.721C4.37633 13.4685 5.22748 13.9815 6.174 14.173C5.55761 14.34 4.91131 14.3646 4.284 14.245C4.55087 15.0762 5.07101 15.8032 5.77159 16.3241C6.47218 16.845 7.31813 17.1338 8.191 17.15C7.32348 17.8313 6.33018 18.335 5.26788 18.6322C4.20558 18.9293 3.09513 19.0142 2 18.882C3.9117 20.1114 6.1371 20.7641 8.41 20.762C16.103 20.762 20.31 14.389 20.31 8.86199C20.31 8.68199 20.305 8.49999 20.297 8.32199C21.1159 7.73016 21.8226 6.99701 22.384 6.15699L22.383 6.15599Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_11049_721">
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

export default Twitter