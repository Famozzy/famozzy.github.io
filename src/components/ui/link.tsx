type LinkProps = {
  href: string
  children: React.ReactNode
  target?: '_blank' | '_self' | '_parent' | '_top'
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

const Link: React.FC<LinkProps> = ({ href, children, target }) => {
  return (
    <a href={href} target={target} className="underline text-tn-fg-dark" rel="noopener noreferrer">
      {children}
    </a>
  )
}

export default Link
