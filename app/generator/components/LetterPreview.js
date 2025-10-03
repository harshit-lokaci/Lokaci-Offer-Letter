'use client';

import { useContext } from 'react';
import { AppContext } from '@/app/context/AppContext';
import ContentEditable from 'react-contenteditable';
import Image from 'next/image';

const LetterPreviewEditable = ({ previewRef }) => {
  const { formData, setFormData, fieldRefs, handleInputChange } = useContext(AppContext);

  const editable = (key, placeholder, tag = "div", className = "") => (
    <ContentEditable
      innerRef={(el) => (fieldRefs.current[key] = el)}
      html={String(formData[key] || placeholder)}
      onChange={(e) => handleInputChange(key, e.currentTarget.innerHTML)}
      tagName={tag}
      className={className + " outline-none"}
    />
  );

  return (
    <div
      className="w-full bg-white h-full lg:max-h-[130vh] border-2 border-gray-200 scrollbar-none rounded-lg p-10 overflow-y-auto order-2"
      ref={previewRef}
    >
      {/* Title */}
      <div className="w-full text-center border-b border-gray-200 mb-6 p-6 flex flex-col items-center justify-center">
        <Image
          src="/images/logo.png"
          alt="logo image"
          width={60}
          height={60}
          className="border mb-2"
        />
        <h2 className="text-xl font-semibold">{formData.companyName}</h2>
        <p className="text-md text-gray-600">
          <span>{formData.hrPhone}</span> / <span>{formData.hrEmail}</span>
        </p>
      </div>
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Offer Letter
      </h1>

      {/* Candidate & Job Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
        <div><strong>Candidate Name:</strong> {editable("candidateName", "[Candidate Name]", "span")}</div>
        <div><strong>Job Title:</strong> {editable("jobTitle", "[Job Title]", "span")}</div>
        <div><strong>Joining Date:</strong> {editable("joiningDate", "[Joining Date]", "span")}</div>
        <div><strong>Location:</strong> {editable("location", "[Location]", "span")}</div>
        <div><strong>Salary:</strong> {editable("salary", "[Salary]", "span")}</div>
        <div><strong>Employment Type:</strong> {editable("employmentType", "[Employment Type]", "span")}</div>
      </div>

      <hr className="my-6" />

      {/* Company Info */}
      <div className="space-y-2 text-gray-700">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Company Details</h2>
        <div><strong>Company:</strong> {editable("companyName", "[Company Name]")}</div>
        <div><strong>Address:</strong> {editable("companyAddress", "[Company Address]")}</div>
        <div><strong>Phone:</strong> {editable("companyPhone", "[Company Phone]")}</div>
        <div><strong>Email:</strong> {editable("companyEmail", "[Company Email]")}</div>
        <div><strong>Office Hours:</strong> {editable("officeHours", "[Office Hours]")}</div>
        <div><strong>Working Hours:</strong> {editable("workingHours", "[Working Hours]")}</div>
        <div><strong>Probation Period:</strong> {editable("probationPeriod", "[Probation Period]")}</div>
      </div>

      <hr className="my-6" />

      {/* What to Expect */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-3">What to Expect</h2>
        <ul className="list-disc list-inside space-y-1">
          {formData.whatToExpect?.map((item, index) => (
            <ContentEditable
              key={index}
              innerRef={(el) => {
                if (!fieldRefs.current.whatToExpect) fieldRefs.current.whatToExpect = [];
                fieldRefs.current.whatToExpect[index] = el;
              }}
              html={String(item || "")}
              onChange={(e) => {
                const value = e.currentTarget.innerHTML; // ✅ FIXED
                setFormData((prev) => {
                  const updated = [...prev.whatToExpect];
                  updated[index] = value;
                  return { ...prev, whatToExpect: updated };
                });
              }}
              tagName="li"
              className="outline-none"
            />
          ))}
        </ul>
      </div>

      {/* Terms */}
      <div className="mt-6 space-y-6">
        {[
          { title: "Employment Terms", key: "termsEmployment" },
          { title: "Compensation & Benefits", key: "termsCompensation" },
          { title: "Compliance", key: "termsCompliance" },
          { title: "Work Arrangements", key: "termsWorkArrangements" },
        ].map((section, idx) => (
          <div key={idx}>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{section.title}</h2>
            <ul className="list-disc list-inside space-y-1">
              {formData[section.key]?.map((item, index) => (
                <ContentEditable
                  key={index}
                  innerRef={(el) => {
                    if (!fieldRefs.current[section.key]) fieldRefs.current[section.key] = [];
                    fieldRefs.current[section.key][index] = el;
                  }}
                  html={String(item || "")}
                  onChange={(e) => {
                    const value = e.currentTarget.innerHTML; // ✅ FIXED
                    setFormData((prev) => {
                      const updated = [...prev[section.key]];
                      updated[index] = value;
                      return { ...prev, [section.key]: updated };
                    });
                  }}
                  tagName="li"
                  className="outline-none"
                />
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Important Notes */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Important Notes</h2>
        {editable("importantNotes", "[Important Notes]", "p", "italic")}
      </div>

      {/* Documents Required */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Documents Required</h2>
        <ul className="list-disc list-inside space-y-1">
          {formData.documentsRequired?.map((doc, index) => (
            <ContentEditable
              key={index}
              innerRef={(el) => {
                if (!fieldRefs.current.documentsRequired) fieldRefs.current.documentsRequired = [];
                fieldRefs.current.documentsRequired[index] = el;
              }}
              html={String(doc || "")}
              onChange={(e) => {
                const value = e.currentTarget.innerHTML; // ✅ FIXED
                setFormData((prev) => {
                  const updated = [...prev.documentsRequired];
                  updated[index] = value;
                  return { ...prev, documentsRequired: updated };
                });
              }}
              tagName="li"
              className="outline-none"
            />
          ))}
        </ul>
      </div>

      <hr className="my-6" />

      {/* HR Info */}
      <div className="space-y-1 text-gray-700">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">HR Details</h2>
        <div><strong>HR Manager:</strong> {editable("hrManagerName", "[HR Manager Name]")}</div>
        <div><strong>Email:</strong> {editable("hrEmail", "[HR Email]")}</div>
        <div><strong>Phone:</strong> {editable("hrPhone", "[HR Phone]")}</div>
        <div><strong>Availability:</strong> {editable("hrTiming", "[HR Timing]")}</div>
      </div>

      {/* Acceptance Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Candidate Acceptance</h2>
        <p>
          I, <strong>{formData.candidateName || "[Candidate Name]"}</strong>, accept the terms
          and conditions of this employment offer.
        </p>
        <div className="mt-2"><strong>Date:</strong> {editable("acceptanceDate", "[Acceptance Date]", "span")}</div>
      </div>

      {/* Deadlines */}
      <div className="mt-8">
        <div><strong>Offer Acceptance Deadline:</strong> {editable("acceptanceDeadline", "[Acceptance Deadline]", "span")}</div>
        <div><strong>Offer Validity:</strong> {editable("offerDeadline", "[Offer Deadline]", "span")}</div>
      </div>
    </div>
  );
};

export default LetterPreviewEditable;
