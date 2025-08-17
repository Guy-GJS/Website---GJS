import Navigation from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Shield, Lock, Eye, Database, UserCheck, Globe, Settings, FileText } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your privacy is important to us. This policy outlines how we handle your information with care and transparency.
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <p className="leading-relaxed text-muted-foreground">
              This Privacy Policy describes how Fair Property Group (doing business as CashMyHomeFast) ("we",
              "us", or "our") collects, uses, discloses, and safeguards your information when you visit our website,
              submit a form, or otherwise interact with our services. We are committed to protecting your privacy
              and ensuring the security of your personal information.
            </p>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <div className="flex items-center mb-4">
              <Database className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-2xl font-semibold">Information We Collect</h2>
            </div>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              We collect information that helps us provide better service to you. The categories of personal information we may collect include:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Identifiers:</strong> name, email address, postal address, IP address, and similar identifiers.
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Property information:</strong> property address and details, offer amount, transaction history, and related communications.
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Website activity:</strong> browsing history, interactions with our website, form submissions, and referral data.
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Location data:</strong> general location information derived from IP address or voluntarily provided property location.
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <div className="flex items-center mb-4">
              <Globe className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-2xl font-semibold">Sources of Information</h2>
            </div>
            <p className="leading-relaxed text-muted-foreground">
              We collect personal information directly from you (for example, when you submit a form or contact us),
              automatically from your device when you use our website, and from service providers and business
              partners that help us operate our services (such as analytics, hosting, and communications providers).
            </p>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <div className="flex items-center mb-4">
              <Settings className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-muted-foreground">Provide, maintain, and improve our services and website</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-muted-foreground">Evaluate your property, generate and deliver cash offers, and facilitate transactions</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-muted-foreground">Respond to inquiries, provide customer support, and communicate with you</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-muted-foreground">Personalize content and user experience, including remarketing and measurement</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-muted-foreground">Detect, prevent, and address security, fraud, or technical issues</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-muted-foreground">Comply with legal obligations and enforce our agreements</span>
              </li>
            </ul>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <div className="flex items-center mb-4">
              <Eye className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-2xl font-semibold">Information Sharing</h2>
            </div>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              We may share personal information with the following categories of recipients for business purposes:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-muted-foreground">Service providers (e.g., hosting, analytics, customer support, communications)</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-muted-foreground">Professional advisors (e.g., attorneys, accountants, real estate professionals)</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-muted-foreground">Affiliates and entities under common control, consistent with this Policy</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-muted-foreground">Government authorities or law enforcement when required by law or to protect rights</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-muted-foreground">Successors in the event of a merger, acquisition, or asset sale</span>
              </li>
            </ul>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <div className="flex items-center mb-4">
              <Lock className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-2xl font-semibold">Data Security & Retention</h2>
            </div>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              We implement appropriate technical and organizational measures to protect your personal information against
              unauthorized access, alteration, disclosure, or destruction.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              We retain personal information for as long as reasonably necessary to fulfill the purposes described in
              this Policy, including to provide services, comply with legal obligations, resolve disputes, and enforce
              agreements.
            </p>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <div className="flex items-center mb-4">
              <UserCheck className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-2xl font-semibold">Your Privacy Rights</h2>
            </div>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-muted-foreground">Know the categories and specific pieces of personal information we collect about you</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-muted-foreground">Access, correct, or delete your personal information</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-muted-foreground">Opt out of the sale or sharing of personal information</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-muted-foreground">Limit the use and disclosure of sensitive personal information</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-muted-foreground">Not be discriminated against for exercising any of your rights</span>
              </li>
            </ul>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-2xl font-semibold">Cookies & Analytics</h2>
            </div>
            <p className="leading-relaxed text-muted-foreground">
              We and our service providers use cookies and similar technologies to operate the website, measure
              performance, and improve user experience. You can control cookies through your browser settings. Some
              features may not function properly without certain cookies.
            </p>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
            <p className="leading-relaxed text-muted-foreground">
              Our services are not directed to children under 13, and we do not knowingly collect personal information
              from children under 13.
            </p>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4">Policy Updates</h2>
            <p className="leading-relaxed text-muted-foreground">
              We may update this Privacy Policy from time to time. Your continued use of our services after any changes
              indicates your acceptance of the updated Policy.
            </p>
          </div>

          <div className="text-center mt-12">
            <a 
              href="/" 
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Return to Home
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;