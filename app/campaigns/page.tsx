import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Filters } from "@/components/Filters"

export default function ExploreCampaigns() {
  const campaigns = [
    { id: 1, title: 'Summer Fashion Campaign', industry: 'Fashion', budget: '5000000', duration: '30 days', image: '/placeholder.svg', isSlot: true },
    { id: 2, title: 'Healthy Lifestyle Promotion', industry: 'Health', budget: '3000000', duration: '15 days', image: '/placeholder.svg', isSlot: false },
    { id: 3, title: 'Tech Gadget Launch', industry: 'Technology', budget: '10000000', duration: '45 days', image: '/placeholder.svg', isSlot: true },
    { id: 4, title: 'Eco-Friendly Product Line', industry: 'Environment', budget: '7000000', duration: '60 days', image: '/placeholder.svg', isSlot: false },
    { id: 5, title: 'Gourmet Food Festival', industry: 'Food & Beverage', budget: '8000000', duration: '10 days', image: '/placeholder.svg', isSlot: true },
    { id: 6, title: 'Fitness App Promotion', industry: 'Health & Fitness', budget: '6000000', duration: '30 days', image: '/placeholder.svg', isSlot: false },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-[#FFC107]">Campaigns</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <Filters type="ai" />
        </div>
        <div className="lg:col-span-3">
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">AI Matchmaking Search</h2>
            <div className="flex gap-4">
              <Input
                placeholder="Tìm chiến dịch phù hợp với bạn..."
                className="flex-grow"
              />
              <Button>Tìm kiếm</Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {campaigns.map((campaign) => (
              <Card key={campaign.id} className="bg-[#111111] border-[#FFC107] hover:border-[#D72670] transition-colors flex flex-col">
                <CardHeader>
                  <CardTitle className="text-[#FFC107]">{campaign.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <img src={campaign.image} alt={campaign.title} className="w-full h-40 object-cover mb-4 rounded-md" />
                  <div className="space-y-1 text-sm">
                    <p className="text-muted-foreground">Ngành: {campaign.industry}</p>
                    <p className="text-muted-foreground">Ngân sách: {parseInt(campaign.budget).toLocaleString()} VND</p>
                    <p className="text-muted-foreground">Thời gian: {campaign.duration}</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={`/campaigns/${campaign.id}`}>Xem chi tiết</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

