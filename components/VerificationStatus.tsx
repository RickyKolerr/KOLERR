import { Shield, ShieldCheck, ShieldAlert } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

interface VerificationStatusProps {
  status: 'pending' | 'verified' | 'rejected'
  progress: number
  message?: string
}

export function VerificationStatus({ status, progress, message }: VerificationStatusProps) {
  return (
    <Card className="bg-card/50 backdrop-blur">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {status === 'verified' && <ShieldCheck className="h-5 w-5 text-green-500" />}
          {status === 'pending' && <Shield className="h-5 w-5 text-yellow-500" />}
          {status === 'rejected' && <ShieldAlert className="h-5 w-5 text-red-500" />}
          Verification Status
        </CardTitle>
        <CardDescription>
          Track your account verification progress
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Progress value={progress} className="h-2" />
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium capitalize">{status}</span>
            <span className="text-muted-foreground">{progress}% Complete</span>
          </div>
          {message && (
            <p className="text-sm text-muted-foreground">{message}</p>
          )}
        </div>
        {status === 'pending' && (
          <Button className="w-full">Complete Verification</Button>
        )}
        {status === 'rejected' && (
          <Button className="w-full" variant="destructive">Appeal Decision</Button>
        )}
      </CardContent>
    </Card>
  )
}

