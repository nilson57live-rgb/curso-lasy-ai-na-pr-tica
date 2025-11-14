import Hero from '@/components/Hero'
import Testimonials from '@/components/Testimonials'
import CourseExplanation from '@/components/CourseExplanation'
import WhoIsFor from '@/components/WhoIsFor'
import WhatYouLearn from '@/components/WhatYouLearn'
import Demo from '@/components/Demo'
import Bonuses from '@/components/Bonuses'
import Guarantee from '@/components/Guarantee'
import Price from '@/components/Price'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Testimonials />
      <CourseExplanation />
      <WhoIsFor />
      <WhatYouLearn />
      <Demo />
      <Bonuses />
      <Guarantee />
      <Price />
      <CTA />
    </main>
  )
}