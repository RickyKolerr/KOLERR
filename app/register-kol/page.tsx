import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

export default function RegisterKOLPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Đăng ký làm KOL</h1>
        <p className="text-gray-500 mt-2">Chia sẻ thông tin của bạn để bắt đầu hợp tác với các thương hiệu hàng đầu</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Thông tin cá nhân</CardTitle>
          <CardDescription>Vui lòng điền đầy đủ thông tin bên dưới</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Họ và tên</Label>
              <Input id="fullName" placeholder="Nguyễn Văn A" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nickname">Nickname</Label>
              <Input id="nickname" placeholder="@nickname" />
            </div>
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
            <Label htmlFor="industry">Lĩnh vực chuyên môn</Label>
            <Select>
              <SelectTrigger id="industry">
                <SelectValue placeholder="Chọn lĩnh vực" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fashion">Thời trang</SelectItem>
                <SelectItem value="beauty">Làm đẹp</SelectItem>
                <SelectItem value="technology">Công nghệ</SelectItem>
                <SelectItem value="food">Ẩm thực</SelectItem>
                <SelectItem value="travel">Du lịch</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="bio">Giới thiệu bản thân</Label>
            <Textarea id="bio" placeholder="Hãy chia sẻ về bản thân và kinh nghiệm của bạn..." />
          </div>
          <div className="space-y-2">
            <Label htmlFor="socialMedia">Liên kết mạng xã hội</Label>
            <Input id="socialMedia" placeholder="https://instagram.com/yourusername" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Đăng ký làm KOL</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

