import AsciiLogo from '@/assets/ascii-logo.png'

const Header = () => {
  return (
    <div className="text-center px-6 mb-8">
      <img src={AsciiLogo} alt="ascii logo" width={640} />
      <span className="text-sm text-tn-fg-dark block mt-2 text-tn-gutter">Full Stack Developer && FOSS Enthusiast</span>
    </div>
  )
}

export default Header
