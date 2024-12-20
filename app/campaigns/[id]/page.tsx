import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'

export default function CampaignPage({ params }: { params: { id: string } }) {
  // In a real application, you would fetch the campaign data based on the ID
  const campaign = {
    id: params.id,
    title: 'Summer Fashion Campaign 2024',
    description: 'Promote our new summer collection across social media platforms.',
    targetAudience: 'Fashion enthusiasts aged 18-35',
    budget: '10000000',
    startDate: '2024-06-01',
    endDate: '2024-06-30',
    progress: 65,
    slots: [
      { id: 1, type: 'Micro Influencer', budget: '2000000', filled: 3, total: 5 },
      { id: 2, type: 'Macro Influencer', budget: '5000000', filled: 1, total: 2 },
      { id: 3, type: 'Celebrity', budget: '3000000', filled: 0, total: 1 },
    ],
    registeredKOLs: [
      { id: 1, name: 'Trần Thị B', followers: 50000, industry: 'Fashion' },
      { id: 2, name: 'Lê Văn C', followers: 75000, industry: 'Lifestyle' },
      { id: 3, name: 'Nguyễn Thị D', followers: 100000, industry: 'Beauty' },
    ],
    requirements: [
      'Tối thiểu 10,000 người theo dõi trên Instagram',
      'Kinh nghiệm trong lĩnh vực thời trang',
      'Khả năng sáng tạo nội dung hấp dẫn',
      'Cam kết đăng tải ít nhất 3 bài post trong thời gian diễn ra chiến dịch',
    ]
  }

  return (
    <div className="space-y-8">
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground p-8 md:p-12">
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{campaign.title}</h1>
          <p className="text-xl mb-6">{campaign.description}</p>
          <div className="flex flex-wrap gap-4">
            <Badge variant="outline" className="text-primary-foreground border-primary-foreground">
              Thời trang
            </Badge>
            <Badge variant="outline" className="text-primary-foreground border-primary-foreground">
              Mùa hè
            </Badge>
            <Badge variant="outline" className="text-primary-foreground border-primary-foreground">
              Social Media
            </Badge>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Chi tiết chiến dịch</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="space-y-4">
              <div>
                <dt className="font-semibold">Đối tượng mục tiêu:</dt>
                <dd>{campaign.targetAudience}</dd>
              </div>
              <div>
                <dt className="font-semibold">Ngân sách:</dt>
                <dd>{parseInt(campaign.budget).toLocaleString()} VND</dd>
              </div>
              <div>
                <dt className="font-semibold">Thời gian:</dt>
                <dd>{campaign.startDate} - {campaign.endDate}</dd>
              </div>
              <div>
                <dt className="font-semibold">Tiến độ chiến dịch:</dt>
                <dd>
                  <Progress value={campaign.progress} className="mt-2" />
                  <p className="text-sm text-gray-500 mt-1">{campaign.progress}% hoàn thành</p>
                </dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Yêu cầu đối với KOL</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              {campaign.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>SLOT Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {campaign.slots.map((slot) => (
              <div key={slot.id} className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">{slot.type}</p>
                  <p className="text-sm text-gray-500">Budget: {parseInt(slot.budget).toLocaleString()} VND</p>
                </div>
                <div className="text-right">
                  <p className="text-sm">{slot.filled}/{slot.total} filled</p>
                  <Progress value={(slot.filled / slot.total) * 100} className="w-24" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>KOLs đã đăng ký</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {campaign.registeredKOLs.map((kol) => (
              <div key={kol.id} className="flex items-center space-x-4 p-4 bg-muted rounded-lg">
                <Avatar>
                  <AvatarImage src={`/placeholder.svg`} />
                  <AvatarFallback>{kol.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{kol.name}</p>
                  <p className="text-sm text-gray-500">{kol.followers.toLocaleString()} người theo dõi • {kol.industry}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center">
        <Button size="lg">Đăng ký tham gia chiến dịch</Button>
      </div>
    </div>
  )
}

