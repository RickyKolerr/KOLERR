'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { useLanguage } from '@/lib/LanguageContext'
import { Loader2 } from 'lucide-react'

const PAYMENT_METHODS = [
  {
    id: 'momo',
    name: 'Momo',
    logo: '/momo-logo.svg',
    description: 'Thanh toán qua ví Momo'
  },
  {
    id: 'vnpay',
    name: 'VNPay',
    logo: '/vnpay-logo.svg',
    description: 'Thanh toán qua VNPay QR'
  },
  {
    id: 'zalopay',
    name: 'ZaloPay',
    logo: '/zalopay-logo.svg',
    description: 'Thanh toán qua ví ZaloPay'
  },
  {
    id: 'credit-card',
    name: 'Credit Card',
    logo: '/credit-card.svg',
    description: 'Visa, Mastercard, JCB'
  },
  {
    id: 'bank-transfer',
    name: 'Bank Transfer',
    logo: '/bank-transfer.svg',
    description: 'Chuyển khoản ngân hàng'
  }
]

export default function PaymentCheckout() {
  const searchParams = useSearchParams()
  const plan = searchParams.get('plan')
  const price = searchParams.get('price')
  const [selectedMethod, setSelectedMethod] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const { t } = useLanguage()

  const handlePayment = async () => {
    setIsProcessing(true)
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsProcessing(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-12">
      <div className="container max-w-3xl mx-auto px-4">
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">{t('completePayment')}</h1>
            <p className="text-muted-foreground">
              {t('selectPaymentMethod')}
            </p>
          </div>

          <div className="grid gap-6">
            <Card className="bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle>{t('orderSummary')}</CardTitle>
                <CardDescription>{t('planDetails')}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{plan} Plan</span>
                  <span className="text-xl font-bold">{price}</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span>{t('total')}</span>
                    <span className="text-2xl font-bold text-primary">{price}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle>{t('paymentMethod')}</CardTitle>
                <CardDescription>{t('choosePaymentMethod')}</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={selectedMethod}
                  onValueChange={setSelectedMethod}
                  className="space-y-4"
                >
                  {PAYMENT_METHODS.map((method) => (
                    <Label
                      key={method.id}
                      className="flex items-center space-x-4 p-4 border rounded-lg cursor-pointer hover:bg-accent"
                    >
                      <RadioGroupItem value={method.id} id={method.id} />
                      <div className="flex items-center space-x-4 flex-1">
                        <div className="w-12 h-12 relative">
                          <Image
                            src={method.logo}
                            alt={method.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="space-y-1">
                          <p className="font-medium">{method.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {method.description}
                          </p>
                        </div>
                      </div>
                    </Label>
                  ))}
                </RadioGroup>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  size="lg"
                  disabled={!selectedMethod || isProcessing}
                  onClick={handlePayment}
                >
                  {isProcessing && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {isProcessing ? t('processing') : t('payNow')}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

