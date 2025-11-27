import Header from './Header'
import Footer from './HomePage/Footer'

const videos = [
  {
    title: 'Product Walkthrough',
    desc: 'See how Unicorn optimizes daily jewellery store operations.',
    thumb: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    title: 'Inventory Tips',
    desc: 'Best practices for tagging, auditing, and reconciling stock.',
    thumb: 'https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=9bZkp7q19f0',
  },
  {
    title: 'Billing Automation',
    desc: 'Create GST-ready invoices and automate reminders.',
    thumb: 'https://img.youtube.com/vi/3JZ_D3ELwOQ/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=3JZ_D3ELwOQ',
  },
]

const Videos = () => (
  <div className="min-h-screen bg-gradient-to-b from-white via-[#f9fbff] to-[#f0f4ff]">
    <Header />
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-0">
      <div className="mb-12 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-slate-400">
          Learn Faster
        </p>
        <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
          Videos
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-600">
          Tutorials, customer stories, and quick tips to help you get the most
          out of Unicorn Jewellery Software.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {videos.map((video) => (
          <a
            key={video.title}
            href={video.url}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <img
              src={video.thumb}
              alt={video.title}
              className="h-44 w-full object-cover transition duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="flex flex-1 flex-col p-6">
              <h3 className="mb-2 text-lg font-semibold text-slate-900">
                {video.title}
              </h3>
              <p className="flex-1 text-sm text-slate-600">{video.desc}</p>
              <span className="mt-4 text-sm font-semibold text-[#f16338]">
                Watch now →
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* New highlight video section */}
      <section className="mt-20 grid gap-10 rounded-3xl bg-slate-900 px-6 py-10 text-white shadow-xl md:grid-cols-2 md:px-12">
        <div className="flex flex-col justify-center space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            In-Depth Demo
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl">
            See Unicorn Jewellery Software in real store scenarios
          </h2>
          <p className="text-sm leading-relaxed text-slate-300 md:text-base">
            Watch our detailed walkthrough covering billing, inventory, tag printing,
            schemes, repairs and GST reporting – all inside one simple dashboard.
          </p>
          <ul className="mt-2 space-y-2 text-sm text-slate-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#fbbf24]" />
              <span>Full POS to stock management flow</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#38bdf8]" />
              <span>Gold, silver, diamond & custom items handling</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#f97373]" />
              <span>Reports your CA and auditor will love</span>
            </li>
          </ul>
          <button
            type="button"
            className="mt-4 inline-flex w-fit items-center justify-center rounded-full bg-white px-6 py-2 text-sm font-semibold text-slate-900 shadow-md transition hover:-translate-y-0.5 hover:bg-slate-100"
          >
            Request a personal demo
          </button>
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-black shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#f97316]/20 via-transparent to-[#38bdf8]/30 mix-blend-screen" />
          <iframe
            className="relative z-10 h-64 w-full md:h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Unicorn Jewellery Software – Complete Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </section>
    </section>
    <Footer />
  </div>
)

export default Videos


