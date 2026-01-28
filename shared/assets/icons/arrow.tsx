const ArrowBTN = ({isProductDropdownOpen}:{isProductDropdownOpen:boolean})=><svg
    viewBox="0 0 20 20"
fill="currentColor"
className={`size-5 flex-none text-gray-400 transition-transform ${
    isProductDropdownOpen ? 'rotate-180' : ''
}`}
aria-hidden="true"
>
<path
    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
clipRule="evenodd"
fillRule="evenodd"
    />
    </svg>
export default ArrowBTN