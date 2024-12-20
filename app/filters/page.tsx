import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Slider } from '@/components/ui/slider'

export default function FiltersPage() {
  const industries = [
    'Thời trang', 'Công nghệ', 'Sức khỏe', 'Làm đẹp', 'Ẩm thực',
    'Du lịch', 'Giáo dục', 'Thể thao', 'Giải trí', 'Tài chính'
  ]

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Bộ lọc tìm kiếm</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Ngành nghề</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {industries.map((industry) => (
                <div key={industry} className="flex items-center space-x-2">
                  <Checkbox id={industry} />
                  <Label htmlFor={industry}>{industry}</Label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Ngân sách</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Slider
              defaultValue={[5000000]}
              max={20000000}
              step={1000000}
              label="Ngân sách tối đa"
            />
            <p>Ngân sách tối đa: 5.000.000 VND</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Thời gian</CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup defaultValue="any">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="any" id="any" />
                <Label htmlFor="any">Tất cả</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="short" id="short" />
                <Label htmlFor="short">Dưới 15 ngày</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="medium" id="medium" />
                <Label htmlFor="medium">15 - 30 ngày</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="long" id="long" />
                <Label htmlFor="long">Trên 30 ngày</Label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>
      </div>
      <div className="flex justify-center">
        <Button size="lg">Áp dụng bộ lọc</Button>
      </div>
    </div>
  )
}

