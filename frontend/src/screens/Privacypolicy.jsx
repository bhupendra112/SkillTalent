import React from "react";

const Privacypolicy = () => {
  return (
    <div className="p-6 bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6 text-center">Privacy Policy</h1>

        <p className="mb-4">
          At Manpower Solutions, we are committed to protecting the privacy and security of our clients and employees. This Privacy Policy outlines how we collect, use, and safeguard your personal information across our services.
        </p>

        {/* Apprentice Solution */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Apprentice Solution (NAPS & NATS)</h2>
          <p>
            We collect personal and professional information from candidates and clients to match apprentices with the appropriate organizations. All data is securely stored and used only for the purpose of apprenticeship placement and training.
          </p>
        </div>

        {/* Recruitment Process Outsourcing */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Recruitment Process Outsourcing</h2>
          <p>
            Personal and organizational information collected through our Recruitment Process Outsourcing service is used strictly to streamline recruitment for clients. We ensure that all applicant data is processed in compliance with applicable data protection regulations.
          </p>
        </div>

        {/* General Staffing */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">General Staffing</h2>
          <p>
            For general staffing services, we collect data on both potential employees and client organizations. This data is only used to facilitate staffing needs and is protected through encrypted systems to prevent unauthorized access.
          </p>
        </div>

        {/* Contract Staffing */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Contract Staffing</h2>
          <p>
            We gather essential information from both contractors and businesses to manage contract-based employment efficiently. All data is kept confidential and will only be shared with the parties directly involved in the staffing process.
          </p>
        </div>

        {/* Training & Learning */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Training & Learning</h2>
          <p>
            When you enroll in our Training & Learning services, we collect your personal details to tailor training sessions to your needs. Rest assured, your information will not be shared with any third parties without your consent.
          </p>
        </div>

        {/* IT Staffing */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">IT Staffing</h2>
          <p>
            Our IT Staffing services require specific technical and professional data from candidates to ensure appropriate placement. All sensitive data is stored securely, and we use best practices in data protection to maintain confidentiality.
          </p>
        </div>

        {/* Search & Recruitment */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Search & Recruitment</h2>
          <p>
            We handle personal data related to job seekers and client organizations in strict confidence. This data is only used for job matching and placement purposes and is kept securely in our systems to prevent unauthorized access.
          </p>
        </div>

        {/* Payroll */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Payroll</h2>
          <p>
            For Payroll services, we collect necessary financial and personal data to ensure accurate salary processing and legal compliance. All payroll-related information is treated with the highest confidentiality and shared only with authorized personnel.
          </p>
        </div>

        {/* Data Security */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Data Security</h2>
          <p>
            We implement various security measures to ensure the protection of your personal data. From encryption to access control, we are committed to keeping your information safe from unauthorized access, disclosure, or misuse.
          </p>
        </div>

        {/* User Rights */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">User Rights</h2>
          <p>
            As a user of our services, you have the right to access, modify, or request deletion of your personal data at any time. If you wish to exercise any of these rights, please contact us at{" "}
            <a href="mailto:pithampurstss@skilltalent.co.in" className="text-blue-600 underline">
              pithampurstss@skilltalent.co.in
            </a>.
          </p>
        </div>

        {/* Updates to Policy */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Updates to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be communicated through our website or via email, so you are always aware of how your information is being used.
          </p>
        </div>

        <p className="text-center">
          If you have any questions regarding this Privacy Policy, feel free to contact us at{" "}
          <a href="mailto:pithampurstss@skilltalent.co.in" className="text-blue-600 underline">
            pithampurstss@skilltalent.co.in
          </a>.
        </p>
      </div>
    </div>
  );
};

export default Privacypolicy;
