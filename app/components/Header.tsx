"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Bell, Menu, Moon, Sun, Globe, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from 'next-themes'
import { useLanguage } from '@/lib/LanguageContext'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { NotificationSystem } from "@/components/NotificationSystem"

export default function Header() {
  const { theme, setTheme } = useTheme()
  const { t, language, setLanguage } = useLanguage()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { href: "/", label: t('home') },
    { href: "/campaigns", label: t('campaigns') },
    { href: "/kols", label: t('kols') },
    { href: "/brands", label: t('brands') },
    { href: "/subscriptions", label: t('pricing') },
    { href: "/lien-he", label: t('contact') },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-foreground transition-colors hover:text-primary">
          <span className="text-[#FFC107]">K</span>olerr
        </Link>
        
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group">
              {item.label}
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300 ease-out"></span>
              <span className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 blur-lg transition-opacity duration-300"></span>
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center space-x-4">
          <NotificationSystem />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
                <Globe className="h-5 w-5" />
                <span className="sr-only">{t('changeLanguage')}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage('vi')}>
                Tiếng Việt {language === 'vi' && '✓'}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('en')}>
                English {language === 'en' && '✓'}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button variant="ghost" size="icon" className="text-foreground hover:text-primary" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          
          <div className="hidden md:block space-x-2">
            <Button variant="outline" asChild className="text-foreground border-foreground hover:bg-foreground hover:text-black">
              <Link href="/dang-nhap">{t('login')}</Link>
            </Button>
            <Button asChild className="bg-[#FFC107] text-black hover:bg-[#FFC107]/90">
              <Link href="/dang-ky">{t('signup')}</Link>
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-foreground hover:text-primary">
                <Menu className="h-6 w-6" />
                <span className="sr-only">{t('menu')}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-black/95">
              <nav className="flex flex-col space-y-4 mt-8">
                {menuItems.map((item) => (
                  <Link key={item.href} href={item.href} className="text-lg font-medium text-foreground hover:text-primary transition-colors relative group">
                    {item.label}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300 ease-out"></span>
                    <span className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 blur-lg transition-opacity duration-300"></span>
                  </Link>
                ))}
                <Button asChild className="w-full mt-4">
                  <Link href="/dang-nhap">{t('login')}</Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/dang-ky">{t('signup')}</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

