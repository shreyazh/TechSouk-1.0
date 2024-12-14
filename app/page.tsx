import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 text-teal-800">Welcome to TechSouk</h1>
        <p className="text-xl mb-8 text-gray-600">Empowering Algerian businesses to thrive in a competitive market through cutting-edge technology and innovation.</p>
        <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
          <Link href="/solutions">Explore Solutions</Link>
        </Button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-teal-800">Digital Transformation</h2>
          <p className="text-gray-600 mb-4">Modernize your business processes and stay ahead of the competition with our cutting-edge digital solutions.</p>
          <Link href="/solutions#digital-transformation" className="text-teal-600 hover:underline">Learn more →</Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-teal-800">E-commerce Solutions</h2>
          <p className="text-gray-600 mb-4">Expand your reach and boost sales with our tailored e-commerce platforms designed for Algerian businesses.</p>
          <Link href="/solutions#e-commerce" className="text-teal-600 hover:underline">Learn more →</Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-teal-800">Data Analytics</h2>
          <p className="text-gray-600 mb-4">Harness the power of your data to make informed decisions and drive business growth with our analytics tools.</p>
          <Link href="/solutions#data-analytics" className="text-teal-600 hover:underline">Learn more →</Link>
        </div>
      </section>

      <section className="text-center mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-teal-800">Why Choose TechSouk?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="bg-teal-100 rounded-full p-4 inline-block mb-4">
              <svg className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Tailored Solutions</h3>
            <p className="text-gray-600">Custom-built for Algerian businesses</p>
          </div>
          <div>
            <div className="bg-teal-100 rounded-full p-4 inline-block mb-4">
              <svg className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast Implementation</h3>
            <p className="text-gray-600">Quick deployment of solutions</p>
          </div>
          <div>
            <div className="bg-teal-100 rounded-full p-4 inline-block mb-4">
              <svg className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
            <p className="text-gray-600">Access to local tech experts</p>
          </div>
          <div>
            <div className="bg-teal-100 rounded-full p-4 inline-block mb-4">
              <svg className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Affordable Pricing</h3>
            <p className="text-gray-600">Solutions for every budget</p>
          </div>
        </div>
      </section>

      <section className="bg-teal-700 text-white p-8 rounded-lg mb-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-semibold mb-2">Ready to transform your business?</h2>
            <p className="text-xl">Let's start your digital journey today!</p>
          </div>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-teal-600">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-teal-800 text-center">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-teal-700">AlgeriaFresh: From Local to Global</h3>
            <p className="text-gray-600 mb-4">Learn how AlgeriaFresh used our e-commerce solutions to expand their local produce business internationally.</p>
            <Link href="/success-stories#algeriafresh" className="text-teal-600 hover:underline">Read full story →</Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-teal-700">TechAlgiers: Streamlining Operations</h3>
            <p className="text-gray-600 mb-4">Discover how TechAlgiers increased efficiency by 40% with our custom software solutions.</p>
            <Link href="/success-stories#techalgiers" className="text-teal-600 hover:underline">Read full story →</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

