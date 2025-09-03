import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Terms of Service | Cardinal Consulting"
        description="Read our comprehensive Terms of Service that govern your use of Cardinal Consulting's web development and digital marketing services."
        keywords="terms of service, terms and conditions, Cardinal Consulting terms, service agreement"
        pageType="about"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Terms of Service", url: "/terms-of-service" }
        ]}
        url="/terms-of-service"
      />
      
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using the services provided by Cardinal Consulting ("we," "our," or "us"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              <p className="text-gray-700 mb-4">
                These Terms of Service ("Terms") govern your use of our website, services, and any related applications (collectively, the "Service") operated by Cardinal Consulting.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="text-gray-700 mb-4">
                Cardinal Consulting provides web development, digital marketing, and related technology services including but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Custom website development and design</li>
                <li>Web application development</li>
                <li>Mobile application development</li>
                <li>Digital marketing and SEO services</li>
                <li>Brand identity and design services</li>
                <li>Cloud infrastructure and hosting solutions</li>
                <li>Consulting and technical support</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Accounts and Registration</h2>
              <p className="text-gray-700 mb-4">
                When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.
              </p>
              <p className="text-gray-700 mb-4">
                You agree not to disclose your password to any third party and to take sole responsibility for any activities or actions under your account, whether or not you have authorized such activities or actions.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Intellectual Property Rights</h2>
              <p className="text-gray-700 mb-4">
                The Service and its original content, features, and functionality are and will remain the exclusive property of Cardinal Consulting and its licensors. The Service is protected by copyright, trademark, and other laws.
              </p>
              <p className="text-gray-700 mb-4">
                For projects we develop for clients:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Client retains ownership of their content and brand assets</li>
                <li>Cardinal Consulting retains rights to underlying code frameworks and technologies</li>
                <li>Portfolio rights: We may showcase completed work in our portfolio</li>
                <li>Custom code developed specifically for the client transfers upon final payment</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Payment Terms</h2>
              <p className="text-gray-700 mb-4">
                Payment terms will be specified in individual project agreements. Generally:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Projects require a deposit before work begins</li>
                <li>Payment schedules are outlined in project proposals</li>
                <li>Final deliverables are provided upon full payment</li>
                <li>Late payments may incur additional fees</li>
                <li>All fees are non-refundable unless otherwise specified</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Project Terms and Deliverables</h2>
              <p className="text-gray-700 mb-4">
                Each project will be governed by a separate agreement that includes:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Project scope and deliverables</li>
                <li>Timeline and milestones</li>
                <li>Payment schedule</li>
                <li>Revision limits</li>
                <li>Acceptance criteria</li>
                <li>Warranty and support terms</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Client Responsibilities</h2>
              <p className="text-gray-700 mb-4">
                Clients are responsible for:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Providing accurate project requirements and specifications</li>
                <li>Timely feedback and approval of deliverables</li>
                <li>Providing necessary content and assets</li>
                <li>Maintaining backups of their data</li>
                <li>Ensuring compliance with applicable laws and regulations</li>
                <li>Providing access to necessary systems and accounts</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                In no event shall Cardinal Consulting, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Your use or inability to use the Service</li>
                <li>Any unauthorized access to or use of our servers</li>
                <li>Any interruption or cessation of transmission to or from the Service</li>
                <li>Any bugs, viruses, or other harmful code that may be transmitted</li>
                <li>Any errors or omissions in any content or for any loss or damage incurred</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Warranty and Support</h2>
              <p className="text-gray-700 mb-4">
                We provide a 30-day warranty period for all deliverables. During this period, we will fix any bugs or issues that are our responsibility at no additional cost.
              </p>
              <p className="text-gray-700 mb-4">
                Support and maintenance services are available under separate agreements. Ongoing support is not included in project pricing unless specifically stated.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Confidentiality</h2>
              <p className="text-gray-700 mb-4">
                We maintain strict confidentiality regarding client information and project details. We will not disclose confidential information to third parties without written consent, except as required by law.
              </p>
              <p className="text-gray-700 mb-4">
                Clients are also expected to maintain confidentiality of our proprietary information and methodologies.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Termination</h2>
              <p className="text-gray-700 mb-4">
                We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
              </p>
              <p className="text-gray-700 mb-4">
                If you wish to terminate your account, you may simply discontinue using the Service. All provisions of the Terms which by their nature should survive termination shall survive termination.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Governing Law</h2>
              <p className="text-gray-700 mb-4">
                These Terms shall be interpreted and governed by the laws of the State of Texas, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Changes to Terms</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
              </p>
              <p className="text-gray-700 mb-4">
                What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Dispute Resolution</h2>
              <p className="text-gray-700 mb-4">
                Any disputes arising from these Terms or the Service shall be resolved through good faith negotiations. If negotiations fail, disputes shall be resolved through binding arbitration in Houston, Texas, in accordance with the rules of the American Arbitration Association.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Force Majeure</h2>
              <p className="text-gray-700 mb-4">
                We shall not be liable for any failure to perform due to circumstances beyond our reasonable control, including but not limited to acts of God, war, terrorism, riots, fire, natural disasters, power outages, or government actions.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">16. Severability</h2>
              <p className="text-gray-700 mb-4">
                If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">17. Entire Agreement</h2>
              <p className="text-gray-700 mb-4">
                These Terms constitute the entire agreement between you and Cardinal Consulting regarding the use of the Service, superseding any prior agreements between you and Cardinal Consulting relating to your use of the Service.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">18. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Cardinal Consulting</strong><br />
                  2100 West Loop S Fwy<br />
                  Houston, TX 77027<br />
                  United States
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> hunain@cardinalhtx.com<br />
                  <strong>Phone:</strong> (832) 989-2163
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TermsOfService; 