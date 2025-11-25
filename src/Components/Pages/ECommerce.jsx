import Header from './Header'
import Footer from './HomePage/Footer'

const ECommerce = () => (
  <div className="min-h-screen bg-gradient-to-b from-white via-[#f6fbff] to-[#eef7ff]">
    <Header />
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-0">
      <div className="mb-12 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-slate-400">
          Digital Commerce
        </p>
        <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
          E-commerce Solutions
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-600">
          Launch a modern storefront with integrated inventory, catalog, and
          customer engagement tools tailored for jewellery businesses.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {[
          {
            title: 'Omni-channel Storefront',
            copy:
              'Sync your online catalog with in-store stock for a seamless buying experience.',
          },
          {
            title: 'Secure Payments',
            copy:
              'Offer trusted payment gateways with automated billing and invoicing.',
          },
          {
            title: 'Customer Journeys',
            copy:
              'Capture leads, personalize offers, and keep shoppers coming back.',
          },
        ].map((card) => (
          <article
            key={card.title}
            className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h3 className="mb-2 text-xl font-semibold text-slate-900">
              {card.title}
            </h3>
            <p className="text-slate-600">{card.copy}</p>
          </article>
        ))}
      </div>
    </section>
    <Footer />
  </div>
)

export default ECommerce


