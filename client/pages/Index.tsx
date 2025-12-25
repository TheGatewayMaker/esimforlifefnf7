import { useEffect } from "react";
import GlowButton from "@/components/GlowButton";
import FeatureCard from "@/components/FeatureCard";
import {
  Globe2,
  Gift,
  Infinity,
  Share2,
  Shuffle,
  Smartphone,
  Wifi,
  Shield,
  ArrowRight,
  Zap,
  Lock,
  Users,
  Check,
} from "lucide-react";

export default function Index() {
  useEffect(() => {
    // noop, reserved for future analytics hooks
  }, []);

  return (
    <main className="relative bg-background text-foreground">
      {/* Hero Section */}
      <section id="home" className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              {/* Badge */}
              <div className="mb-8">
                <span className="inline-block text-xs font-black text-accent tracking-widest uppercase px-3 py-1.5 rounded bg-accent/10 border border-accent/20">
                  Premium Global Solution
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                Your Lifetime
                <br />
                <span className="text-accent">eSIM</span>
              </h1>

              {/* Subheading */}
              <p className="text-2xl sm:text-3xl font-black text-accent mb-8">
                Zero Expiry
              </p>

              {/* Description */}
              <p className="text-base sm:text-lg text-foreground/75 max-w-lg mb-8 leading-relaxed font-bold">
                Premium international data eSIM with permanent validity. Works across 150+ countries with full 4G/5G connectivity, compatible with all non-PTA devices.
              </p>

              {/* Key Highlight */}
              <div className="mb-10 p-5 rounded border border-accent/20 bg-accent/8">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-black text-foreground mb-1">Works on ALL Non-PTA Phones</p>
                    <p className="text-sm text-foreground/70 font-bold">Full compatibility with international devices • No PTA restrictions • Global support</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch gap-4 w-full max-w-lg">
                <GlowButton
                  href="https://wa.me/message/4S3NPHUQR663C1"
                  label="Buy via WhatsApp"
                  icon="https://i.ibb.co/Q2YSt4V/whatsapp.png"
                  className="w-full sm:flex-1 text-sm sm:text-base py-3"
                />
                <GlowButton
                  href="https://t.me/esim4lifechatbot"
                  label="Buy via Telegram"
                  icon="https://i.ibb.co/8gxkpRSv/telegram-1.png"
                  className="w-full sm:flex-1 text-sm sm:text-base py-3"
                />
              </div>
            </div>

            {/* Right Content - Pricing & Stats */}
            <div>
              {/* Price Card */}
              <div className="mb-10 p-8 sm:p-10 rounded border border-accent/20 bg-accent/8">
                <p className="text-xs font-black text-foreground/60 uppercase tracking-widest mb-4">Lifetime Price</p>
                <div className="mb-3">
                  <span className="text-6xl sm:text-7xl font-black text-accent">999</span>
                  <span className="text-3xl sm:text-4xl font-black text-foreground ml-2">PKR</span>
                </div>
                <p className="text-sm sm:text-base text-foreground/70 font-bold">One-time purchase • Lifetime validity</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="stat-card-premium">
                  <Wifi className="h-5 w-5 text-accent mb-3" />
                  <p className="text-xs font-semibold text-foreground/60 uppercase mb-2">Connectivity</p>
                  <p className="text-lg sm:text-xl font-bold text-accent">4G/5G</p>
                </div>
                <div className="stat-card-premium">
                  <Infinity className="h-5 w-5 text-accent mb-3" />
                  <p className="text-xs font-semibold text-foreground/60 uppercase mb-2">Validity</p>
                  <p className="text-lg sm:text-xl font-bold text-accent">Lifetime</p>
                </div>
                <div className="stat-card-premium">
                  <Globe2 className="h-5 w-5 text-accent mb-3" />
                  <p className="text-xs font-semibold text-foreground/60 uppercase mb-2">Coverage</p>
                  <p className="text-lg sm:text-xl font-bold text-accent">150+ Countries</p>
                </div>
                <div className="stat-card-premium">
                  <Shield className="h-5 w-5 text-accent mb-3" />
                  <p className="text-xs font-semibold text-foreground/60 uppercase mb-2">Security</p>
                  <p className="text-lg sm:text-xl font-bold text-accent">Secure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-accent/10" />

      {/* Features Section */}
      <section id="features" className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
        <div className="container">
          {/* Section Header */}
          <div className="mb-14 sm:mb-20 max-w-2xl">
            <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">Core Features</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Everything you need</h2>
            <p className="text-base sm:text-lg text-foreground/70">Global compatibility, lifetime validity, referral rewards, seamless device transfers, and premium security. All features designed for reliability and trust.</p>
          </div>

          {/* Features Grid */}
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Global Compatibility"
              description="Works across multiple countries including Pakistan. Reliable 4G & 5G worldwide performance."
              icon={<Globe2 className="h-5 w-5" />}
            />
            <FeatureCard
              title="Lifetime Validity"
              description="Your data and account never expire. Keep your eSIM active forever without renewal."
              icon={<Infinity className="h-5 w-5" />}
            />
            <FeatureCard
              title="Free Starter Data"
              description="Start with complimentary data to get connected instantly and experience service quality."
              icon={<Gift className="h-5 w-5" />}
            />
            <FeatureCard
              title="Refer & Earn"
              description="Earn 500MB for every successful referral with unlimited earning potential."
              icon={<Share2 className="h-5 w-5" />}
            />
            <FeatureCard
              title="Scratch Card Bonus"
              description="Unlock exclusive scratch cards after three referrals for surprise rewards."
              icon={<Shuffle className="h-5 w-5" />}
            />
            <FeatureCard
              title="Device Transfer"
              description="Transfer your eSIM between compatible devices seamlessly without hassle."
              icon={<Smartphone className="h-5 w-5" />}
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-accent/10" />

      {/* Benefits Section */}
      <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
        <div className="container">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Why Choose eSIM4life?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="benefit-card">
              <div className="benefit-icon">
                <Lock className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold mb-3">Trusted & Secure</h3>
              <p className="text-foreground/70 leading-relaxed">
                Enterprise-grade security with encrypted connections and secure activation. Your data is protected with international standards.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold mb-3">Instant Activation</h3>
              <p className="text-foreground/70 leading-relaxed">
                Get connected in minutes. No waiting for physical mail, no complicated setup. Activate online and start using immediately.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
              <p className="text-foreground/70 leading-relaxed">
                Our dedicated support team is always available on WhatsApp and Telegram to help with any questions or issues.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <Gift className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold mb-3">Premium Rewards</h3>
              <p className="text-foreground/70 leading-relaxed">
                Earn data through referrals and unlock bonus scratch cards. The more you share, the more you earn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-accent/10" />

      {/* Refer & Earn Section */}
      <section id="refer" className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div>
              <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">Grow Your Data</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Refer & Earn</h2>
              <p className="text-base sm:text-lg text-foreground/70 mb-8">
                Grow your data through our referral program. Earn 500MB for each successful referral with unlimited earning potential. After three referrals, unlock exclusive bonus scratch cards.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="feature-mini">
                  <Gift className="h-4 w-4 flex-shrink-0" />
                  <span className="text-sm">500MB per referral</span>
                </div>
                <div className="feature-mini">
                  <Shuffle className="h-4 w-4 flex-shrink-0" />
                  <span className="text-sm">Bonus scratch cards</span>
                </div>
                <div className="feature-mini">
                  <Share2 className="h-4 w-4 flex-shrink-0" />
                  <span className="text-sm">Unlimited potential</span>
                </div>
                <div className="feature-mini">
                  <Shield className="h-4 w-4 flex-shrink-0" />
                  <span className="text-sm">Secure & transparent</span>
                </div>
              </div>

              <div className="flex flex-col gap-3 max-w-sm">
                <a
                  href="https://wa.me/message/4S3NPHUQR663C1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm font-semibold transition-colors duration-200 bg-accent/10 border border-accent/20 text-accent hover:bg-accent/15"
                >
                  Get referral link on WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://t.me/esim4lifechatbot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm font-semibold transition-colors duration-200 bg-accent/10 border border-accent/20 text-accent hover:bg-accent/15"
                >
                  Get referral link on Telegram
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right Content - Process */}
            <div className="rounded border border-accent/20 p-8 sm:p-10 bg-accent/8">
              <h3 className="text-2xl md:text-3xl font-bold mb-8">How it works</h3>
              <ol className="space-y-6">
                <li className="step flex items-start gap-4">
                  <div className="flex-shrink-0 h-9 w-9 rounded flex items-center justify-center text-sm font-bold text-accent bg-accent/12">
                    1
                  </div>
                  <span className="text-base leading-relaxed pt-1">
                    Share your unique referral code with friends.
                  </span>
                </li>
                <li className="step flex items-start gap-4">
                  <div className="flex-shrink-0 h-9 w-9 rounded flex items-center justify-center text-sm font-bold text-accent bg-accent/12">
                    2
                  </div>
                  <span className="text-base leading-relaxed pt-1">
                    Friend installs the app and enters your referral code (no purchase needed).
                  </span>
                </li>
                <li className="step flex items-start gap-4">
                  <div className="flex-shrink-0 h-9 w-9 rounded flex items-center justify-center text-sm font-bold text-accent bg-accent/12">
                    3
                  </div>
                  <span className="text-base leading-relaxed pt-1">
                    Both get 500MB instantly. After 3 referrals, unlock a bonus scratch card worth up to 300GB.
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-accent/10" />

      {/* CTA Section - Buy */}
      <section id="buy" className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">Ready to Get Connected?</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">Get Your eSIM Today</h2>

            <div className="mb-8">
              <div className="inline-block">
                <p className="text-5xl sm:text-6xl font-bold text-accent mb-3">999 PKR</p>
                <p className="text-sm font-semibold text-foreground/70 uppercase tracking-widest">One-time Purchase</p>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="mb-10 p-5 rounded border border-accent/20 mx-auto w-fit bg-accent/8">
              <p className="text-sm sm:text-base font-semibold text-accent">
                ✓ 150+ Countries • ✓ Non-PTA Compatible • ✓ Lifetime Validity
              </p>
            </div>

            <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed">
              Simple, secure purchase process. Our support team will guide you through setup and activation. Global connectivity with lifetime validity guaranteed.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center max-w-2xl mx-auto">
              <GlowButton
                href="https://wa.me/message/4S3NPHUQR663C1"
                label="Buy via WhatsApp"
                icon="https://i.ibb.co/Q2YSt4V/whatsapp.png"
                className="w-full sm:flex-1 py-3 text-sm"
              />
              <GlowButton
                href="https://t.me/esim4lifechatbot"
                label="Buy via Telegram"
                icon="https://i.ibb.co/8gxkpRSv/telegram-1.png"
                className="w-full sm:flex-1 py-3 text-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-accent/10" />

      {/* Support Section */}
      <section id="support" className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Need Help?</h2>
            <p className="text-base sm:text-lg text-foreground/70 mb-10 leading-relaxed">
              Our dedicated support team is available 24/7 to help you. Reach out on WhatsApp or Telegram for quick, reliable assistance.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center max-w-2xl mx-auto">
              <GlowButton
                href="https://wa.me/message/4S3NPHUQR663C1"
                label="Chat on WhatsApp"
                icon="https://i.ibb.co/Q2YSt4V/whatsapp.png"
                className="w-full sm:flex-1 py-3 text-sm"
              />
              <GlowButton
                href="https://t.me/esim4lifechatbot"
                label="Chat on Telegram"
                icon="https://i.ibb.co/8gxkpRSv/telegram-1.png"
                className="w-full sm:flex-1 py-3 text-sm"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
