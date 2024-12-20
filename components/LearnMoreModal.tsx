import { useState } from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function LearnMoreModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-black border border-[#FFC107] rounded-lg p-8 max-w-2xl w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-[#FFC107]">About Kolerr</h2>
          <Button onClick={onClose} variant="ghost" className="text-[#FFC107] hover:text-white">
            <X className="h-6 w-6" />
          </Button>
        </div>
        <div className="text-gray-300 space-y-4">
          <p>
            Kolerr is a cutting-edge platform that connects brands with influencers, revolutionizing the world of digital marketing and social media collaborations.
          </p>
          <p>
            Our AI-powered matching system ensures that brands find the perfect influencers for their campaigns, while influencers discover opportunities that align with their unique style and audience.
          </p>
          <p>
            With Kolerr, you can:
          </p>
          <ul className="list-disc list-inside pl-4">
            <li>Access a global network of influencers and brands</li>
            <li>Utilize advanced AI matching for optimal partnerships</li>
            <li>Manage campaigns and collaborations effortlessly</li>
            <li>Ensure secure and timely payments</li>
            <li>Track performance and ROI with detailed analytics</li>
          </ul>
          <p>
            Join Kolerr today and take your influence to the next level!
          </p>
        </div>
        <div className="mt-8 text-center">
          <Button onClick={onClose} className="bg-[#D72670] hover:bg-[#FFC107] text-white hover:text-black text-lg px-8 py-3 rounded-full transition-all duration-300">
            Close
          </Button>
        </div>
      </div>
    </div>
  )
}

