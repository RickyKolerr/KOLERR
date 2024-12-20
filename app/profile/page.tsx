import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { KOLRequirements } from '@/components/KOLRequirements'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

export default function ProfilePage() {
  const user = {
    name: 'Nguyễn Văn A',
    avatar: '/placeholder.svg',
    bio: 'KOL chuyên về thời trang và làm đẹp',
    followers: 10000,
    campaignsCompleted: 15,
    successRate: 95,
    reputationPoints: 850,
  }

  const campaigns = [
    { id: 1, name: 'Summer Fashion 2023', status: 'Đã hoàn thành', reputation: 50 },
    { id: 2, name: 'Beauty Product Launch', status: 'Đang diễn ra', reputation: 30 },
    { id: 3, name: 'Lifestyle Brand Promotion', status: 'Đã hủy', reputation: 0 },
  ]

  const profileCompleteness = 75

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-4">
        <Avatar className="w-24 h-24">
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-gray-500">{user.bio}</p>
        </div>
      </div>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Độ hoàn thiện hồ sơ</CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={profileCompleteness} className="w-full" />
          <p className="mt-2 text-sm text-gray-500">{profileCompleteness}% hoàn thành</p>
        </CardContent>
      </Card>
      <Tabs defaultValue="info" className="w-full">
        <TabsList>
          <TabsTrigger value="info">Thông tin cá nhân</TabsTrigger>
          <TabsTrigger value="stats">Thống kê</TabsTrigger>
          <TabsTrigger value="campaigns">Chiến dịch</TabsTrigger>
        </TabsList>
        <TabsContent value="info">
          <Card>
            <CardHeader>
              <CardTitle>Thông tin cá nhân</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="bio">Giới thiệu</Label>
                <Textarea id="bio" defaultValue={user.bio} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input id="website" placeholder="https://yourwebsite.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="socialMedia">Mạng xã hội</Label>
                <Input id="socialMedia" placeholder="@yourusername" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="stats">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Người theo dõi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{user.followers.toLocaleString()}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Chiến dịch đã tham gia</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{user.campaignsCompleted}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Tỉ lệ thành công</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{user.successRate}%</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="campaigns">
          <div>
            <h2 className="text-xl font-bold mb-4">Lịch sử chiến dịch</h2>
            <div className="space-y-4">
              {campaigns.map((campaign) => (
                <Card key={campaign.id}>
                  <CardContent className="flex justify-between items-center p-4">
                    <div>
                      <h3 className="font-semibold">{campaign.name}</h3>
                      <p className="text-sm text-gray-500">Trạng thái: {campaign.status}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">+{campaign.reputation} điểm</p>
                      <Button variant="outline" size="sm">Chi tiết</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
      <KOLRequirements />
    </div>
  )
}

