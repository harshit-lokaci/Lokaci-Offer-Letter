"use client";

export default function PdfLayout({ letter }) {
    if (!letter) {
        return (
            <div className="text-center py-20 text-gray-500">
                Loading letter details...
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-10 my-10">
            {/* Title */}
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                Offer Letter
            </h1>

            {/* Candidate & Job Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
                <p><strong>Candidate Name:</strong> {letter?.candidateName || "—"}</p>
                <p><strong>Job Title:</strong> {letter?.jobTitle || "—"}</p>
                <p><strong>Joining Date:</strong> {letter?.joiningDate || "—"}</p>
                <p><strong>Location:</strong> {letter?.location || "—"}</p>
                <p><strong>Salary:</strong> {letter?.salary || "—"}</p>
                <p><strong>Employment Type:</strong> {letter?.employmentType || "—"}</p>
            </div>

            <hr className="my-6" />

            {/* Company Info */}
            <div className="space-y-2 text-gray-700">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Company Details</h2>
                <p><strong>Company:</strong> {letter?.companyName || "—"}</p>
                <p><strong>Address:</strong> {letter?.companyAddress || "—"}</p>
                <p><strong>Phone:</strong> {letter?.companyPhone || "—"}</p>
                <p><strong>Email:</strong> {letter?.companyEmail || "—"}</p>
                <p><strong>Office Hours:</strong> {letter?.officeHours || "—"}</p>
                <p><strong>Working Hours:</strong> {letter?.workingHours || "—"}</p>
                <p><strong>Probation Period:</strong> {letter?.probationPeriod || "—"}</p>
            </div>

            <hr className="my-6" />

            {/* What to Expect */}
            <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">What to Expect</h2>
                <ul className="list-disc list-inside space-y-1">
                    {letter?.whatToExpect?.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    )) || <li>—</li>}
                </ul>
            </div>

            {/* Terms */}
            <div className="mt-6 space-y-6">
                <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Employment Terms</h2>
                    <ul className="list-disc list-inside space-y-1">
                        {letter?.termsEmployment?.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        )) || <li>—</li>}
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Compensation & Benefits</h2>
                    <ul className="list-disc list-inside space-y-1">
                        {letter?.termsCompensation?.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        )) || <li>—</li>}
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Compliance</h2>
                    <ul className="list-disc list-inside space-y-1">
                        {letter?.termsCompliance?.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        )) || <li>—</li>}
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Work Arrangements</h2>
                    <ul className="list-disc list-inside space-y-1">
                        {letter?.termsWorkArrangements?.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        )) || <li>—</li>}
                    </ul>
                </div>
            </div>

            {/* Important Notes */}
            <div className="mt-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Important Notes</h2>
                <p className="italic">{letter?.importantNotes || "—"}</p>
            </div>

            {/* Documents Required */}
            <div className="mt-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Documents Required</h2>
                <ul className="list-disc list-inside space-y-1">
                    {letter?.documentsRequired?.map((doc, idx) => (
                        <li key={idx}>{doc}</li>
                    )) || <li>—</li>}
                </ul>
            </div>

            <hr className="my-6" />

            {/* HR Info */}
            <div className="space-y-1 text-gray-700">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">HR Details</h2>
                <p><strong>HR Manager:</strong> {letter?.hrManagerName || "—"}</p>
                <p><strong>Email:</strong> {letter?.hrEmail || "—"}</p>
                <p><strong>Phone:</strong> {letter?.hrPhone || "—"}</p>
                <p><strong>Availability:</strong> {letter?.hrTiming || "—"}</p>
            </div>

            {/* Acceptance Section */}
            <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Candidate Acceptance</h2>
                <p>
                    I, <strong>{letter?.candidateNameAcceptance || "—"}</strong>, accept the terms
                    and conditions of this employment offer.
                </p>
                <p className="mt-2"><strong>Date:</strong> {letter?.acceptanceDate || "—"}</p>
            </div>

            {/* Deadlines */}
            <div className="mt-8">
                <p><strong>Offer Acceptance Deadline:</strong> {letter?.acceptanceDeadline || "—"}</p>
                <p><strong>Offer Validity:</strong> {letter?.offerDeadline || "—"}</p>
            </div>
        </div>
    );
}
