import { Header, Terminal, Footer } from '@/components/main'

const App: React.FC = () => {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center px-1.5">
      <Header />
      <Terminal />
      <Footer />
    </main>
  )
}

export default App
