import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { ContactForm } from '@/components/ContactForm'
import { TwitterIcon, Youtube, Instagram, Globe } from 'lucide-react'
import { ManageLinks } from '@/components/ManageLinks'
import { useState } from 'react'
import { DirectChat } from '@/components/DirectChat'

export default function KOLDetailsPage({ params }: { params: { id: string } }) {
  // In a real application, you would fetch the KOL data based on the ID
  const kol = {
    id: params.id,
    name: 'Nguyễn Thị A',
    avatar: '/placeholder.svg',
    industry: 'Thời trang',
    followers: 100000,
    rating: 4.8,
    bio: 'KOL chuyên về thời trang và làm đẹp với 5 năm kinh nghiệm trong ngành.',
    recentCampaigns: [
      { id: 1, name: 'Summer Fashion 2023', brand: 'FashionBrand' },
      { id: 2, name: 'Beauty Product Launch', brand: 'BeautyCo' },
      { id: 3, name: 'Lifestyle Brand Promotion', brand: 'LifestyleBrand' },
    ],
    socialLinks: {
      tiktok: 'https://tiktok.com/@nguyenthia',
      youtube: 'https://youtube.com/@nguyenthia',
      instagram: 'https://instagram.com/nguyenthia',
      website: 'https://nguyenthia.com',
    },
  }

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
        <Avatar className="w-24 h-24">
          <AvatarImage src={kol.avatar} alt={kol.name} />
          <AvatarFallback>{kol.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl font-bold">{kol.name}</h1>
          <Badge variant="secondary">{kol.industry}</Badge>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Thông tin KOL</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">{kol.bio}</p>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="font-semibold">Người theo dõi:</p>
              <p>{kol.followers.toLocaleString()}</p>
            </div>
            <div>
              <p className="font-semibold">Đánh giá:</p>
              <p>{kol.rating} / 5</p>
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                Social Links
                <Button variant="outline" size="sm" onClick={() => setIsEditingLinks(!isEditingLinks)}>
                  {isEditingLinks ? 'Cancel' : 'Edit Links'}
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isEditingLinks ? (
                <ManageLinks
                  initialLinks={Object.entries(kol.socialLinks).map(([platform, url]) => ({
                    id: platform,
                    platform,
                    url,
                  }))}
                  onSave={handleSaveLinks}
                />
              ) : (
                <div className="flex space-x-2">
                  {Object.entries(kol.socialLinks).map(([platform, url]) => (
                    <a key={platform} href={url} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon">
                        {platform === 'tiktok' && <TwitterIcon className="h-4 w-4" />}
                        {platform === 'youtube' && <Youtube className="h-4 w-4" />}
                        {platform === 'instagram' && <Instagram className="h-4 w-4" />}
                        {platform === 'website' && <Globe className="h-4 w-4" />}
                      </Button>
                    </a>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Chiến dịch gần đây</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside">
            {kol.recentCampaigns.map((campaign) => (
              <li key={campaign.id}>{campaign.name} - {campaign.brand}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

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
        {showChat && <DirectChat recipientName={kol.name} />}
      </div>

      <div className="mt-8">
        <ContactForm type="kol" recipientName={kol.name} />
      </div>
    </div>
  )
}

