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
    </section>
    <Footer />
  </div>
)

export default Videos


