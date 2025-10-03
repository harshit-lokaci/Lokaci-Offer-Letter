"use client";

import { motion } from "framer-motion";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

export default function PrivacyPage() {
    return (
        <>
            <Header/>
            <section className="max-w-4xl mx-auto px-6 py-16 text-gray-800 leading-relaxed">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-gray-900 mb-8 text-center"
                >
                    Privacy Policy
                </motion.h1>

                <div className="space-y-8">
                    <p>
                        At <span className="font-semibold">Lokaci Offer Letter Generator</span>, we respect your privacy
                        and are committed to protecting the personal information you share with us.
                        This Privacy Policy explains how we collect, use, and safeguard your data when
                        you use our services.
                    </p>

                    {/* Section 1 */}
                    <h2 className="text-2xl font-semibold text-gray-900">1. Information We Collect</h2>
                    <p>
                        We may collect the following information when you use our platform:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Employer details (company name, contact info, branding assets)</li>
                        <li>Candidate details (name, email, job title, salary, start date, etc.)</li>
                        <li>Account information (email, password, billing details)</li>
                        <li>Usage data (device type, browser, IP address, and interactions with our app)</li>
                    </ul>

                    {/* Section 2 */}
                    <h2 className="text-2xl font-semibold text-gray-900">2. How We Use Your Data</h2>
                    <p>
                        The information we collect is used strictly for:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Generating accurate and professional offer letters</li>
                        <li>Saving candidate profiles for future use</li>
                        <li>Improving the performance and security of our platform</li>
                        <li>Billing, subscription management, and customer support</li>
                    </ul>

                    {/* Section 3 */}
                    <h2 className="text-2xl font-semibold text-gray-900">3. Data Storage & Security</h2>
                    <p>
                        All data is stored securely using encryption and industry best practices.
                        We take reasonable measures to prevent unauthorized access, disclosure,
                        alteration, or destruction of your data. However, no online service can
                        guarantee 100% security.
                    </p>

                    {/* Section 4 */}
                    <h2 className="text-2xl font-semibold text-gray-900">4. Sharing of Information</h2>
                    <p>
                        We do <span className="font-semibold">not sell or rent</span> your personal information to third parties.
                        Data may be shared only with:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Service providers (such as payment processors or cloud hosting services)</li>
                        <li>Legal authorities, if required by law or to protect our rights</li>
                    </ul>

                    {/* Section 5 */}
                    <h2 className="text-2xl font-semibold text-gray-900">5. Candidate Information</h2>
                    <p>
                        Employers are responsible for ensuring candidate data entered into the platform
                        is accurate and obtained lawfully. We process candidate data solely for the purpose
                        of generating offer letters and storing records for employers.
                    </p>

                    {/* Section 6 */}
                    <h2 className="text-2xl font-semibold text-gray-900">6. Cookies & Tracking</h2>
                    <p>
                        We may use cookies and similar tracking technologies to improve user experience,
                        remember preferences, and analyze platform usage. You can disable cookies in your
                        browser, but some features of the service may not work properly.
                    </p>

                    {/* Section 7 */}
                    <h2 className="text-2xl font-semibold text-gray-900">7. Your Rights</h2>
                    <p>
                        Depending on your location, you may have rights to access, correct, or delete your
                        personal data. To exercise these rights, please contact us using the details below.
                    </p>

                    {/* Section 8 */}
                    <h2 className="text-2xl font-semibold text-gray-900">8. Children’s Privacy</h2>
                    <p>
                        Our services are not directed toward individuals under the age of 16. We do not
                        knowingly collect personal data from children.
                    </p>

                    {/* Section 9 */}
                    <h2 className="text-2xl font-semibold text-gray-900">9. Changes to This Policy</h2>
                    <p>
                        We may update this Privacy Policy periodically to reflect changes in our practices.
                        We encourage you to review this page from time to time for the latest information.
                    </p>

                    {/* Section 10 */}
                    <h2 className="text-2xl font-semibold text-gray-900">10. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at{" "}
                        <a
                            href="mailto:support@lokaci.com"
                            className="text-indigo-600 hover:underline"
                        >
                            support@lokaci.com
                        </a>.
                    </p>
                </div>
            </section>
            <Footer/>
        </>
    );
}
