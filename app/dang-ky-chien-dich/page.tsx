import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function RegisterCampaignPage() {
  return (
    <div className="container mx-auto max-w-2xl py-10">
      <Card>
        <CardHeader>
          <CardTitle>Đăng ký tham gia chiến dịch</CardTitle>
          <CardDescription>Điền thông tin để đăng ký tham gia chiến dịch</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="campaign">Chọn chiến dịch</Label>
            <Select>
              <SelectTrigger id="campaign">
                <SelectValue placeholder="Chọn chiến dịch" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="campaign1">Chiến dịch 1</SelectItem>
                <SelectItem value="campaign2">Chiến dịch 2</SelectItem>
                <SelectItem value="campaign3">Chiến dịch 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="name">Họ và tên</Label>
            <Input id="name" placeholder="Nguyễn Văn A" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="example@email.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Số điện thoại</Label>
            <Input id="phone" type="tel" placeholder="0123456789" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="socialMedia">Liên kết mạng xã hội</Label>
            <Input id="socialMedia" placeholder="https://instagram.com/yourusername" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="experience">Kinh nghiệm liên quan</Label>
            <Textarea id="experience" placeholder="Mô tả kinh nghiệm của bạn liên quan đến chiến dịch này" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Đăng ký tham gia</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

