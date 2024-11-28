import { Link } from '@/components'
import { data } from '@/libs'

const { contacts } = data

const Contact = () => {
  return (
    <>
      <p>here are some ways to contact me:{'\n'}</p>
      {contacts.map(({ name, link }) => (
        <p key={name}>
          {`[${name}] : `}
          <Link href={link} target="_blank">
            {link.replace(/(mailto:|https:\/\/)/, '')}
          </Link>
        </p>
      ))}
    </>
  )
}

export default Contact
