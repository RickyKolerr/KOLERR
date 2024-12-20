"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the login logic
    console.log("Login attempted with:", { email, password })
  }

  return (
    <div className="container mx-auto max-w-md py-10">
      <Card>
        <CardHeader>
          <CardTitle>Đăng nhập</CardTitle>
          <CardDescription>Nhập thông tin đăng nhập của bạn để truy cập tài khoản</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="example@email.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Mật khẩu</Label>
              <Input 
                id="password" 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="text-sm text-right">
                <Link href="/quen-mat-khau" className="text-primary hover:underline">
                  Quên mật khẩu?
                </Link>
              </div>
            </div>
          </CardContent>
          <div className="flex flex-col space-y-4">
            <Button type="submit" className="w-full">Đăng nhập</Button>
            <p className="text-sm text-center">
              Chưa có tài khoản?{" "}
              <Link href="/dang-ky" className="text-primary hover:underline">
                Đăng ký ngay
              </Link>
            </p>
          </div>
        </form>
      </Card>
    </div>
  )
}

