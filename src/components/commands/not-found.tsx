const NotFound = ({ command }: { command: string }) => {
  return (
    <>
      <p>zsh: command not found: {command}</p>
      <p>Type `help` to see the list of available commands.</p>
    </>
  )
}

export default NotFound
