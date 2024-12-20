"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PlusCircle, Trash2 } from 'lucide-react'

interface Link {
  id: string
  url: string
  platform: string
}

interface ManageLinksProps {
  initialLinks: Link[]
  onSave: (links: Link[]) => void
}

export function ManageLinks({ initialLinks, onSave }: ManageLinksProps) {
  const [links, setLinks] = useState<Link[]>(initialLinks)

  const addLink = () => {
    const newLink: Link = { id: Date.now().toString(), url: '', platform: '' }
    setLinks([...links, newLink])
  }

  const updateLink = (id: string, field: 'url' | 'platform', value: string) => {
    setLinks(links.map(link => 
      link.id === id ? { ...link, [field]: value } : link
    ))
  }

  const removeLink = (id: string) => {
    setLinks(links.filter(link => link.id !== id))
  }

  const handleSave = () => {
    onSave(links.filter(link => link.url && link.platform))
  }

  return (
    <div className="space-y-4">
      {links.map((link) => (
        <div key={link.id} className="flex items-end space-x-2">
          <div className="flex-grow space-y-2">
            <Label htmlFor={`platform-${link.id}`}>Platform</Label>
            <Input
              id={`platform-${link.id}`}
              value={link.platform}
              onChange={(e) => updateLink(link.id, 'platform', e.target.value)}
              placeholder="e.g., Instagram, TikTok, Website"
            />
          </div>
          <div className="flex-grow space-y-2">
            <Label htmlFor={`url-${link.id}`}>URL</Label>
            <Input
              id={`url-${link.id}`}
              value={link.url}
              onChange={(e) => updateLink(link.id, 'url', e.target.value)}
              placeholder="https://example.com"
            />
          </div>
          <Button variant="ghost" size="icon" onClick={() => removeLink(link.id)}>
            <Trash2 className="h-4 w-4" />
            <span className="sr-only">Remove link</span>
          </Button>
        </div>
      ))}
      <Button onClick={addLink} variant="outline" className="w-full">
        <PlusCircle className="mr-2 h-4 w-4" />
        Add Link
      </Button>
      <Button onClick={handleSave} className="w-full">Save Links</Button>
    </div>
  )
}

