import { Header, Terminal, Footer } from '@/components/main'

const App: React.FC = () => {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center px-4">
      <Header />
      <Terminal />
      <Footer />
    </main>
  )
}

export default App
