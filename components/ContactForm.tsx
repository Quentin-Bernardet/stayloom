'use client'

import { useState, FormEvent } from 'react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('submitting')
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch('https://formsubmit.co/ajax/stayloomproperty@gmail.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      if (res.ok) {
        setState('success')
        form.reset()
      } else {
        setState('error')
      }
    } catch {
      setState('error')
    }
  }

  const inputClass =
    'form-input w-full bg-transparent border-0 border-b border-taupe/60 py-3 font-jost text-sm text-deep-espresso placeholder-taupe/60 focus:outline-none focus:border-espresso transition-colors'

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-10">
      {/* Hidden fields for formsubmit.co */}
      <input type="hidden" name="_subject" value="New Property Assessment Request" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />

      {/* Row 1: First + Last name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label className="block font-jost text-xs tracking-widest uppercase text-taupe mb-3">
            First Name
          </label>
          <input
            name="first_name"
            type="text"
            required
            placeholder="Maria"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block font-jost text-xs tracking-widest uppercase text-taupe mb-3">
            Last Name
          </label>
          <input
            name="last_name"
            type="text"
            required
            placeholder="Johnson"
            className={inputClass}
          />
        </div>
      </div>

      {/* Row 2: Email + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label className="block font-jost text-xs tracking-widest uppercase text-taupe mb-3">
            Email
          </label>
          <input
            name="email"
            type="email"
            required
            placeholder="maria@email.com"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block font-jost text-xs tracking-widest uppercase text-taupe mb-3">
            Phone
          </label>
          <input
            name="phone"
            type="tel"
            placeholder="(239) 000-0000"
            className={inputClass}
          />
        </div>
      </div>

      {/* Row 3: Property Address */}
      <div>
        <label className="block font-jost text-xs tracking-widest uppercase text-taupe mb-3">
          Property Address
        </label>
        <input
          name="property_address"
          type="text"
          required
          placeholder="123 Gulf Shore Blvd, Fort Myers, FL 33901"
          className={inputClass}
        />
      </div>

      {/* Row 4: Bedrooms + Pool */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label className="block font-jost text-xs tracking-widest uppercase text-taupe mb-3">
            Number of Bedrooms
          </label>
          <select name="bedrooms" required className={`${inputClass} cursor-pointer`}>
            <option value="" disabled selected>
              Select
            </option>
            <option value="1">1 Bedroom</option>
            <option value="2">2 Bedrooms</option>
            <option value="3">3 Bedrooms</option>
            <option value="4">4 Bedrooms</option>
            <option value="5+">5 or more</option>
          </select>
        </div>
        <div>
          <label className="block font-jost text-xs tracking-widest uppercase text-taupe mb-3">
            Pool or Water Access
          </label>
          <select name="pool_access" required className={`${inputClass} cursor-pointer`}>
            <option value="" disabled selected>
              Select
            </option>
            <option value="private_pool">Private Pool</option>
            <option value="shared_pool">Shared Pool</option>
            <option value="waterfront">Waterfront / Canal</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>

      {/* Row 5: Message */}
      <div>
        <label className="block font-jost text-xs tracking-widest uppercase text-taupe mb-3">
          Message (optional)
        </label>
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us anything else about your property or situation..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Submit */}
      <div>
        <button
          type="submit"
          disabled={state === 'submitting'}
          className="px-10 py-4 bg-deep-espresso text-ivory font-jost font-500 text-sm tracking-widest uppercase hover:bg-espresso transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {state === 'submitting' ? 'Sending...' : 'Send My Request'}
        </button>

        {state === 'success' && (
          <p className="mt-4 font-jost text-sm text-espresso">
            Thank you. We will be in touch within 24 hours.
          </p>
        )}
        {state === 'error' && (
          <p className="mt-4 font-jost text-sm text-red-700">
            Something went wrong. Please email us directly at stayloomproperty@gmail.com.
          </p>
        )}
      </div>
    </form>
  )
}
