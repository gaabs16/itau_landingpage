import { SectionHero } from '@/components/SectionHero'
import { SectionServices } from '@/components/Servico'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionServices />
    </>
  )
}
