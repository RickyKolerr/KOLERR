import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"

type FilterType = 'brand' | 'kol' | 'ai'

interface FiltersProps {
  type: FilterType
}

export function Filters({ type }: FiltersProps) {

  return (
    <div className="space-y-4">
      {(type === 'brand' || type === 'kol') && (
        <>
          <div>
            <Label htmlFor="industry">Ngành hàng</Label>
            <Select>
              <SelectTrigger id="industry">
                <SelectValue placeholder="Chọn ngành hàng" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fashion">Thời trang</SelectItem>
                <SelectItem value="beauty">Làm đẹp</SelectItem>
                <SelectItem value="travel">Du lịch</SelectItem>
                <SelectItem value="tech">Công nghệ</SelectItem>
                <SelectItem value="sports">Thể thao</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="location">Địa điểm</Label>
            <Select>
              <SelectTrigger id="location">
                <SelectValue placeholder="Chọn địa điểm" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toàn quốc</SelectItem>
                <SelectItem value="hanoi">Hà Nội</SelectItem>
                <SelectItem value="hcmc">TP.HCM</SelectItem>
                <SelectItem value="danang">Đà Nẵng</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </>
      )}
      {type === 'brand' && (
        <>
          <div>
            <Label htmlFor="platform">Nền tảng</Label>
            <Select>
              <SelectTrigger id="platform">
                <SelectValue placeholder="Chọn nền tảng" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tiktok">TikTok</SelectItem>
                <SelectItem value="instagram">Instagram</SelectItem>
                <SelectItem value="facebook">Facebook</SelectItem>
                <SelectItem value="youtube">YouTube</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="followers">Số lượng followers</Label>
            <Select>
              <SelectTrigger id="followers">
                <SelectValue placeholder="Chọn số lượng followers" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="micro">Micro (10K-50K)</SelectItem>
                <SelectItem value="macro">Macro (50K-500K)</SelectItem>
                <SelectItem value="mega">Mega (>500K)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="engagement">Tương tác trung bình</Label>
            <Select>
              <SelectTrigger id="engagement">
                <SelectValue placeholder="Chọn % tương tác" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">5%</SelectItem>
                <SelectItem value="10">10%</SelectItem>
                <SelectItem value="20">20%</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="budget">Ngân sách</Label>
            <Select>
              <SelectTrigger id="budget">
                <SelectValue placeholder="Chọn ngân sách" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">&lt;5 triệu</SelectItem>
                <SelectItem value="medium">5-20 triệu</SelectItem>
                <SelectItem value="high">&gt;20 triệu</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Loại nội dung</Label>
            <div className="flex flex-wrap gap-2 mt-2">
              <Checkbox id="video" />
              <Label htmlFor="video">Video</Label>
              <Checkbox id="livestream" />
              <Label htmlFor="livestream">Livestream</Label>
              <Checkbox id="post" />
              <Label htmlFor="post">Bài viết</Label>
              <Checkbox id="photo" />
              <Label htmlFor="photo">Ảnh</Label>
            </div>
          </div>
          <div>
            <Label htmlFor="quality">Đánh giá chất lượng</Label>
            <Select>
              <SelectTrigger id="quality">
                <SelectValue placeholder="Chọn đánh giá" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="top">Top performer</SelectItem>
                <SelectItem value="ugc">UGC expert</SelectItem>
                <SelectItem value="rating">Rating (1-5 sao)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </>
      )}
      {type === 'kol' && (
        <>
          <div>
            <Label htmlFor="campaign-budget">Ngân sách chiến dịch</Label>
            <Select>
              <SelectTrigger id="campaign-budget">
                <SelectValue placeholder="Chọn ngân sách" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">5 triệu</SelectItem>
                <SelectItem value="10">10 triệu</SelectItem>
                <SelectItem value="20">20 triệu</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="campaign-duration">Thời gian chiến dịch</Label>
            <Select>
              <SelectTrigger id="campaign-duration">
                <SelectValue placeholder="Chọn thời gian" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1w">1 tuần</SelectItem>
                <SelectItem value="2w">2 tuần</SelectItem>
                <SelectItem value="1m">1 tháng</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="collaboration-type">Loại hợp tác</Label>
            <Select>
              <SelectTrigger id="collaboration-type">
                <SelectValue placeholder="Chọn loại hợp tác" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ad">Quảng cáo</SelectItem>
                <SelectItem value="brand-rep">Đại diện thương hiệu</SelectItem>
                <SelectItem value="livestream">Livestream</SelectItem>
                <SelectItem value="sponsorship">Tài trợ</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="min-followers">Follower tối thiểu</Label>
            <Input id="min-followers" type="number" placeholder="Nhập số follower tối thiểu" />
          </div>
          <div>
            <Label htmlFor="min-engagement">Engagement % tối thiểu</Label>
            <Input id="min-engagement" type="number" placeholder="Nhập % engagement tối thiểu" />
          </div>
        </>
      )}
      {type === 'ai' && (
        <div className="space-y-4">
          <div>
            <Label htmlFor="industry-trend">Xu hướng ngành</Label>
            <Select>
              <SelectTrigger id="industry-trend">
                <SelectValue placeholder="Chọn xu hướng" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="trend1">Xu hướng 1</SelectItem>
                <SelectItem value="trend2">Xu hướng 2</SelectItem>
                <SelectItem value="trend3">Xu hướng 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="personalized">Phù hợp cá nhân</Label>
            <Select>
              <SelectTrigger id="personalized">
                <SelectValue placeholder="Chọn gợi ý" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="suggestion1">Gợi ý 1</SelectItem>
                <SelectItem value="suggestion2">Gợi ý 2</SelectItem>
                <SelectItem value="suggestion3">Gợi ý 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="similar">Tương tự</Label>
            <Select>
              <SelectTrigger id="similar">
                <SelectValue placeholder="Chọn tương tự" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="similar1">Tương tự 1</SelectItem>
                <SelectItem value="similar2">Tương tự 2</SelectItem>
                <SelectItem value="similar3">Tương tự 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="ai-budget">Ngân sách thông minh</Label>
            <Select>
              <SelectTrigger id="ai-budget">
                <SelectValue placeholder="Chọn ngân sách" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="optimal">Tối ưu cho bạn</SelectItem>
                <SelectItem value="trending">Xu hướng hiện tại</SelectItem>
                <SelectItem value="competitive">Cạnh tranh nhất</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="ai-duration">Thời lượng chiến dịch AI</Label>
            <Select>
              <SelectTrigger id="ai-duration">
                <SelectValue placeholder="Chọn thời lượng" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="optimal">Tối ưu cho mục tiêu</SelectItem>
                <SelectItem value="quick">Hiệu quả nhanh</SelectItem>
                <SelectItem value="long-term">Tác động dài hạn</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="ai-audience">Khán giả mục tiêu AI</Label>
            <Select>
              <SelectTrigger id="ai-audience">
                <SelectValue placeholder="Chọn khán giả" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="predicted">Dự đoán phù hợp nhất</SelectItem>
                <SelectItem value="expanding">Mở rộng đối tượng</SelectItem>
                <SelectItem value="niche">Thị trường ngách tiềm năng</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="ai-performance">Dự đoán hiệu suất</Label>
            <Select>
              <SelectTrigger id="ai-performance">
                <SelectValue placeholder="Chọn mức hiệu suất" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="high">Tiềm năng cao</SelectItem>
                <SelectItem value="stable">Ổn định</SelectItem>
                <SelectItem value="growing">Đang tăng trưởng</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="ai-optimization" />
            <Label htmlFor="ai-optimization">Tối ưu hóa tự động</Label>
          </div>
        </div>
      )}
      <Button className="w-full">Áp dụng bộ lọc</Button>
    </div>
  )
}

