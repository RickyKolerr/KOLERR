import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Điều khoản Pháp lý</h1>
            <p className="mt-2 text-muted-foreground">
              Cập nhật lần cuối: 28/11/2023
            </p>
          </div>

          <Tabs defaultValue="terms" className="space-y-4">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
              <TabsTrigger value="terms">Điều khoản Dịch vụ</TabsTrigger>
              <TabsTrigger value="privacy">Chính sách Bảo mật</TabsTrigger>
              <TabsTrigger value="copyright">Bản quyền</TabsTrigger>
              <TabsTrigger value="community">Quy tắc Cộng đồng</TabsTrigger>
            </TabsList>
            <TabsContent value="terms">
              <Card className="bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle>Điều khoản Dịch vụ</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h2 className="text-xl font-semibold">1. Điều khoản Chung</h2>
                  <p>
                    Bằng cách truy cập và sử dụng nền tảng Kolerr, bạn đồng ý tuân theo các điều khoản và điều kiện này.
                  </p>
                  
                  <h2 className="text-xl font-semibold">2. Tài khoản Người dùng</h2>
                  <p>
                    Bạn chịu trách nhiệm duy trì tính bảo mật của tài khoản và mật khẩu của mình.
                  </p>

                  <h2 className="text-xl font-semibold">3. Quyền và Trách nhiệm</h2>
                  <p>
                    Kolerr có quyền thay đổi, tạm ngưng hoặc chấm dứt dịch vụ mà không cần thông báo trước.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            {/* Similar structure for other tabs */}
          </Tabs>
        </div>
      </div>
    </div>
  )
}

