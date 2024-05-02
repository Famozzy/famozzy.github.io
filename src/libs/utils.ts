export function normalizeWhitespace(text: string) {
  return text.replace(/\s+/g, ' ').trim()
}

export function getRandomHostname(): string {
  // spirit names from Date A Live
  const hostnames = ['kurumi', 'mukuro', 'yoshino', 'kotori', 'tohka', 'origami', 'natsumi', 'kaguya', 'yuzuru']
  return hostnames[Math.floor(Math.random() * hostnames.length)]
}
