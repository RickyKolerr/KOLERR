"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the password reset logic
    console.log("Password reset requested for:", email)
    setIsSubmitted(true)
  }

  return (
    <div className="container mx-auto max-w-md py-10">
      <Card>
        <CardHeader>
          <CardTitle>Quên mật khẩu</CardTitle>
          <CardDescription>Nhập email của bạn để đặt lại mật khẩu</CardDescription>
        </CardHeader>
        {!isSubmitted ? (
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
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button type="submit" className="w-full">Gửi yêu cầu đặt lại mật khẩu</Button>
              <p className="text-sm text-center">
                Nhớ mật khẩu?{" "}
                <Link href="/dang-nhap" className="text-primary hover:underline">
                  Đăng nhập
                </Link>
              </p>
            </CardFooter>
          </form>
        ) : (
          <CardContent>
            <p className="text-center text-green-600">
              Yêu cầu đặt lại mật khẩu đã được gửi. Vui lòng kiểm tra email của bạn.
            </p>
          </CardContent>
        )}
      </Card>
    </div>
  )
}

