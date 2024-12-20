import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export function KOLRequirements() {
  const [requirements, setRequirements] = useState<string[]>([])

  const addRequirement = (requirement: string) => {
    setRequirements([...requirements, requirement])
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Yêu cầu của KOL</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="industry">Ngành nghề ưu tiên</Label>
          <Select>
            <SelectTrigger id="industry">
              <SelectValue placeholder="Chọn ngành nghề" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fashion">Thời trang</SelectItem>
              <SelectItem value="technology">Công nghệ</SelectItem>
              <SelectItem value="food">Ẩm thực</SelectItem>
              <SelectItem value="travel">Du lịch</SelectItem>
              <SelectItem value="beauty">Làm đẹp</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="min-budget">Ngân sách tối thiểu</Label>
          <Input id="min-budget" type="number" placeholder="Nhập ngân sách tối thiểu" />
        </div>
        <div>
          <Label htmlFor="campaign-duration">Thời lượng chiến dịch ưu tiên</Label>
          <Select>
            <SelectTrigger id="campaign-duration">
              <SelectValue placeholder="Chọn thời lượng" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="short">Ngắn hạn (dưới 1 tháng)</SelectItem>
              <SelectItem value="medium">Trung hạn (1-3 tháng)</SelectItem>
              <SelectItem value="long">Dài hạn (trên 3 tháng)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="custom-requirement">Yêu cầu tùy chỉnh</Label>
          <Textarea id="custom-requirement" placeholder="Nhập yêu cầu tùy chỉnh của bạn" />
        </div>
        <Button onClick={() => addRequirement("Custom requirement")}>Thêm yêu cầu</Button>
        <div>
          <h3 className="font-semibold mb-2">Yêu cầu đã thêm:</h3>
          <ul className="list-disc list-inside">
            {requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

