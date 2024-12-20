'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'vi' | 'en'

interface Translations {
  [key: string]: {
    [key in Language]: string
  }
}

const translations: Translations = {
  // Header translations
  home: { en: 'Home', vi: 'Trang chủ' },
  campaigns: { en: 'Campaigns', vi: 'Chiến dịch' },
  brands: { en: 'Brands', vi: 'Thương hiệu' },
  pricing: { en: 'Pricing', vi: 'Bảng giá' },
  contact: { en: 'Contact', vi: 'Liên hệ' },
  login: { en: 'Log in', vi: 'Đăng nhập' },
  signup: { en: 'Sign up', vi: 'Đăng ký' },
  kols: { en: 'KOLs', vi: 'KOLs' },
  notifications: { en: 'Notifications', vi: 'Thông báo' },
  newNotification: { en: 'New notification', vi: 'Thông báo mới' },
  viewAllNotifications: { en: 'View all notifications', vi: 'Xem tất cả thông báo' },
  changeLanguage: { en: 'Change Language', vi: 'Đổi ngôn ngữ' },
  menu: { en: 'Menu', vi: 'Menu' },

  // Home page translations
  heroTitle: { en: 'Kolerr: Empower Your Influence', vi: 'Kolerr: Tăng cường Ảnh hưởng của Bạn' },
  heroSubtitle: { en: 'Connect brands with influencers. Amplify your reach. Maximize your impact.', vi: 'Kết nối thương hiệu với người có ảnh hưởng. Mở rộng phạm vi tiếp cận. Tối đa hóa tác động của bạn.' },
  getStarted: { en: 'Get Started', vi: 'Bắt đầu' },
  learnMore: { en: 'Learn More', vi: 'Tìm hiểu thêm' },
  searchPlaceholder: { en: 'Find your perfect match...', vi: 'Tìm kiếm đối tác phù hợp...' },
  search: { en: 'Search', vi: 'Tìm kiếm' },
  whyChooseKolerr: { en: 'Why Choose Kolerr?', vi: 'Tại sao chọn Kolerr?' },
  aiMatchmaking: { en: 'AI-Powered Matching', vi: 'Kết nối bằng AI' },
  aiMatchmakingDesc: { en: 'Our advanced AI ensures perfect brand-influencer partnerships.', vi: 'AI tiên tiến của chúng tôi đảm bảo sự hợp tác hoàn hảo giữa thương hiệu và người có ảnh hưởng.' },
  globalReach: { en: 'Global Reach', vi: 'Phạm vi Toàn cầu' },
  globalReachDesc: { en: 'Connect with influencers and brands from around the world.', vi: 'Kết nối với người có ảnh hưởng và thương hiệu từ khắp nơi trên thế giới.' },
  securePayments: { en: 'Secure Payments', vi: 'Thanh toán An toàn' },
  securePaymentsDesc: { en: 'Hassle-free, secure transaction system for all parties.', vi: 'Hệ thống giao dịch an toàn, không rắc rối cho tất cả các bên.' },
  readyToElevate: { en: 'Ready to Elevate Your Influence?', vi: 'Sẵn sàng Nâng cao Ảnh hưởng của Bạn?' },
  joinKolerr: { en: 'Join Kolerr today and unlock a world of opportunities.', vi: 'Tham gia Kolerr ngay hôm nay và mở ra một thế giới cơ hội.' },
  signUpNow: { en: 'Sign Up Now', vi: 'Đăng ký Ngay' },

  // Footer translations
  aboutKolerr: { en: 'About Kolerr', vi: 'Về Kolerr' },
  kolerDescription: { 
    en: 'Kolerr is a leading platform connecting KOLs and brands, delivering effective and creative marketing campaigns.',
    vi: 'Kolerr là nền tảng hàng đầu kết nối KOLs và thương hiệu, mang lại các chiến dịch marketing hiệu quả và sáng tạo.'
  },
  quickLinks: { en: 'Quick Links', vi: 'Liên kết nhanh' },
  aboutUs: { en: 'About Us', vi: 'Về chúng tôi' },
  faq: { en: 'FAQ', vi: 'Câu hỏi thường gặp' },
  termsOfService: { en: 'Terms of Service', vi: 'Điều khoản dịch vụ' },
  privacyPolicy: { en: 'Privacy Policy', vi: 'Chính sách bảo mật' },
  connectWithUs: { en: 'Connect with Us', vi: 'Kết nối với chúng tôi' },
  allRightsReserved: { en: 'All rights reserved', vi: 'Tất cả quyền được bảo lưu' },

  // New translations
  dataAnalytics: { en: 'Data Analytics', vi: 'Phân tích Dữ liệu' },
  dataAnalyticsDesc: { 
    en: 'Gain valuable insights with our advanced data analytics tools.',
    vi: 'Có được những hiểu biết quý giá với công cụ phân tích dữ liệu tiên tiến của chúng tôi.'
  },
  trustedAnalysis: { en: 'Trusted Analysis', vi: 'Phân tích Đáng tin cậy' },
  kolInsights: { en: 'KOL Insights', vi: 'Thông tin chi tiết về KOL' },
  kolInsight1: { 
    en: 'Average engagement rate increased by 25% for KOLs using our platform',
    vi: 'Tỷ lệ tương tác trung bình tăng 25% đối với các KOL sử dụng nền tảng của chúng tôi'
  },
  kolInsight2: { 
    en: '80% of KOLs reported higher quality brand partnerships',
    vi: '80% KOL báo cáo có được các đối tác thương hiệu chất lượng cao hơn'
  },
  kolInsight3: { 
    en: 'KOLs saw a 40% increase in campaign opportunities',
    vi: 'KOL thấy cơ hội chiến dịch tăng 40%'
  },
  brandInsights: { en: 'Brand Insights', vi: 'Thông tin chi tiết về Thương hiệu' },
  brandInsight1: { 
    en: 'Brands experienced a 30% boost in ROI for influencer campaigns',
    vi: 'Các thương hiệu trải nghiệm tăng 30% ROI cho các chiến dịch influencer'
  },
  brandInsight2: { 
    en: '95% of brands found their ideal KOL match within 2 weeks',
    vi: '95% thương hiệu tìm thấy KOL phù hợp lý tưởng trong vòng 2 tuần'
  },
  brandInsight3: { 
    en: 'Average campaign reach increased by 50% through our AI-powered matching',
    vi: 'Phạm vi tiếp cận chiến dịch trung bình tăng 50% thông qua kết nối bằng AI của chúng tôi'
  },
  successStories: { en: 'Success Stories', vi: 'Câu chuyện Thành công' },
  successStory1: { 
    en: "Kolerr's AI matching helped us find the perfect KOLs for our campaign, resulting in a 200% increase in engagement!",
    vi: "Kết nối AI của Kolerr đã giúp chúng tôi tìm được những KOL hoàn hảo cho chiến dịch, dẫn đến tăng 200% tương tác!"
  },
  successName1: { en: 'Sarah Johnson', vi: 'Nguyễn Thị Anh' },
  successRole1: { en: 'Marketing Director, TechCo', vi: 'Giám đốc Marketing, TechCo' },
  successStory2: { 
    en: "As a KOL, Kolerr has opened up amazing opportunities for me. My follower base has grown by 50% since joining!",
    vi: "Là một KOL, Kolerr đã mở ra những cơ hội tuyệt vời cho tôi. Lượng người theo dõi của tôi đã tăng 50% kể từ khi tham gia!"
  },
  successName2: { en: 'Mike Chen', vi: 'Trần Văn Bình' },
  successRole2: { en: 'Lifestyle Influencer', vi: 'Influencer Phong cách sống' },
  successStory3: { 
    en: "The data analytics provided by Kolerr have been invaluable in optimizing our influencer strategy.",
    vi: "Phân tích dữ liệu được cung cấp bởi Kolerr đã vô cùng quý giá trong việc tối ưu hóa chiến lược influencer của chúng tôi."
  },
  successName3: { en: 'Emily Wong', vi: 'Lê Thị Cẩm' },
  successRole3: { en: 'CEO, BeautyBrand', vi: 'CEO, BeautyBrand' },
  next: { en: 'Next', vi: 'Tiếp theo' },
  keyFeaturesOfKolerr: { en: 'Key Features of Kolerr', vi: 'Tính năng chính của Kolerr' },
  aiPoweredMatchmaking: { en: 'AI-Powered Matchmaking', vi: 'Kết nối bằng AI' },
  aiPoweredMatchmakingDesc: { en: 'Instantly connect with the perfect KOLs, influencers, or brands tailored to your goals.', vi: 'Kết nối ngay lập tức với KOLs, influencers hoặc thương hiệu phù hợp nhất với mục tiêu của bạn.' },
  realTimeCampaign: { en: 'Real-Time Campaign Management', vi: 'Quản lý chiến dịch thời gian thực' },
  realTimeCampaignDesc: { en: 'Track, manage, and optimize multiple campaigns seamlessly in one place.', vi: 'Theo dõi, quản lý và tối ưu hóa nhiều chiến dịch một cách liền mạch tại một nơi.' },
  slotSystem: { en: 'Slot System', vi: 'Hệ thống Slot' },
  slotSystemDesc: { en: 'Apply for AI-suggested campaigns or invite others to join collaborative slots for maximum visibility and credibility.', vi: 'Ứng tuyển vào các chiến dịch được AI đề xuất hoặc mời người khác tham gia các slot hợp tác để tăng khả năng hiển thị và uy tín.' },
  dataInsights: { en: 'Data-Driven Insights', vi: 'Phân tích dữ liệu' },
  dataInsightsDesc: { en: 'Access actionable analytics powered by integrations with TikTok, YouTube, and Instagram.', vi: 'Truy cập phân tích có thể thực hiện được, được hỗ trợ bởi tích hợp với TikTok, YouTube và Instagram.' },
  communityHub: { en: 'Built-In Community Hub', vi: 'Trung tâm cộng đồng tích hợp' },
  communityHubDesc: { en: 'Engage, network, and grow through Kolerr\'s interactive community space.', vi: 'Tương tác, kết nối và phát triển thông qua không gian cộng đồng tương tác của Kolerr.' },
  collaborationTools: { en: 'Seamless Collaboration Tools', vi: 'Công cụ hợp tác liền mạch' },
  collaborationToolsDesc: { en: 'Plan, communicate, and execute campaigns with ease, supported by intelligent tools.', vi: 'Lập kế hoạch, giao tiếp và thực hiện chiến dịch một cách dễ dàng, được hỗ trợ bởi các công cụ thông minh.' },
  aiChatbot: { en: 'Smart AI Chatbot', vi: 'Chatbot AI thông minh' },
  aiChatbotDesc: { en: 'Get instant assistance for campaign setup, performance queries, and more.', vi: 'Nhận hỗ trợ tức thì cho việc thiết lập chiến dịch, truy vấn hiệu suất và nhiều hơn nữa.' },
  expertSupport: { en: 'Expert Support', vi: 'Hỗ trợ chuyên gia' },
  expertSupportDesc: { en: '24/7 access to our team of marketing and influencer experts.', vi: 'Truy cập 24/7 đến đội ngũ chuyên gia marketing và influencer của chúng tôi.' },
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: string): string => {
    return translations[key]?.[language] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

