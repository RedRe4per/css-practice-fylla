import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'
import Hero from '@/components/Hero'
import ClientBar from '@/components/ClientBar'


export default function Home() {
  return (
    <main className="wrapper">
      <Header/>
      <Hero/>
      <ClientBar/>
      <Footer/>
    </main>
  )
}
