import LegalLayout, { SH, bodyStyle } from "@/components/LegalLayout";

export default function Page() {
  return (
    <LegalLayout
      title="Disclaimer"
      subtitle="Important information regarding the use of our website and services."
    >
      <p style={bodyStyle}>
        The information provided by Deccan Fencing Club is for general informational
        purposes only.
      </p>

      <SH>No Professional Advice</SH>
      <p style={bodyStyle}>
        Content on this site does not constitute professional or medical advice.
        Participation in fencing activities is at your own risk.
      </p>

      <SH>External Links</SH>
      <p style={bodyStyle}>
        We are not responsible for the content or policies of third-party websites.
      </p>

      <SH>Accuracy</SH>
      <p style={bodyStyle}>
        While we aim to keep information accurate, we do not guarantee completeness
        or reliability.
      </p>
    </LegalLayout>
  );
}