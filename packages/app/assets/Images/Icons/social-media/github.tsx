type Props = {
  color: string
  width?: number
  height?: number
}

const Github: React.FC<Props> = ({ color, width = 24, height = 24 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_11049_711)">
        <path
          d="M12.9766 2.27808C7.45156 2.27808 2.97656 6.75308 2.97656 12.2781C2.97543 14.3774 3.63538 16.4237 4.86278 18.1268C6.09018 19.8298 7.82271 21.1031 9.81456 21.7661C10.3146 21.8531 10.5016 21.5531 10.5016 21.2901C10.5016 21.0531 10.4886 20.2661 10.4886 19.4281C7.97656 19.8911 7.32656 18.8161 7.12656 18.2531C7.01356 17.9651 6.52656 17.0781 6.10156 16.8401C5.75156 16.6531 5.25156 16.1901 6.08856 16.1781C6.87656 16.1651 7.43856 16.9031 7.62656 17.2031C8.52656 18.7151 9.96456 18.2901 10.5386 18.0281C10.6266 17.3781 10.8886 16.9411 11.1766 16.6911C8.95156 16.4411 6.62656 15.5781 6.62656 11.7531C6.62656 10.6651 7.01356 9.76608 7.65156 9.06508C7.55156 8.81508 7.20156 7.79008 7.75156 6.41508C7.75156 6.41508 8.58856 6.15308 10.5016 7.44108C11.3156 7.21514 12.1567 7.10142 13.0016 7.10308C13.8516 7.10308 14.7016 7.21508 15.5016 7.44008C17.4136 6.14008 18.2516 6.41608 18.2516 6.41608C18.8016 7.79108 18.4516 8.81608 18.3516 9.06608C18.9886 9.76608 19.3766 10.6531 19.3766 11.7531C19.3766 15.5911 17.0396 16.4411 14.8146 16.6911C15.1766 17.0031 15.4896 17.6031 15.4896 18.5411C15.4896 19.8781 15.4766 20.9531 15.4766 21.2911C15.4766 21.5531 15.6646 21.8651 16.1646 21.7651C18.1496 21.0949 19.8745 19.8191 21.0965 18.1172C22.3184 16.4154 22.976 14.3732 22.9766 12.2781C22.9766 6.75308 18.5016 2.27808 12.9766 2.27808Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_11049_711">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.976562 0.278076)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Github
