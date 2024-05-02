const NotFound = ({ command }: { command: string }) => {
  return (
    <div>
      <p>zsh: command not found: {command}</p>
      <p>Type `help` to see the list of available commands.</p>
    </div>
  )
}

export default NotFound
