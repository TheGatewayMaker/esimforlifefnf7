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
} from "lucide-react";

export default function Index() {
  useEffect(() => {
    // noop, reserved for future analytics hooks
  }, []);

  return (
    <main className="relative bg-background text-foreground">
      {/* Hero Section - Redesigned */}
      <section
        id="home"
        className="relative overflow-hidden pt-12 sm:pt-20 md:pt-28 pb-16 sm:pb-24 md:pb-40"
      >
        {/* Background decorative elements - more subtle */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-96 -right-96 w-[900px] h-[900px] bg-gradient-to-br from-accent/8 via-accent/3 to-transparent rounded-full blur-[150px]" />
          <div className="absolute -bottom-96 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-accent/6 via-accent/2 to-transparent rounded-full blur-[150px]" />
        </div>

        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content - Main Hero */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Badge */}
              <div className="flex items-center gap-3 mb-8 sm:mb-10">
                <div className="h-1 w-8 bg-gradient-to-r from-accent to-accent/50 rounded-full" />
                <span className="text-xs sm:text-sm font-bold text-accent tracking-widest uppercase">
                  Premium Global Solution
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-7xl font-black leading-tight tracking-tight mb-4 sm:mb-6 text-foreground">
                Your Lifetime
                <br />
                <span className="text-accent">eSIM</span>
              </h1>

              {/* Subheading */}
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-6 sm:mb-8">
                Zero Expiry
              </p>

              {/* Description */}
              <p className="text-base sm:text-lg text-foreground/75 max-w-2xl leading-relaxed mb-8 sm:mb-10 font-medium">
                Premium international data eSIM with permanent validity. Works
                across 150+ countries with full 4G/5G connectivity, compatible
                with all non-PTA devices.
              </p>

              {/* Key Features Highlight */}
              <div className="mb-10 sm:mb-12 rounded-xl border-2 border-accent/30 p-5 sm:p-6 md:p-7 bg-accent/5">
                <div className="flex items-start gap-3">
                  <Zap className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-lg text-accent mb-2">
                      Works on ALL Non-PTA Phones
                    </p>
                    <p className="text-sm text-foreground/70">
                      Full compatibility with international devices • No PTA
                      restrictions • Global support
                    </p>
                  </div>
                </div>
              </div>

              {/* Features Chips */}
              <div className="flex flex-wrap items-center gap-3 mb-10 sm:mb-12">
                <div className="chip">
                  <Infinity className="h-4 w-4" />
                  <span>No Expiry</span>
                </div>
                <div className="chip">
                  <Gift className="h-4 w-4" />
                  <span>Free Data</span>
                </div>
                <div className="chip">
                  <Wifi className="h-4 w-4" />
                  <span>Global 4G/5G</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch gap-4 w-full max-w-2xl">
                <GlowButton
                  href="https://wa.me/message/4S3NPHUQR663C1"
                  label="Buy via WhatsApp"
                  icon="https://i.ibb.co/Q2YSt4V/whatsapp.png"
                  className="w-full text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-4"
                />
                <GlowButton
                  href="https://t.me/esim4lifechatbot"
                  label="Buy via Telegram"
                  icon="https://i.ibb.co/8gxkpRSv/telegram-1.png"
                  className="w-full text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-4"
                />
              </div>
            </div>

            {/* Right Side - Pricing and Stats */}
            <div className="lg:col-span-5">
              {/* Price Card - Premium Design */}
              <div className="mb-10 sm:mb-14 p-8 sm:p-10 md:p-12 rounded-2xl border-2 border-accent/40 bg-gradient-to-br from-accent/10 to-accent/5">
                <p className="text-sm font-bold text-accent/70 uppercase tracking-wider mb-4">
                  Lifetime Price
                </p>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-6xl sm:text-7xl md:text-8xl font-black text-accent">
                    999
                  </span>
                  <span className="text-3xl sm:text-4xl font-bold text-foreground">
                    PKR
                  </span>
                </div>
                <p className="text-sm sm:text-base font-semibold text-foreground/70">
                  One-time purchase • Lifetime validity
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 sm:gap-5">
                <div className="stat-card-premium">
                  <Wifi className="h-6 w-6 text-accent mb-3" />
                  <p className="text-xs font-bold text-foreground/60 uppercase mb-2">
                    Connectivity
                  </p>
                  <p className="text-xl sm:text-2xl font-black text-accent">
                    4G/5G
                  </p>
                </div>
                <div className="stat-card-premium">
                  <Infinity className="h-6 w-6 text-accent mb-3" />
                  <p className="text-xs font-bold text-foreground/60 uppercase mb-2">
                    Validity
                  </p>
                  <p className="text-xl sm:text-2xl font-black text-accent">
                    Lifetime
                  </p>
                </div>
                <div className="stat-card-premium">
                  <Globe2 className="h-6 w-6 text-accent mb-3" />
                  <p className="text-xs font-bold text-foreground/60 uppercase mb-2">
                    Coverage
                  </p>
                  <p className="text-xl sm:text-2xl font-black text-accent">
                    150+ Countries
                  </p>
                </div>
                <div className="stat-card-premium">
                  <Shield className="h-6 w-6 text-accent mb-3" />
                  <p className="text-xs font-bold text-foreground/60 uppercase mb-2">
                    Security
                  </p>
                  <p className="text-xl sm:text-2xl font-black text-accent">
                    Secure
                  </p>
                </div>
              </div>

              {/* Info Box */}
              <div className="mt-6 sm:mt-8 p-5 sm:p-6 rounded-xl border border-accent/30 bg-accent/5">
                <p className="text-sm font-bold text-accent mb-2">
                  🌍 Global Coverage
                </p>
                <p className="text-xs text-foreground/70">
                  Non-PTA compatible • 150+ countries • All non-PTA phones
                  supported
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Divider */}
      <div className="container">
        <div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      </div>

      {/* Features Section - Redesigned */}
      <section
        id="features"
        className="relative py-20 sm:py-32 md:py-44 overflow-hidden"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-0 w-[700px] h-[700px] bg-gradient-to-br from-accent/5 via-accent/2 to-transparent rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-accent/4 via-accent/1 to-transparent rounded-full blur-[150px]" />
        </div>

        <div className="container">
          {/* Section Header */}
          <div className="mb-16 sm:mb-20 md:mb-28 max-w-3xl">
            <p className="text-sm font-bold text-accent uppercase tracking-widest mb-4">
              What Makes Us Stand Out
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 sm:mb-8 tracking-tight leading-tight">
              Everything you need
            </h2>
            <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed font-medium">
              Global compatibility, lifetime validity, referral rewards,
              seamless device transfers, and premium security. All features
              designed for reliability and trust.
            </p>
          </div>

          {/* Features Grid - 3 columns */}
          <div className="grid gap-6 sm:gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            <FeatureCard
              title="Global Compatibility"
              description="Works across multiple countries including Pakistan. Reliable 4G & 5G worldwide performance."
              icon={<Globe2 className="h-6 w-6" />}
            />
            <FeatureCard
              title="Lifetime Validity"
              description="Your data and account never expire. Keep your eSIM active forever without renewal."
              icon={<Infinity className="h-6 w-6" />}
            />
            <FeatureCard
              title="Free Starter Data"
              description="Start with complimentary data to get connected instantly and experience service quality."
              icon={<Gift className="h-6 w-6" />}
            />
            <FeatureCard
              title="Refer & Earn"
              description="Earn 500MB for every successful referral with unlimited earning potential."
              icon={<Share2 className="h-6 w-6" />}
            />
            <FeatureCard
              title="Scratch Card Bonus"
              description="Unlock exclusive scratch cards after three referrals for surprise rewards."
              icon={<Shuffle className="h-6 w-6" />}
            />
            <FeatureCard
              title="Device Transfer"
              description="Transfer your eSIM between compatible devices seamlessly without hassle."
              icon={<Smartphone className="h-6 w-6" />}
            />
          </div>
        </div>
      </section>

      {/* Visual Divider */}
      <div className="container">
        <div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      </div>

      {/* Key Benefits Section */}
      <section className="relative py-20 sm:py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-tl from-accent/6 via-accent/2 to-transparent rounded-full blur-[150px]" />
        </div>

        <div className="container">
          <div className="mb-14 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tight">
              Why Choose eSIM4life?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Benefit 1 */}
            <div className="benefit-card group">
              <div className="benefit-icon">
                <Lock className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-black mb-3 text-foreground">
                Trusted & Secure
              </h3>
              <p className="text-foreground/70 leading-relaxed font-medium">
                Enterprise-grade security with encrypted connections and secure
                activation. Your data is protected with international standards.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="benefit-card group">
              <div className="benefit-icon">
                <Zap className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-black mb-3 text-foreground">
                Instant Activation
              </h3>
              <p className="text-foreground/70 leading-relaxed font-medium">
                Get connected in minutes. No waiting for physical mail, no
                complicated setup. Activate online and start using immediately.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="benefit-card group">
              <div className="benefit-icon">
                <Users className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-black mb-3 text-foreground">
                24/7 Support
              </h3>
              <p className="text-foreground/70 leading-relaxed font-medium">
                Our dedicated support team is always available on WhatsApp and
                Telegram to help with any questions or issues.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="benefit-card group">
              <div className="benefit-icon">
                <Gift className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-black mb-3 text-foreground">
                Premium Rewards
              </h3>
              <p className="text-foreground/70 leading-relaxed font-medium">
                Earn data through referrals and unlock bonus scratch cards. The
                more you share, the more you earn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Divider */}
      <div className="container">
        <div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      </div>

      {/* Refer & Earn Section - Enhanced */}
      <section
        id="refer"
        className="relative py-20 sm:py-32 md:py-44 overflow-hidden"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-accent/8 via-accent/3 to-transparent rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-gradient-to-tl from-accent/6 via-accent/2 to-transparent rounded-full blur-[150px]" />
        </div>

        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div>
              <p className="text-sm font-bold text-accent uppercase tracking-widest mb-4">
                Grow Your Data
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tight">
                Refer & Earn
              </h2>
              <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed mb-8 font-medium">
                Grow your data through our referral program. Earn 500MB for each
                successful referral with unlimited earning potential. After
                three referrals, unlock exclusive bonus scratch cards.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="feature-mini">
                  <Gift className="h-5 w-5 flex-shrink-0" />
                  <span>500MB per referral</span>
                </div>
                <div className="feature-mini">
                  <Shuffle className="h-5 w-5 flex-shrink-0" />
                  <span>Bonus scratch cards</span>
                </div>
                <div className="feature-mini">
                  <Share2 className="h-5 w-5 flex-shrink-0" />
                  <span>Unlimited potential</span>
                </div>
                <div className="feature-mini">
                  <Shield className="h-5 w-5 flex-shrink-0" />
                  <span>Secure & transparent</span>
                </div>
              </div>

              <div className="flex flex-col gap-3 max-w-sm">
                <a
                  href="https://wa.me/message/4S3NPHUQR663C1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 bg-accent/10 border border-accent/30 text-accent hover:bg-accent/20 hover:border-accent/50"
                >
                  Get referral link on WhatsApp
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="https://t.me/esim4lifechatbot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 bg-accent/10 border border-accent/30 text-accent hover:bg-accent/20 hover:border-accent/50"
                >
                  Get referral link on Telegram
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Right Content - Process Steps */}
            <div className="rounded-xl border border-accent/30 p-8 sm:p-10 md:p-12 bg-accent/5">
              <h3 className="text-2xl md:text-3xl font-black mb-8 tracking-tight">
                How it works
              </h3>
              <ol className="space-y-6">
                <li className="step flex items-start gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg flex items-center justify-center text-sm font-black text-accent bg-accent/12">
                    1
                  </div>
                  <span className="text-base leading-relaxed font-medium pt-1">
                    Share your unique referral code with friends.
                  </span>
                </li>
                <li className="step flex items-start gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg flex items-center justify-center text-sm font-black text-accent bg-accent/12">
                    2
                  </div>
                  <span className="text-base leading-relaxed font-medium pt-1">
                    Friend installs the app and enters your referral code (no
                    purchase needed).
                  </span>
                </li>
                <li className="step flex items-start gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg flex items-center justify-center text-sm font-black text-accent bg-accent/12">
                    3
                  </div>
                  <span className="text-base leading-relaxed font-medium pt-1">
                    Both get 500MB instantly. After 3 referrals, unlock a bonus
                    scratch card worth up to 300GB.
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Divider */}
      <div className="container">
        <div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      </div>

      {/* Buy Section - Enhanced CTA */}
      <section
        id="buy"
        className="relative py-20 sm:py-32 md:py-40 overflow-hidden"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-br from-accent/10 via-accent/4 to-transparent rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-gradient-to-tr from-accent/8 via-accent/2 to-transparent rounded-full blur-[150px]" />
        </div>

        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold text-accent uppercase tracking-widest mb-4">
              Ready to Get Connected?
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-8 tracking-tight">
              Get Your eSIM Today
            </h2>

            <div className="mb-8 inline-flex flex-col sm:flex-row items-center sm:items-baseline gap-3 sm:gap-4">
              <span className="text-5xl sm:text-6xl md:text-7xl font-black text-accent">
                999 PKR
              </span>
              <span className="text-sm font-bold text-foreground/70 uppercase tracking-widest">
                One-time Purchase
              </span>
            </div>

            {/* Highlight Box */}
            <div className="mb-10 sm:mb-12 p-5 sm:p-6 rounded-xl border-2 border-accent/40 mx-auto w-fit bg-accent/5">
              <p className="text-sm sm:text-base font-bold text-accent">
                ✓ 150+ Countries • ✓ Non-PTA Compatible • ✓ Lifetime Validity
              </p>
            </div>

            <p className="text-base sm:text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto mb-12 sm:mb-16 font-medium">
              Simple, secure purchase process. Our support team will guide you
              through setup and activation. Global connectivity with lifetime
              validity guaranteed.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center max-w-2xl mx-auto">
              <GlowButton
                href="https://wa.me/message/4S3NPHUQR663C1"
                label="Buy via WhatsApp"
                icon="https://i.ibb.co/Q2YSt4V/whatsapp.png"
                className="w-full sm:flex-1"
              />
              <GlowButton
                href="https://t.me/esim4lifechatbot"
                label="Buy via Telegram"
                icon="https://i.ibb.co/8gxkpRSv/telegram-1.png"
                className="w-full sm:flex-1"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Visual Divider */}
      <div className="container">
        <div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      </div>

      {/* Support Section - Final CTA */}
      <section
        id="support"
        className="relative py-20 sm:py-32 md:py-40 overflow-hidden"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-accent/8 via-accent/3 to-transparent rounded-full blur-[150px]" />
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-accent/6 via-accent/2 to-transparent rounded-full blur-[150px]" />
        </div>

        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 sm:mb-8 tracking-tight">
              Need Help?
            </h2>
            <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed mb-12 sm:mb-16 font-medium">
              Our dedicated support team is available 24/7 to help you. Reach
              out on WhatsApp or Telegram for quick, reliable assistance.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center max-w-2xl mx-auto">
              <GlowButton
                href="https://wa.me/message/4S3NPHUQR663C1"
                label="Chat on WhatsApp"
                icon="https://i.ibb.co/Q2YSt4V/whatsapp.png"
                className="w-full sm:flex-1"
              />
              <GlowButton
                href="https://t.me/esim4lifechatbot"
                label="Chat on Telegram"
                icon="https://i.ibb.co/8gxkpRSv/telegram-1.png"
                className="w-full sm:flex-1"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
