import Link from '../ui/link'

const Footer = () => {
  return (
    <footer className="fixed bottom-4 text-sm text-tn-fg-dark">
      <span>
        © {new Date().getFullYear()}{' '}
        <Link href="https://github.com/Famozzy/famozzy.github.io" target="_blank">
          famozzy.github.io
        </Link>
      </span>
    </footer>
  )
}

export default Footer
