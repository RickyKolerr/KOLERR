import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import AddToHomeScreenPrompt from './AddToHomeScreenPrompt'

interface AppShellProps {
  children: React.ReactNode
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
      <AddToHomeScreenPrompt />
    </div>
  )
}

