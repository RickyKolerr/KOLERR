'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useLanguage } from '@/lib/LanguageContext'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { OnboardingExperience } from '@/components/OnboardingExperience'

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 200 },
  { name: 'Apr', value: 278 },
  { name: 'May', value: 189 },
  { name: 'Jun', value: 239 },
]

export default function DashboardPage() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState('overview')
  const [showOnboarding, setShowOnboarding] = useState(false)

  useEffect(() => {
    // Check if it's the user's first login
    const isFirstLogin = localStorage.getItem('isFirstLogin') !== 'false'
    if (isFirstLogin) {
      setShowOnboarding(true)
      localStorage.setItem('isFirstLogin', 'false')
    }
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-[#FFC107]">{t('dashboard')}</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="bg-[#111111] border-[#FFC107]">
          <TabsTrigger value="overview" className="data-[state=active]:bg-[#FFC107] data-[state=active]:text-black">
            {t('overview')}
          </TabsTrigger>
          <TabsTrigger value="campaigns" className="data-[state=active]:bg-[#FFC107] data-[state=active]:text-black">
            {t('campaigns')}
          </TabsTrigger>
          <TabsTrigger value="analytics" className="data-[state=active]:bg-[#FFC107] data-[state=active]:text-black">
            {t('analytics')}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-[#111111] border-[#FFC107]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-[#FFC107]">{t('totalRevenue')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">$45,231.89</div>
                <p className="text-xs text-[#D72670]">{t('increased')} 20.1%</p>
              </CardContent>
            </Card>
            <Card className="bg-[#111111] border-[#FFC107]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-[#FFC107]">{t('activeCampaigns')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">12</div>
                <p className="text-xs text-[#D72670]">{t('increased')} 10%</p>
              </CardContent>
            </Card>
            <Card className="bg-[#111111] border-[#FFC107]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-[#FFC107]">{t('totalEngagements')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">1,234,567</div>
                <p className="text-xs text-[#D72670]">{t('increased')} 15.3%</p>
              </CardContent>
            </Card>
            <Card className="bg-[#111111] border-[#FFC107]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-[#FFC107]">{t('averageROI')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">320%</div>
                <p className="text-xs text-[#D72670]">{t('increased')} 5.2%</p>
              </CardContent>
            </Card>
          </div>
          <Card className="bg-[#111111] border-[#FFC107]">
            <CardHeader>
              <CardTitle className="text-[#FFC107]">{t('revenueOverTime')}</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="name" stroke="#FFC107" />
                  <YAxis stroke="#FFC107" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#111', border: '1px solid #FFC107' }}
                    labelStyle={{ color: '#FFC107' }}
                  />
                  <Bar dataKey="value" fill="#005B96" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="campaigns" className="space-y-4">
          <Card className="bg-[#111111] border-[#FFC107]">
            <CardHeader>
              <CardTitle className="text-[#FFC107]">{t('activeCampaigns')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white">{t('campaignsContent')}</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <Card className="bg-[#111111] border-[#FFC107]">
            <CardHeader>
              <CardTitle className="text-[#FFC107]">{t('analyticsOverview')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white">{t('analyticsContent')}</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      {showOnboarding && (
        <OnboardingExperience onComplete={() => setShowOnboarding(false)} />
      )}
    </div>
  )
}

