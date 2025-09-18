export const metadata = {
  title: 'Privacy Policy | Trust Technical Services',
  description: 'How Trust Technical Services collects, uses, and protects your personal information.',
}

function formatTodayNZ() {
  try {
    return new Date().toLocaleDateString('en-NZ', { year: 'numeric', month: 'long', day: 'numeric' })
  } catch {
    return new Date().toISOString().slice(0, 10)
  }
}

export default function PrivacyPolicyPage() {
  const effectiveDate = formatTodayNZ()
  const sections = [
    {
      id: 'introduction',
      title: '1. Introduction',
      content: (
        <>
          <p className="text-gray-300 text-justify">
            We are committed to protecting your privacy. This policy explains how we collect, use, share, and secure your personal information when you use our website (testandtag.fun) and related services, including “Test & Tag” services, electronics design, software/mobile/app services, automation, etc.
          </p>
        </>
      ),
    },
    {
      id: 'information-we-collect',
      title: '2. Information We Collect',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="text-white font-semibold">Personal Information you provide</h4>
            <p className="text-gray-300 text-justify">
              Name, email address, phone number, postal address when you contact us, request service, request quotes, or fill forms. Billing or payment information if applicable.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold">Usage / Technical Information collected automatically</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>IP address, browser type, operating system, device type</li>
              <li>Information about how you use the website: pages visited, duration, clicks, links used</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold">Cookies and Tracking Technologies</h4>
            <p className="text-gray-300 text-justify">
              Cookies, local storage, web beacons, etc. to help with site functionality, remembering preferences, and analytics.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'how-we-use',
      title: '3. How We Use Your Information',
      content: (
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Providing the services you request (e.g. test & tag, electronics design)</li>
          <li>Responding to your enquiries / customer support</li>
          <li>Improving and maintaining our website and services</li>
          <li>Sending you communication (e.g. confirmations, responses, newsletters / updates) if you’ve opted-in</li>
          <li>Analytics to understand site usage, detect and prevent fraud or abuse, and maintain security</li>
        </ul>
      ),
    },
    {
      id: 'legal-basis',
      title: '4. Legal Basis for Processing (if applicable)',
      content: (
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Your consent (for example, to send marketing emails or use non-essential cookies)</li>
          <li>Contract / performing services you requested</li>
          <li>Legal obligations (e.g. tax / financial / regulatory compliance)</li>
          <li>Legitimate interests (improving service, maintaining security)</li>
        </ul>
      ),
    },
    {
      id: 'sharing',
      title: '5. Sharing of Information',
      content: (
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Service providers who assist us (hosting, email providers, payment processors, etc.)</li>
          <li>Third-party software tools or analytics services we use</li>
          <li>Legal or regulatory authorities when required by law or to protect rights, safety, or property</li>
        </ul>
      ),
    },
    {
      id: 'retention',
      title: '6. Data Retention',
      content: (
        <div className="text-gray-300 space-y-2 text-justify">
          <p>We keep your personal information only as long as needed for the purposes in this policy, or as required by law.</p>
          <p>When no longer needed, we securely delete or anonymize it.</p>
        </div>
      ),
    },
    {
      id: 'security',
      title: '7. Security',
      content: (
        <div className="text-gray-300 space-y-2 text-justify">
          <p>We use appropriate technical and organisational measures to protect your data (encryption, secure servers, access controls, etc.).</p>
          <p>But note: no method of transmission over the Internet or storage is completely secure — we cannot guarantee absolute security.</p>
        </div>
      ),
    },
    {
      id: 'cookies',
      title: '8. Cookies and Similar Technologies',
      content: (
        <div className="text-gray-300 space-y-2 text-justify">
          <p>
            We use cookies for essential site functionality, to remember preferences, and for analytics. Some cookies may be optional; you have the option to
            disable cookies via your browser or via settings, though this may limit some site functionality.
          </p>
        </div>
      ),
    },
    {
      id: 'your-rights',
      title: '9. Your Rights',
      content: (
        <div className="text-gray-300 space-y-2">
          <p className="text-justify">Depending on your jurisdiction, you may have the right to:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Access your personal data</li>
            <li>Correct or update inaccurate personal data</li>
            <li>Delete your personal data</li>
            <li>Restrict processing of your personal data</li>
            <li>Withdraw consent (e.g. for marketing, cookies)</li>
            <li>Data portability</li>
          </ul>
          <p>To exercise these, contact us via the details below.</p>
        </div>
      ),
    },
    {
      id: 'children',
      title: '10. Children’s Privacy',
      content: (
        <div className="text-gray-300 space-y-2 text-justify">
          <p>Our services are not directed to children under [age – often 13 or local legal age].</p>
          <p>We do not knowingly collect data from children without parental consent.</p>
        </div>
      ),
    },
    {
      id: 'third-party',
      title: '11. Third-Party Links / Embedded Content',
      content: (
        <div className="text-gray-300 space-y-2 text-justify">
          <p>
            Our website may include links to other websites or services we don’t control. We are not responsible for their privacy practices. We may embed content from
            third parties whose privacy policy you should review.
          </p>
        </div>
      ),
    },
    {
      id: 'changes',
      title: '12. Changes to this Privacy Policy',
      content: (
        <div className="text-gray-300 space-y-2 text-justify">
          <p>
            We may update this policy from time to time. When we do, we will post the updated version on our website and update the “Effective Date”. If the changes are
            material, we may notify you via email or by prominent notice on the website.
          </p>
        </div>
      ),
    },
    {
      id: 'contact',
      title: '13. Contact Us',
      content: (
        <div className="text-gray-300 space-y-2">
          <p>
            If you have questions about this policy or your data, you can reach us at:
            <br />
            Email: <a className="text-orange-400 hover:underline" href="mailto:salaskjose@gmail.com">salaskjose@gmail.com</a>
          </p>
        </div>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-300 max-w-2xl text-justify">
            Privacy Policy for Trust Technical Services (“we”, “us”, “our”)
          </p>
          <p className="text-gray-400 mt-3">Effective Date: {effectiveDate}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* TOC */}
            <aside className="lg:col-span-3">
              <div className="sticky top-24 rounded-lg border border-gray-800 bg-gray-900/60 p-4">
                <h3 className="text-sm font-semibold text-gray-200 mb-3">On this page</h3>
                <ul className="space-y-2 text-sm">
                  {sections.map((s) => (
                    <li key={s.id}>
                      <a className="text-gray-400 hover:text-orange-400 transition-colors" href={`#${s.id}`}>
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Main */}
            <main className="lg:col-span-9 space-y-8">
              {sections.map((s) => (
                <section key={s.id} id={s.id} className="scroll-mt-24">
                  <div className="rounded-xl border border-gray-800 bg-gray-900/60 p-6 sm:p-8 shadow">
                    <h2 className="text-2xl font-bold mb-4 text-orange-400">{s.title}</h2>
                    <div className="prose prose-invert max-w-none">
                      {s.content}
                    </div>
                  </div>
                </section>
              ))}
            </main>
          </div>
        </div>
      </section>
    </div>
  )
}
