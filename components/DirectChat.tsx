"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: Date;
}

interface DirectChatProps {
  recipientName: string;
}

export function DirectChat({ recipientName }: DirectChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    const message: Message = {
      id: Date.now(),
      sender: 'You',
      content: newMessage,
      timestamp: new Date(),
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Chat with {recipientName}</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] p-4 border rounded-md">
          {messages.map((message) => (
            <div key={message.id} className={`mb-2 ${message.sender === 'You' ? 'text-right' : ''}`}>
              <span className="font-semibold">{message.sender}: </span>
              <span>{message.content}</span>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form onSubmit={handleSendMessage} className="flex w-full space-x-2">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  );
}

