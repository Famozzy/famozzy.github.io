import { Link } from '@/components'
import { data } from '@/libs'

const { contacts } = data

const Contact = () => {
  return (
    <>
      <p>here are some ways to contact me:{'\n'}</p>
      {contacts.map(({ name, link }) => (
        <p key={name}>
          {'- '}
          <Link href={link} target="_blank">
            {name}
          </Link>
        </p>
      ))}
    </>
  )
}

export default Contact
