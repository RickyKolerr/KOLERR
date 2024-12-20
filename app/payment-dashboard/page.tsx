'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useLanguage } from '@/lib/LanguageContext'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Jan', income: 4000, expenses: 2400 },
  { name: 'Feb', income: 3000, expenses: 1398 },
  { name: 'Mar', income: 2000, expenses: 9800 },
  { name: 'Apr', income: 2780, expenses: 3908 },
  { name: 'May', income: 1890, expenses: 4800 },
  { name: 'Jun', income: 2390, expenses: 3800 },
]

export default function PaymentDashboardPage() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-[#FFC107]">{t('paymentDashboard')}</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="bg-[#111111] border-[#FFC107]">
          <TabsTrigger value="overview" className="data-[state=active]:bg-[#FFC107] data-[state=active]:text-black">
            {t('overview')}
          </TabsTrigger>
          <TabsTrigger value="transactions" className="data-[state=active]:bg-[#FFC107] data-[state=active]:text-black">
            {t('transactions')}
          </TabsTrigger>
          <TabsTrigger value="invoices" className="data-[state=active]:bg-[#FFC107] data-[state=active]:text-black">
            {t('invoices')}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-[#111111] border-[#FFC107]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-[#FFC107]">{t('totalEarnings')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">$45,231.89</div>
                <p className="text-xs text-[#D72670]">{t('increased')} 20.1% {t('fromLastMonth')}</p>
              </CardContent>
            </Card>
            <Card className="bg-[#111111] border-[#FFC107]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-[#FFC107]">{t('pendingPayouts')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">$12,234.56</div>
                <p className="text-xs text-[#D72670]">{t('processingIn')} 3 {t('days')}</p>
              </CardContent>
            </Card>
            <Card className="bg-[#111111] border-[#FFC107]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-[#FFC107]">{t('completedCampaigns')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">24</div>
                <p className="text-xs text-[#D72670]">+3 {t('thisMonth')}</p>
              </CardContent>
            </Card>
            <Card className="bg-[#111111] border-[#FFC107]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-[#FFC107]">{t('averageEarningPerCampaign')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">$1,884.66</div>
                <p className="text-xs text-[#D72670]">{t('increased')} 7.2% {t('fromLastMonth')}</p>
              </CardContent>
            </Card>
          </div>
          <Card className="bg-[#111111] border-[#FFC107]">
            <CardHeader>
              <CardTitle className="text-[#FFC107]">{t('earningsOverTime')}</CardTitle>
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
                  <Bar dataKey="income" fill="#005B96" name={t('income')} />
                  <Bar dataKey="expenses" fill="#D72670" name={t('expenses')} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="transactions" className="space-y-4">
          <Card className="bg-[#111111] border-[#FFC107]">
            <CardHeader>
              <CardTitle className="text-[#FFC107]">{t('recentTransactions')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white">{t('transactionsContent')}</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="invoices" className="space-y-4">
          <Card className="bg-[#111111] border-[#FFC107]">
            <CardHeader>
              <CardTitle className="text-[#FFC107]">{t('invoices')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white">{t('invoicesContent')}</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

