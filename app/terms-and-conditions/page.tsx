import LegalLayout, { SH, bodyStyle, BulletList } from "@/components/LegalLayout";

export default function Page() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      subtitle="Please read these terms carefully before using our services."
    >
      <p style={bodyStyle}>
        By accessing our website or participating in Deccan Fencing Club activities,
        you agree to comply with these terms and conditions.
      </p>

      <SH>Use of Website</SH>
      <p style={bodyStyle}>
        All content is for informational purposes only. Unauthorized use or copying
        of materials is strictly prohibited.
      </p>

      <SH>Registrations</SH>
      <BulletList items={[
        "All information must be accurate and complete",
        "Fees are non-refundable unless cancelled by the club",
        "Participants must follow event rules and guidelines",
      ]} />

      <SH>Code of Conduct</SH>
      <p style={bodyStyle}>
        Participants are expected to maintain discipline, respect coaches and fellow
        fencers, and follow all safety guidelines.
      </p>

      <SH>Liability</SH>
      <p style={bodyStyle}>
        Fencing is a physical sport. The club is not responsible for injuries,
        damages, or losses during training or competitions.
      </p>

      <SH>Changes to Terms</SH>
      <p style={bodyStyle}>
        We may update these terms at any time. Continued use of our services
        constitutes acceptance of the updated terms.
      </p>
    </LegalLayout>
  );
}