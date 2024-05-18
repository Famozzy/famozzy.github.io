const WhoAmI = () => {
  const texts = [
    `Hello there, I'm ${btoa('Faidil')} 👋`,
    "I'm full stack developer based in Indonesia",
    'Love to code and build things that can help people.'
  ]

  return (
    <div>
      {texts.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </div>
  )
}

export default WhoAmI
