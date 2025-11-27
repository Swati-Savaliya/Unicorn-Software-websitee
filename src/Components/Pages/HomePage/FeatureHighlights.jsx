import weighingIcon from '../../../assets/image/Product_img4.png'
import bhavIcon from '../../../assets/image/Product_img5.png'
import loyaltyIcon from '../../../assets/image/Product_img6.png'
import repairIcon from '../../../assets/image/Product_img2.jpg'
import karigarIcon from '../../../assets/image/Product_img3.jpg'
import loanIcon from '../../../assets/image/Product_img1.png'
import diamondIcon from '../../../assets/image/App_img.png'
import huidIcon from '../../../assets/image/Hero_img.jpg'

const features = [
  {
    title: 'Weighing Scale Integration',
    description:
      'Eliminate manual errors by piping accurate gross weights directly into invoicing and barcode tagging.',
    icon: weighingIcon,
    accent: '#fce8d5',
  },
  {
    title: 'Bhav Cutting / Rate Cut',
    description:
      'Exchange new metal for old with partial or full bhav cuts, keeping paperwork aligned with karigar norms.',
    icon: bhavIcon,
    accent: '#e5f5f0',
  },
  {
    title: 'Customer Loyalty Program',
    description:
      'Reward repeat customers with points, redeemable at POS or via WhatsApp. Configure SMS nudges for renewals.',
    icon: loyaltyIcon,
    accent: '#fdf0f7',
  },
  {
    title: 'Jewellery Repair Process',
    description:
      'Track repairs with auto-SMS alerts once articles are ready. Assign pieces to karigars straight from the panel.',
    icon: repairIcon,
    accent: '#eff3ff',
  },
  {
    title: 'Gold Karigar Management',
    description:
      'Assign orders to smiths, monitor metal movement, and filter by statuses like new, pending, or delivered.',
    icon: karigarIcon,
    accent: '#fff0ef',
  },
  {
    title: 'Girvi / Gold Loan',
    description:
      'Manage interest cycles, store customer KYC, and maintain live value of pledged ornaments with photo evidence.',
    icon: loanIcon,
    accent: '#fff9e8',
  },
  {
    title: 'Diamond Certification',
    description:
      'Pull certificate details from the vault, keep a tamper-proof log, and share digital certificates with customers.',
    icon: diamondIcon,
    accent: '#e9f2ff',
  },
  {
    title: 'HUID Compliance',
    description:
      'Search and manage pieces via six-character HUID tags. Ensure new stock aligns with BIS requirements.',
    icon: huidIcon,
    accent: '#f4f8ff',
  },
]

const FeatureHighlights = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#fff8ef] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#f16338]">Highlights</p>
          <h2 className="mt-3 font-heading text-4xl text-[#0f2d55]">Features of Online Munim</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
            Cover day-to-day jewellery operations with ready modules that keep gold, diamond, and loan workflows in sync.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-[28px] border border-orange-100 bg-white/90 p-6 shadow-[0_15px_35px_rgba(15,45,85,0.08)] transition hover:-translate-y-1 hover:shadow-[0_25px_45px_rgba(15,45,85,0.12)]"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-2xl p-3 shadow-inner" style={{ backgroundColor: feature.accent }}>
                  <img src={feature.icon} alt={feature.title} className="h-10 w-10 rounded-xl object-cover" />
                </div>
                <h3 className="text-lg font-semibold text-[#0f2d55]">{feature.title}</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{feature.description}</p>
              <div className="mt-4 h-0.5 w-full rounded-full bg-gradient-to-r from-transparent via-[#f7a047] to-transparent opacity-0 transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureHighlights


