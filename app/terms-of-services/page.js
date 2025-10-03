"use client";

import { motion } from "framer-motion";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

export default function TermsPage() {
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
                    Terms & Services
                </motion.h1>

                <div className="space-y-8">
                    <p>
                        Welcome to <span className="font-semibold">Lokaci Offer Letter Generator</span>.
                        By accessing or using our services, you agree to comply with and be bound by these Terms of Service.
                        Please read them carefully, as they outline your rights and obligations while using our platform.
                    </p>

                    {/* Section 1 */}
                    <h2 className="text-2xl font-semibold text-gray-900">1. Use of Services</h2>
                    <p>
                        Our platform allows HR teams, recruiters, and employers to generate professional
                        offer letters quickly. You agree to use the services only for lawful and organizational
                        purposes. Misuse, such as generating fraudulent letters or impersonating others, is strictly prohibited.
                    </p>

                    {/* Section 2 */}
                    <h2 className="text-2xl font-semibold text-gray-900">2. User Accounts & Responsibilities</h2>
                    <p>
                        To access certain features, you may need to create an account. You are responsible for
                        maintaining the confidentiality of your login credentials. Any activity performed under
                        your account is your responsibility. Sharing accounts between multiple users is not permitted.
                    </p>

                    {/* Section 3 */}
                    <h2 className="text-2xl font-semibold text-gray-900">3. Offer Letter Content</h2>
                    <p>
                        While our templates are designed for professional use, the final responsibility for
                        reviewing and verifying the content of each offer letter lies with you. Lokaci is not
                        liable for errors, omissions, or compliance issues that arise from your generated letters.
                    </p>

                    {/* Section 4 */}
                    <h2 className="text-2xl font-semibold text-gray-900">4. Intellectual Property</h2>
                    <p>
                        All templates, designs, branding, and platform features remain the intellectual property
                        of Lokaci. You are granted a limited license to use them for your company’s hiring needs,
                        but redistribution, resale, or public publishing of the templates is prohibited.
                    </p>

                    {/* Section 5 */}
                    <h2 className="text-2xl font-semibold text-gray-900">5. Data & Privacy</h2>
                    <p>
                        Candidate information you input into the system is securely stored and will never be shared
                        with third parties without your consent. Please refer to our{" "}
                        <a href="/privacy-policy" className="text-indigo-600 hover:underline">
                            Privacy Policy
                        </a>{" "}
                        for full details on how we manage your data.
                    </p>

                    {/* Section 6 */}
                    <h2 className="text-2xl font-semibold text-gray-900">6. Payments & Subscriptions</h2>
                    <p>
                        Some features of our platform may require a paid subscription. By subscribing, you agree
                        to provide accurate payment details and authorize recurring billing as outlined at checkout.
                        Cancellation must be done before the renewal date to avoid charges for the next cycle.
                    </p>

                    {/* Section 7 */}
                    <h2 className="text-2xl font-semibold text-gray-900">7. Termination of Service</h2>
                    <p>
                        We reserve the right to suspend or terminate accounts that violate these Terms.
                        In cases of serious misconduct (e.g., fraudulent use), access may be revoked immediately
                        without prior notice.
                    </p>

                    {/* Section 8 */}
                    <h2 className="text-2xl font-semibold text-gray-900">8. Limitation of Liability</h2>
                    <p>
                        While we strive to ensure accuracy and uptime of our services, Lokaci shall not be held
                        liable for any indirect, incidental, or consequential damages arising from the use or
                        inability to use the platform.
                    </p>

                    {/* Section 9 */}
                    <h2 className="text-2xl font-semibold text-gray-900">9. Modifications to Terms</h2>
                    <p>
                        We may update these Terms from time to time to reflect changes in our services or legal
                        requirements. Continued use of the platform after such updates constitutes acceptance of
                        the revised Terms.
                    </p>

                    {/* Section 10 */}
                    <h2 className="text-2xl font-semibold text-gray-900">10. Contact Us</h2>
                    <p>
                        If you have any questions about these Terms or require support, please contact us at{" "}
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
