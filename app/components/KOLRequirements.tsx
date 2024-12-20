import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export function KOLRequirements() {
  const [requirements, setRequirements] = useState([
    {
      title: "Gói Free Trial",
      description: "Trải nghiệm Kolerr miễn phí trong 14 ngày",
      items: [
        "Trải nghiệm AI matchmaking cơ bản",
        "3 lượt tìm kiếm miễn phí",
        "Tham gia cộng đồng Kolerr",
      ],
    },
    {
      title: "Gói Basic",
      description: "Bắt đầu với Kolerr chỉ từ 49,000 VNĐ/tháng",
      items: [
        "Tìm kiếm AI cơ bản",
        "Tham gia cộng đồng Kolerr",
        "15 lượt tìm kiếm mỗi tháng",
        "Tiết kiệm 10% với gói năm",
      ],
    },
    {
      title: "Gói Pro",
      description: "Nâng cao hiệu suất với 149,000 VNĐ/tháng",
      items: [
        "Tất cả tính năng của gói Basic",
        "Phân tích dữ liệu cơ bản",
        "50 lượt tìm kiếm mỗi tháng",
        "Tiết kiệm 10% với gói năm",
      ],
    },
    {
      title: "Gói Enterprise",
      description: "Giải pháp toàn diện cho doanh nghiệp lớn",
      items: [
        "Tất cả tính năng của gói Pro",
        "Báo cáo xu hướng nâng cao",
        "Quản lý nhiều chiến dịch cùng lúc",
        "150 lượt tìm kiếm mỗi tháng",
        "Tiết kiệm 10% với gói năm",
      ],
    },
    {
      title: "Trả phí theo tìm kiếm",
      description: "Linh hoạt cho nhu cầu đặc biệt",
      items: [
        "Mua lẻ từ 1 lượt tìm kiếm",
        "Giảm giá khi mua số lượng lớn",
        "Lên đến 30% giảm giá cho 100 lượt",
      ],
    },
  ]);

  //const addRequirement = (requirement: string) => {
  //  setRequirements([...requirements, requirement])
  //}

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
        {/*<Button onClick={() => addRequirement("Custom requirement")}>Thêm yêu cầu</Button>*/}
        <div>
          <h3 className="font-semibold mb-2">Yêu cầu đã thêm:</h3>
          <ul className="list-disc list-inside">
            {requirements.map((req, index) => (
              <li key={index}>
                <h3>{req.title}</h3>
                <p>{req.description}</p>
                <ul>
                  {req.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

