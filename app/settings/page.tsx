'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"

export default function SettingsPage() {
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [marketingEmails, setMarketingEmails] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h1 className="text-3xl font-bold">Cài đặt Tài khoản</h1>
            <p className="text-muted-foreground">
              Quản lý cài đặt tài khoản và tùy chọn của bạn
            </p>
          </div>

          <Tabs defaultValue="profile" className="space-y-4">
            <TabsList>
              <TabsTrigger value="profile">Hồ sơ</TabsTrigger>
              <TabsTrigger value="notifications">Thông báo</TabsTrigger>
              <TabsTrigger value="security">Bảo mật</TabsTrigger>
              <TabsTrigger value="billing">Thanh toán</TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <Card className="bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle>Thông tin Hồ sơ</CardTitle>
                  <CardDescription>
                    Cập nhật thông tin cá nhân của bạn
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">Tên</Label>
                      <Input id="first-name" placeholder="Nhập tên của bạn" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Họ</Label>
                      <Input id="last-name" placeholder="Nhập họ của bạn" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="email@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Giới thiệu</Label>
                    <textarea
                      id="bio"
                      className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2"
                      placeholder="Viết một vài điều về bạn..."
                    />
                  </div>
                  <Button>Lưu thay đổi</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications">
              <Card className="bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle>Tùy chọn Thông báo</CardTitle>
                  <CardDescription>
                    Quản lý cách bạn nhận thông báo
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Thông báo Email</Label>
                      <p className="text-sm text-muted-foreground">
                        Nhận thông báo về hoạt động tài khoản qua email
                      </p>
                    </div>
                    <Switch
                      checked={emailNotifications}
                      onCheckedChange={setEmailNotifications}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Email Marketing</Label>
                      <p className="text-sm text-muted-foreground">
                        Nhận thông tin về sản phẩm và ưu đãi
                      </p>
                    </div>
                    <Switch
                      checked={marketingEmails}
                      onCheckedChange={setMarketingEmails}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

