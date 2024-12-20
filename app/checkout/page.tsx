'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useLanguage } from '@/lib/LanguageContext'

export default function CheckoutPage() {
  const { t } = useLanguage()
  const searchParams = useSearchParams()
  const plan = searchParams.get('plan')
  const [paymentMethod, setPaymentMethod] = useState('credit-card')

  const getPlanDetails = (planName) => {
    switch (planName) {
      case 'starter':
        return { name: 'Starter', price: '500,000' }
      case 'professional':
        return { name: 'Professional', price: '1,500,000' }
      case 'enterprise':
        return { name: 'Enterprise', price: 'Liên hệ' }
      default:
        return { name: 'Unknown', price: 'N/A' }
    }
  }

  const planDetails = getPlanDetails(plan)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-[#FFC107]">{t('checkout')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-[#111111] border border-[#FFC107] p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-[#FFC107]">{t('orderSummary')}</h2>
            <p className="text-white">{t('plan')}: {planDetails.name}</p>
            <p className="text-white">{t('price')}: ₫{planDetails.price
}/tháng</p>
          </div>
          <div className="bg-[#111111] border border-[#FFC107] p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-[#FFC107]">{t('paymentMethod')}</h2>
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="credit-card" id="credit-card" className="border-[#FFC107]" />
                <Label htmlFor="credit-card" className="text-white">{t('creditCard')}</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="paypal" id="paypal" className="border-[#FFC107]" />
                <Label htmlFor="paypal" className="text-white">PayPal</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="bank-transfer" id="bank-transfer" className="border-[#FFC107]" />
                <Label htmlFor="bank-transfer" className="text-white">{t('bankTransfer')}</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
        <div className="bg-[#111111] border border-[#FFC107] p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-[#FFC107]">{t('billingInformation')}</h2>
          <form className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-white">{t('fullName')}</Label>
              <Input id="name" className="bg-[#222] border-[#FFC107] text-white" />
            </div>
            <div>
              <Label htmlFor="email" className="text-white">{t('email')}</Label>
              <Input id="email" type="email" className="bg-[#222] border-[#FFC107] text-white" />
            </div>
            <div>
              <Label htmlFor="address" className="text-white">{t('address')}</Label>
              <Input id="address" className="bg-[#222] border-[#FFC107] text-white" />
            </div>
            <div>
              <Label htmlFor="city" className="text-white">{t('city')}</Label>
              <Input id="city" className="bg-[#222] border-[#FFC107] text-white" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="state" className="text-white">{t('state')}</Label>
                <Input id="state" className="bg-[#222] border-[#FFC107] text-white" />
              </div>
              <div>
                <Label htmlFor="zip" className="text-white">{t('zipCode')}</Label>
                <Input id="zip" className="bg-[#222] border-[#FFC107] text-white" />
              </div>
            </div>
            <Button className="w-full bg-[#D72670] hover:bg-[#D72670]/90 text-white">{t('completePayment')}</Button>
          </form>
        </div>
      </div>
    </div>
  )
}

