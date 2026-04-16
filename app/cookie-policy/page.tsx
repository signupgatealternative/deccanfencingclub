import LegalLayout, { SH, bodyStyle, BulletList } from "@/components/LegalLayout";

export default function Page() {
  return (
    <LegalLayout
      title="Cookie Policy"
      subtitle="Understanding how we use cookies on our website."
    >
      <p style={bodyStyle}>
        This Cookie Policy explains how Deccan Fencing Club uses cookies to enhance
        your browsing experience.
      </p>

      <SH>What Are Cookies?</SH>
      <p style={bodyStyle}>
        Cookies are small text files stored on your device when you visit a website.
      </p>

      <SH>How We Use Cookies</SH>
      <BulletList items={[
        "Ensure website functionality",
        "Analyze visitor behavior",
        "Improve user experience",
      ]} />

      <SH>Managing Cookies</SH>
      <p style={bodyStyle}>
        You can disable cookies through your browser settings. However, some features
        of the website may not function properly.
      </p>
    </LegalLayout>
  );
}