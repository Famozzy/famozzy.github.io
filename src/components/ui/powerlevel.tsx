import { getRandomHostname } from '@/libs'

const hostname = getRandomHostname()

const ArchIcon = () => (
  <svg
    fill="#86e1fc"
    width="12px"
    height="12px"
    viewBox="0 0 14 14"
    role="img"
    focusable="false"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#86e1fc"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <path d="m 6.999945,1.000025 c -0.53416,1.30962 -0.85671,2.16741 -1.45143,3.43809 0.36464,0.38652 0.81219,0.8345 1.53905,1.34286 -0.78145,-0.32156 -1.31403,-0.64213 -1.71238,-0.97714 -0.76113,1.5882 -1.95535,3.84813 -4.37524,8.19619 1.90161,-1.09784 3.37665,-1.77397 4.75048,-2.03238 -0.0589,-0.25367 -0.0918,-0.52896 -0.0895,-0.81524 l 0.002,-0.0591 c 0.0302,-1.21853 0.66434,-2.15695 1.41524,-2.09333 0.75089,0.0636 1.33494,1.10528 1.30476,2.32381 -0.006,0.22916 -0.031,0.44885 -0.0762,0.65333 1.3586,0.26611 2.81794,0.94016 4.69333,2.02286 -0.36995,-0.68111 -0.7018,-1.29335 -1.01714,-1.8781 -0.49672,-0.38499 -1.01365,-0.88613 -2.07048,-1.42857 0.72641,0.18875 1.24793,0.40612 1.65333,0.64953 -3.20619,-5.96938 -3.46623,-6.7627 -4.56571,-9.34286 z"></path>
    </g>
  </svg>
)

const Powerlevel = () => {
  return (
    <div className="inline-flex items-center mt-1">
      <span className=" bg-tn-highlight opacity-25">&nbsp;</span>
      <span className="bg-tn-highlight opacity-50">&nbsp;</span>
      <span className="bg-tn-highlight opacity-75">&nbsp;</span>
      <span className="flex items-center bg-tn-highlight text-tn-cyan px-2 h-5">
        <ArchIcon />
      </span>
      <span className="block bg-tn-highlight px-2">
        <span className="block w-[0.5px] h-5 rotate-[25deg] bg-tn-fg-dark"></span>
      </span>
      <span className="block bg-tn-highlight text-tn-yellow px-1.5">root@{hostname}</span>
      <span className="block bg-tn-highlight px-2">
        <span className="block w-[0.5px] h-5 rotate-[25deg] bg-tn-fg-dark"></span>
      </span>
      <span className="block bg-tn-highlight text-tn-cyan px-1.5">~</span>
      <span className="block w-0 h-0 border-solid border-b-[10px] border-b-transparent border-t-[10px] border-t-transparent border-l-[11px] border-l-tn-highlight mr-1.5"></span>
    </div>
  )
}

export default Powerlevel
