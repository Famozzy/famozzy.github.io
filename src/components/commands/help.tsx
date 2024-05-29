const commandList = ['whoami', 'projects', 'contact', 'help', 'clear']

const Help = () => {
  return (
    <>
      <p>The following commands are available:</p>
      {commandList.map((command, index) => (
        <p key={index}>{command}</p>
      ))}
    </>
  )
}

export default Help
