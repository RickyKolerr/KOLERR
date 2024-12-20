'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { LearnMoreModal } from '@/components/LearnMoreModal'
import { useLanguage } from '@/lib/LanguageContext'
import { motion } from 'framer-motion'

export default function Home() {
  const { t } = useLanguage()
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D72670]/20 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FFC107]/20 via-transparent to-transparent transform translate-x-full"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            {/* Logo */}
            <div className="relative w-64 h-64 mx-auto group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#D72670] via-[#FFC107] to-[#00FFFF] rounded-lg opacity-75 blur-xl group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-black p-8 rounded-lg border border-white/10">
                <h1 className="text-6xl font-bold">
                  <span className="text-[#FFC107]">K</span>OLERR
                </h1>
              </div>
            </div>

            {/* Tagline */}
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-2xl md:text-4xl font-light text-foreground"
            >
              {t('heroSubtitle')}
            </motion.h2>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="max-w-3xl mx-auto"
            >
              <div className="relative">
                <Input 
                  type="text" 
                  placeholder={t('searchPlaceholder')} 
                  className="w-full py-6 pl-12 pr-4 text-foreground bg-background/50 border-2 border-[#D72670] rounded-full focus:outline-none focus:border-[#FFC107] backdrop-blur-sm"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60" />
                <Button 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#D72670] hover:bg-[#D72670]/90 text-white rounded-full px-6 py-2"
                >
                  {t('search')}
                </Button>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col md:flex-row justify-center items-center gap-4"
            >
              <Link href="/register" passHref>
                <Button 
                  className="relative group bg-black text-white border-0 px-8 py-6 text-lg rounded-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D72670] via-[#FFC107] to-[#00FFFF] opacity-75 group-hover:opacity-100 blur-md transition-opacity duration-300 rounded-full"></div>
                  <span className="relative z-10 flex items-center">
                    {t('getStarted')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                </Button>
              </Link>
              <Button 
                onClick={() => setIsModalOpen(true)} 
                variant="outline" 
                className="border-[#D72670] text-white hover:bg-[#D72670] hover:text-white text-lg px-8 py-6 rounded-full transition-all duration-300"
              >
                {t('learnMore')}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section with Neon Glow */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#FFC107]">{t('whyChooseKolerr')}</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: t('aiMatchmaking'), desc: t('aiMatchmakingDesc') },
              { title: t('globalReach'), desc: t('globalReachDesc') },
              { title: t('securePayments'), desc: t('securePaymentsDesc') },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#D72670] via-[#FFC107] to-[#00FFFF] opacity-0 group-hover:opacity-75 blur-xl transition-opacity duration-300"></div>
                <div className="relative bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-white/10">
                  <h3 className="text-xl font-bold mb-4 text-[#FFC107]">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories with Neon Effect */}
      <section className="relative py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 text-[#FFC107]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t('successStories')}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#D72670] via-[#FFC107] to-[#00FFFF] opacity-0 group-hover:opacity-75 blur-xl transition-opacity duration-300"></div>
                <div className="relative bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                  <p className="text-foreground mb-4">"{t(`successStory${index + 1}`)}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#D72670] rounded-full mr-4"></div>
                    <div>
                      <p className="font-semibold text-foreground">{t(`successName${index + 1}`)}</p>
                      <p className="text-sm text-muted-foreground">{t(`successRole${index + 1}`)}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Gradient Background */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#D72670] via-[#FFC107] to-[#00FFFF] opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2 
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t('readyToElevate')}
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {t('joinKolerr')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/register" passHref>
              <Button 
                className="relative group bg-black text-white border-0 px-8 py-6 text-lg rounded-full"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#D72670] via-[#FFC107] to-[#00FFFF] opacity-75 group-hover:opacity-100 blur-md transition-opacity duration-300 rounded-full"></div>
                <span className="relative z-10 flex items-center">
                  {t('signUpNow')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <LearnMoreModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

