import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 flex items-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              404 - Không tìm thấy trang
            </h1>
            <p className="max-w-[600px] text-muted-foreground mx-auto">
              Xin lỗi, chúng tôi không thể tìm thấy trang bạn đang tìm kiếm.
            </p>
          </div>
          <div className="space-x-4">
            <Button asChild>
              <Link href="/">
                Về Trang chủ
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/help">
                Trung tâm Trợ giúp
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

