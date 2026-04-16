import LegalLayout, { SH, bodyStyle, BulletList } from "@/components/LegalLayout";

export default function Page() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="Your privacy is important to us. This policy explains how we collect and use your data."
    >
      <p style={bodyStyle}>
        Deccan Fencing Club is committed to protecting your personal information.
        This Privacy Policy explains how we collect, use, and safeguard your data
        when you visit our website or register for our programs.
      </p>

      <SH>Information We Collect</SH>
      <BulletList items={[
        "Full name (student and parent/guardian)",
        "Email address and phone number",
        "Date of birth and age category",
        "Club or academy affiliation",
        "Identification documents (if required for tournaments)",
      ]} />

      <SH>How We Use Your Information</SH>
      <BulletList items={[
        "To process event registrations and payments",
        "To communicate updates about training and competitions",
        "To improve our programs and services",
        "To comply with legal requirements",
      ]} />

      <SH>Data Protection</SH>
      <p style={bodyStyle}>
        We implement appropriate security measures to protect your personal data.
        Access to your data is restricted to authorized personnel only.
      </p>

      <SH>Third-Party Sharing</SH>
      <p style={bodyStyle}>
        We do not sell or share your data with third parties, except where required
        by law or for essential services (such as payment processing).
      </p>

      <SH>Your Rights</SH>
      <p style={bodyStyle}>
        You have the right to request access, correction, or deletion of your
        personal data at any time.
      </p>

      <SH>Contact Us</SH>
      <p style={bodyStyle}>
        For any privacy-related concerns, contact us at{" "}
        <span style={{ color: "#C9A84C" }}>deccanfencingclub@gmail.com</span>.
      </p>
    </LegalLayout>
  );
}