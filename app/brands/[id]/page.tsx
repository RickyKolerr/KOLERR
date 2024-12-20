import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ContactForm } from '@/components/ContactForm'
import { Globe } from 'lucide-react'
import { useState } from 'react'
import { ManageLinks } from '@/components/ManageLinks'
import { DirectChat } from '@/components/DirectChat'

// This would typically come from a database or API
const brandData = {
  id: 1,
  name: 'TechGiant',
  logo: '/placeholder.svg',
  industry: 'Công nghệ',
  campaignsCount: 15,
  rating: 4.8,
  description: 'TechGiant là một công ty công nghệ hàng đầu, chuyên về phát triển phần mềm và giải pháp AI.',
  activeKOLs: 50,
  totalReach: 5000000,
  engagementRate: 3.2,
  campaigns: [
    { id: 1, name: 'Tech Innovation 2023', status: 'Đang diễn ra', progress: 75 },
    { id: 2, name: 'AI for Everyone', status: 'Sắp diễn ra', progress: 0 },
    { id: 3, name: 'Digital Transformation', status: 'Đã hoàn thành', progress: 100 },
  ],
  topKOLs: [
    { id: 1, name: 'Nguyễn Văn A', avatar: '/placeholder.svg', followers: 100000 },
    { id: 2, name: 'Trần Thị B', avatar: '/placeholder.svg', followers: 80000 },
    { id: 3, name: 'Lê Văn C', avatar: '/placeholder.svg', followers: 120000 },
  ],
  website: 'https://techgiant.com',
}

export default function BrandDetailsPage({ params }: { params: { id: string } }) {
  // In a real application, you would fetch the brand data based on the ID
  const brand = brandData;

  const [isEditingLinks, setIsEditingLinks] = useState(false)
  const [isFriend, setIsFriend] = useState(false)
  const [showChat, setShowChat] = useState(false)

  const handleSaveLinks = (newLinks: { id: string; url: string; platform: string }[]) => {
    // Here you would typically update the backend with the new links
    console.log('Saving links:', newLinks)
    setIsEditingLinks(false)
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-4">
        <Avatar className="w-20 h-20">
          <AvatarImage src={brand.logo} alt={brand.name} />
          <AvatarFallback>{brand.name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-3xl font-bold">{brand.name}</h1>
          <Badge variant="secondary" className="mt-1">{brand.industry}</Badge>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Tổng quan</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">{brand.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Chiến dịch</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{brand.campaignsCount}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">KOLs đang hợp tác</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{brand.activeKOLs}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Tổng lượt tiếp cận</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{brand.totalReach.toLocaleString()}</div>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                Company Links
                <Button variant="outline" size="sm" onClick={() => setIsEditingLinks(!isEditingLinks)}>
                  {isEditingLinks ? 'Cancel' : 'Edit Links'}
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isEditingLinks ? (
                <ManageLinks
                  initialLinks={[{ id: 'website', platform: 'Website', url: brand.website || '' }]}
                  onSave={handleSaveLinks}
                />
              ) : (
                <div className="flex space-x-2">
                  {brand.website && (
                    <a href={brand.website} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">
                        <Globe className="h-4 w-4 mr-2" />
                        Company Website
                      </Button>
                    </a>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </CardContent>
      </Card>

      <Tabs defaultValue="campaigns">
        <TabsList>
          <TabsTrigger value="campaigns">Chiến dịch</TabsTrigger>
          <TabsTrigger value="kols">KOLs hàng đầu</TabsTrigger>
        </TabsList>
        <TabsContent value="campaigns">
          <Card>
            <CardHeader>
              <CardTitle>Chiến dịch gần đây</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {brand.campaigns.map((campaign) => (
                  <div key={campaign.id} className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{campaign.name}</h3>
                      <p className="text-sm text-gray-500">{campaign.status}</p>
                    </div>
                    <div className="w-1/3">
                      <Progress value={campaign.progress} className="w-full" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="kols">
          <Card>
            <CardHeader>
              <CardTitle>KOLs hàng đầu</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {brand.topKOLs.map((kol) => (
                  <div key={kol.id} className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={kol.avatar} alt={kol.name} />
                      <AvatarFallback>{kol.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{kol.name}</h3>
                      <p className="text-sm text-gray-500">{kol.followers.toLocaleString()} người theo dõi</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      <h2 className="text-2xl font-bold mb-4">Liên hệ thương hiệu</h2>
      <div className="mt-8">
        <ContactForm type="brand" recipientName={brand.name} />
      </div>
      <div className="mt-8 space-y-4">
        <Button 
          onClick={() => setIsFriend(!isFriend)} 
          variant={isFriend ? "outline" : "default"}
        >
          {isFriend ? 'Hủy kết bạn' : 'Kết bạn'}
        </Button>
        {isFriend && (
          <Button onClick={() => setShowChat(!showChat)}>
            {showChat ? 'Ẩn chat' : 'Mở chat'}
          </Button>
        )}
        {showChat && <DirectChat recipientName={brand.name} />}
      </div>
    </div>
  )
}

