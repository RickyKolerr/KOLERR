'use client'

import { Bell } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface Notification {
  id: string
  title: string
  message: string
  timestamp: string
  read: boolean
}

export function NotificationSystem() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      title: 'New Campaign Match',
      message: 'A new campaign matches your profile!',
      timestamp: '5m ago',
      read: false
    },
    {
      id: '2',
      title: 'Payment Received',
      message: 'You received a payment for Campaign #123',
      timestamp: '1h ago',
      read: false
    }
  ])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {notifications.some(n => !n.read) && (
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-primary" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <div className="flex items-center justify-between px-4 py-2 font-semibold border-b">
          <span>Notifications</span>
          <Button variant="ghost" size="sm">Mark all as read</Button>
        </div>
        {notifications.map((notification) => (
          <DropdownMenuItem key={notification.id} className="p-4 cursor-pointer">
            <div className="grid gap-1">
              <div className="flex items-center justify-between">
                <span className="font-medium">{notification.title}</span>
                <span className="text-xs text-muted-foreground">{notification.timestamp}</span>
              </div>
              <p className="text-sm text-muted-foreground">{notification.message}</p>
            </div>
          </DropdownMenuItem>
        ))}
        {notifications.length === 0 && (
          <div className="py-8 text-center text-muted-foreground">
            No new notifications
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

