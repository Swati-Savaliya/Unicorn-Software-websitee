import { useMemo, useState } from 'react'
import Header from './Header'
import Footer from './HomePage/Footer'

const SignUp = () => {
  const captchaCode = useMemo(() => 'DD201', [])

  const initialFormState = {
    name: '',
    phone: '',
    email: '',
    code: '',
    billingName: '',
    gst: '',
    address: '',
    state: '',
    country: 'India',
    city: '',
    pincode: '',
    loginId: '',
    password: '',
    package: '',
    staffCode: '',
    captcha: '',
    consent: false,
  }

  const [formData, setFormData] = useState(initialFormState)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const fieldConfig = [
    { label: 'Name*', placeholder: 'Enter name', name: 'name', required: true },
    {
      label: 'Phone No.*',
      placeholder: '+91 98765 43210',
      name: 'phone',
      required: true,
    },
    {
      label: 'Email ID*',
      placeholder: 'Enter email',
      name: 'email',
      required: true,
    },
    {
      label: 'Jewellersapp Code',
      placeholder: 'Enter unique code',
      name: 'code',
    },
    {
      label: 'Billing Name*',
      placeholder: 'Billing firm name',
      name: 'billingName',
      required: true,
    },
    {
      label: 'GST No. (Optional)',
      placeholder: 'GST number',
      name: 'gst',
    },
    {
      label: 'Address*',
      placeholder: 'Store address',
      name: 'address',
      full: true,
      required: true,
      type: 'textarea',
      rows: 3,
    },
    { label: 'State*', placeholder: 'State', name: 'state', required: true },
    {
      label: 'Country*',
      placeholder: 'India',
      name: 'country',
      required: true,
    },
    { label: 'City*', placeholder: 'City', name: 'city', required: true },
    {
      label: 'Pincode*',
      placeholder: 'Postal code',
      name: 'pincode',
      required: true,
    },
    {
      label: 'User / Login ID*',
      placeholder: 'Create login ID',
      name: 'loginId',
      required: true,
    },
    {
      label: 'Password*',
      placeholder: 'Create password',
      name: 'password',
      type: 'password',
      required: true,
    },
    {
      label: 'Software Packages',
      placeholder: 'Select package',
      name: 'package',
    },
    {
      label: 'Staff Code',
      placeholder: 'Optional staff code',
      name: 'staffCode',
    },
  ]

  const validators = {
    name: (value) =>
      value.trim().length < 3 ? 'Enter at least 3 characters' : '',
    phone: (value) =>
      /^\d{10}$/.test(value.trim())
        ? ''
        : 'Enter a valid 10-digit mobile number',
    email: (value) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
        ? ''
        : 'Enter a valid email address',
    billingName: (value) => (value.trim() ? '' : 'Billing name is required'),
    address: (value) =>
      value.trim().length < 10 ? 'Provide a detailed address' : '',
    state: (value) => (value.trim() ? '' : 'State is required'),
    country: (value) => (value.trim() ? '' : 'Country is required'),
    city: (value) => (value.trim() ? '' : 'City is required'),
    pincode: (value) =>
      /^\d{6}$/.test(value.trim()) ? '' : 'Enter 6-digit pincode',
    loginId: (value) => (value.trim().length >= 4 ? '' : 'Min 4 characters'),
    password: (value) =>
      value.trim().length >= 6 ? '' : 'Password must be 6+ chars',
    captcha: (value) =>
      value.trim().toUpperCase() === captchaCode
        ? ''
        : 'Captcha does not match',
    consent: (value) =>
      value ? '' : 'Please allow SMS updates to continue',
  }

  const validateField = (name, value) => {
    if (!validators[name]) return ''
    return validators[name](value)
  }

  const validateForm = (data) => {
    const nextErrors = {}
    Object.keys(validators).forEach((field) => {
      const msg = validateField(field, data[field])
      if (msg) nextErrors[field] = msg
    })
    return nextErrors
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    const fieldValue = type === 'checkbox' ? checked : value
    setFormData((prev) => ({ ...prev, [name]: fieldValue }))
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, fieldValue) }))
    }
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    setErrors((prev) => ({ ...prev, [name]: validateField(name, formData[name]) }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setTouched(
      Object.keys({ ...formData, consent: formData.consent }).reduce(
        (acc, key) => ({ ...acc, [key]: true }),
        {}
      )
    )
    const nextErrors = validateForm(formData)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length) return

    setIsSubmitting(true)
    setSubmitStatus(null)

    setTimeout(() => {
      console.log('Sign-up payload:', formData)
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData(initialFormState)
      setTouched({})
    }, 800)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff7ef] via-white to-[#fff7ef]">
      <Header />

      <section className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-16 lg:flex-row lg:items-center lg:gap-14">
        <div className="relative flex-1 lg:flex-[1.05]">
          <div className="absolute -inset-8 hidden rounded-[48px] bg-gradient-to-br from-[#fff8f1] via-white to-[#ffe0bf] blur-3xl lg:block" />
          <div className="relative rounded-[40px] bg-gradient-to-br from-white via-[#fff5e7] to-[#ffe7c6] p-10 shadow-[0_40px_80px_rgba(241,99,56,0.2)]">
            <div className="space-y-6">
              <span className="inline-flex w-fit items-center rounded-full border border-orange-200 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-orange-500">
                Jewellery ERP
              </span>
              <div className="space-y-4">
                <h1 className="text-4xl font-semibold text-slate-900 lg:text-5xl">
                  Jewellery Accounting & Billing Software
                </h1>
                <p className="text-base text-slate-600">
                  All-in-one solution for POS, stock, gold loans, repairing and GST reporting.
                  Loved by 5000+ jewellers across India.
                </p>
              </div>

              <div className="rounded-[30px] border border-white/60 bg-white/80 px-6 py-5 text-center shadow-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.4em] text-orange-400">
                  Help Line
                </p>
                <p className="mt-2 text-2xl font-bold text-slate-900">
                +91-94208447251
                </p>
              </div>
            </div>

           
          </div>

        <div className="mt-6 rounded-[32px] border border-white/70 bg-gradient-to-r from-[#fff1e0] via-white to-[#ffe5d0] px-8 py-7 text-center shadow-[0_25px_60px_rgba(15,23,42,0.08)]">
          <p className="text-lg font-semibold text-slate-900 drop-shadow-sm">
            Jewellery Accounting & Billing Software
          </p>
          <div className="mt-4 inline-flex w-full flex-wrap items-center justify-center gap-4 rounded-full border border-orange-100 bg-white px-7 py-2.5 text-center text-sm font-semibold text-orange-500 shadow-sm">
            <span className="text-base text-black drop-shadow-sm text-15px">
              Help Line
            </span>
            <span className="text-base text-orange-600 drop-shadow-sm">
              +91-94208447251
            </span>
          </div>
        </div>
        </div>

        <div className="flex-1 rounded-[32px] border border-orange-100 bg-white/95 p-10 backdrop-blur-sm shadow-[0_25px_60px_rgba(15,23,42,0.08)] lg:flex-[1.15]">
        <div className="mb-8 text-center space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-orange-400">
            Sign Up
          </p>
          <h2 className="text-3xl font-bold text-slate-900">
            Start your free trial
          </h2>
          <p className="text-sm text-slate-500">
            Fill the form and our onboarding specialist will reach out shortly.
          </p>
        </div>

        {submitStatus === 'success' && (
          <div className="mb-6 rounded-2xl border border-green-100 bg-green-50 px-4 py-3 text-sm text-green-700">
            🎉 Request received! Our onboarding team will call you within one business day.
          </div>
        )}

        <form className="grid gap-5 md:grid-cols-2" onSubmit={handleSubmit} noValidate>
          {fieldConfig.map((field) => (
            <div
              key={field.name}
              className={`flex flex-col ${field.full ? 'md:col-span-2' : 'md:col-span-1'}`}
            >
              <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">
                {field.label}
              </label>
              {field.type === 'textarea' ? (
                <textarea
                  rows={field.rows || 3}
                  name={field.name}
                  value={formData[field.name]}
                  placeholder={field.placeholder}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full rounded-2xl border px-4 py-3 text-sm transition focus:outline-none focus:ring-2 ${
                    errors[field.name] && touched[field.name]
                      ? 'border-red-300 ring-red-200'
                      : 'border-slate-200 focus:border-orange-400 focus:ring-orange-400/20'
                  }`}
                />
              ) : (
                <input
                  type={field.type || 'text'}
                  name={field.name}
                  value={formData[field.name]}
                  placeholder={field.placeholder}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={errors[field.name] && touched[field.name] ? 'true' : 'false'}
                  className={`w-full rounded-2xl border px-4 py-3 text-sm transition focus:outline-none focus:ring-2 ${
                    errors[field.name] && touched[field.name]
                      ? 'border-red-300 ring-red-200'
                      : 'border-slate-200 focus:border-orange-400 focus:ring-orange-400/20'
                  }`}
                />
              )}
              {errors[field.name] && touched[field.name] && (
                <span className="mt-1 text-xs font-semibold text-red-500">{errors[field.name]}</span>
              )}
            </div>
          ))}

          <div className="md:col-span-2">
            <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Enter Captcha
            </label>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="rounded-2xl border border-dashed border-slate-300 px-6 py-3 text-center font-semibold tracking-[0.6em] text-slate-700">
                {captchaCode.split('').join(' ')}
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  name="captcha"
                  value={formData.captcha}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter captcha"
                  className={`w-full rounded-2xl border px-4 py-3 text-sm transition focus:outline-none focus:ring-2 ${
                    errors.captcha && touched.captcha
                      ? 'border-red-300 ring-red-200'
                      : 'border-slate-200 focus:border-orange-400 focus:ring-orange-400/20'
                  }`}
                />
                {errors.captcha && touched.captcha && (
                  <span className="mt-1 block text-xs font-semibold text-red-500">
                    {errors.captcha}
                  </span>
                )}
              </div>
            </div>
          </div>

          <label className="md:col-span-2 inline-flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-600">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              onBlur={handleBlur}
              className="h-4 w-4 rounded border-slate-300 text-orange-500 focus:ring-orange-500"
            />
            I agree to receive free SMS messages from Unicorn.
          </label>
          {errors.consent && touched.consent && (
            <span className="md:col-span-2 -mt-4 text-xs font-semibold text-red-500">
              {errors.consent}
            </span>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="md:col-span-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 px-6 py-4 text-base font-semibold text-white shadow-[0px_12px_30px_rgba(255,123,0,0.35)] transition hover:shadow-[0px_16px_36px_rgba(255,123,0,0.45)] focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/60 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </section>

    <Footer />
  </div>
  )
}

export default SignUp

