import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Solutions() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-teal-800 text-center">Our Solutions</h1>
      
      <section id="digital-transformation" className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-teal-700">Digital Transformation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600 mb-4">
              Our digital transformation solutions are designed to help Algerian businesses modernize their operations, improve efficiency, and stay competitive in the global market. We offer:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Business process automation</li>
              <li>Cloud migration and management</li>
              <li>IoT integration for manufacturing and agriculture</li>
              <li>AI-powered decision support systems</li>
            </ul>
            <Button asChild>
              <Link href="/contact">Get Started with Digital Transformation</Link>
            </Button>
          </div>
          <div className="bg-teal-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-teal-800">Case Study: AlgeriaManufacture</h3>
            <p className="text-gray-700 mb-4">
              AlgeriaManufacture implemented our IoT solution to optimize their production line, resulting in a 25% increase in efficiency and a 15% reduction in operational costs.
            </p>
            <Link href="/case-studies/algeriamanufacture" className="text-teal-600 hover:underline">Read full case study →</Link>
          </div>
        </div>
      </section>

      <section id="e-commerce" className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-teal-700">E-commerce Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600 mb-4">
              Our e-commerce solutions are tailored to the unique needs of Algerian businesses, helping them reach customers both locally and globally. We offer:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Custom e-commerce platform development</li>
              <li>Integration with local payment gateways</li>
              <li>Multi-language and multi-currency support</li>
              <li>Mobile-first design for the Algerian market</li>
            </ul>
            <Button asChild>
              <Link href="/contact">Launch Your E-commerce Store</Link>
            </Button>
          </div>
          <div className="bg-teal-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-teal-800">Success Story: AlgeriaArtisans</h3>
            <p className="text-gray-700 mb-4">
              AlgeriaArtisans used our e-commerce solution to bring traditional Algerian crafts to a global audience, increasing their sales by 300% in the first year.
            </p>
            <Link href="/success-stories/algeriaartisans" className="text-teal-600 hover:underline">Read full story →</Link>
          </div>
        </div>
      </section>

      <section id="data-analytics" className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-teal-700">Data Analytics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600 mb-4">
              Our data analytics solutions help Algerian businesses make informed decisions based on real-time insights. We offer:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Custom dashboards and reporting tools</li>
              <li>Predictive analytics for market trends</li>
              <li>Customer behavior analysis</li>
              <li>Supply chain optimization</li>
            </ul>
            <Button asChild>
              <Link href="/contact">Harness the Power of Your Data</Link>
            </Button>
          </div>
          <div className="bg-teal-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-teal-800">Case Study: AlgeriaRetail</h3>
            <p className="text-gray-700 mb-4">
              AlgeriaRetail implemented our data analytics solution to optimize their inventory management, reducing stockouts by 40% and increasing customer satisfaction.
            </p>
            <Link href="/case-studies/algeriaretail" className="text-teal-600 hover:underline">Read full case study →</Link>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-6 text-teal-800">Ready to Transform Your Business?</h2>
        <p className="text-xl text-gray-600 mb-8">Let's discuss how our solutions can help you achieve your goals.</p>
        <Button asChild size="lg">
          <Link href="/contact">Schedule a Consultation</Link>
        </Button>
      </section>
    </div>
  )
}

