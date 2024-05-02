import { Link } from '@/components'
import { data } from '@/libs'

const { projects } = data

const Projects = () => {
  return (
    <div>
      {projects.map(({ name, description, link, type }) => (
        <div key={name}>
          <p>
            <Link href={link} target="_blank">
              {name}
            </Link>{' '}
            ({type})
          </p>
          <p>{description}</p>
        </div>
      ))}
      <br />
      <p>
        Check my{' '}
        <Link href="https://github.com/famozzy" target="_blank">
          GitHub
        </Link>{' '}
        for more projects.
      </p>
    </div>
  )
}

export default Projects
