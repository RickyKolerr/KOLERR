import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gradient-to-r from-primary to-secondary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('aboutKolerr')}</h3>
            <p className="text-sm">{t('kolerDescription')}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm hover:underline">{t('aboutUs')}</Link></li>
              <li><Link href="/faq" className="text-sm hover:underline">{t('faq')}</Link></li>
              <li><Link href="/terms" className="text-sm hover:underline">{t('termsOfService')}</Link></li>
              <li><Link href="/privacy" className="text-sm hover:underline">{t('privacyPolicy')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('connectWithUs')}</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accent transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 Kolerr. {t('allRightsReserved')}.</p>
        </div>
      </div>
    </footer>
  )
}

