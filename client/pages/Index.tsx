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
} from "lucide-react";

export default function Index() {
  useEffect(() => {
    // noop, reserved for future analytics hooks
  }, []);

  return (
    <main className="relative">
      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">
        {/* Subtle decorative background elements with professional cyan gradient */}
        <div className="absolute inset-0 -z-10">
          {/* Top-right cyan gradient - subtle */}
          <div className="absolute -top-80 -right-80 w-[700px] h-[700px] bg-gradient-to-br from-accent/12 via-accent/6 to-transparent rounded-full blur-[120px]" />
          {/* Top-left accent glow - subtle */}
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-accent/8 via-accent/4 to-transparent rounded-full blur-[120px]" />
          {/* Bottom-right soft accent */}
          <div className="absolute -bottom-48 right-0 w-[450px] h-[450px] bg-gradient-to-tl from-accent/6 via-accent/3 to-transparent rounded-full blur-[120px]" />
        </div>

        <div className="container pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-8 sm:pb-12 md:pb-16 lg:pb-32 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-start lg:items-center justify-center">
          {/* Left content */}
          <div className="flex flex-col justify-center lg:order-1">
            <div className="inline-flex items-center gap-2.5 sm:gap-3 mb-6 sm:mb-8 w-fit">
              <div className="h-0.5 w-6 bg-accent rounded-full" />
              <span className="text-xs font-bold text-accent tracking-widest uppercase">
                Premium Global Solution
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-3 sm:mb-4 text-foreground">
              Your Lifetime eSIM
            </h1>
            <p className="text-lg sm:text-xl text-accent font-bold mb-3 sm:mb-4">
              Zero Expiry
            </p>

            <p className="text-base sm:text-lg text-foreground/75 max-w-xl leading-relaxed mb-7 sm:mb-9 font-medium">
              Premium international data eSIM with permanent validity. Works across 150+ countries with full 4G/5G connectivity, compatible with all non-PTA devices.
            </p>

            {/* Non-PTA Emphasis Badge */}
            <div
              className="mb-8 sm:mb-10 p-4 sm:p-5 rounded-lg border"
              style={{
                background: "rgba(61, 207, 220, 0.06)",
                borderColor: "rgba(61, 207, 220, 0.25)",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
              }}
            >
              <p className="text-sm sm:text-base font-bold text-accent mb-1">
                ✓ Works on ALL Non-PTA Phones
              </p>
              <p className="text-xs sm:text-sm text-foreground/70 font-medium">
                Full compatibility with international devices • No PTA restrictions
              </p>
            </div>

            {/* Features chips */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10 sm:mb-12">
              <span className="chip">
                <Infinity className="h-4 sm:h-5 w-4 sm:w-5" />
                <span className="text-xs sm:text-sm">No Expiry</span>
              </span>
              <span className="chip">
                <Gift className="h-4 sm:h-5 w-4 sm:w-5" />
                <span className="text-xs sm:text-sm">Free Data</span>
              </span>
              <span className="chip">
                <Wifi className="h-4 sm:h-5 w-4 sm:w-5" />
                <span className="text-xs sm:text-sm">Global 4G/5G</span>
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch gap-4 sm:gap-5 w-full max-w-2xl">
              <GlowButton
                href="https://wa.me/message/4S3NPHUQR663C1"
                label="Buy via WhatsApp"
                icon="https://i.ibb.co/Q2YSt4V/whatsapp.png"
                className="w-full text-sm sm:text-base px-5 sm:px-6 py-3 sm:py-4"
              />
              <GlowButton
                href="https://t.me/esim4lifechatbot"
                label="Buy via Telegram"
                icon="https://i.ibb.co/8gxkpRSv/telegram-1.png"
                className="w-full text-sm sm:text-base px-5 sm:px-6 py-3 sm:py-4"
              />
            </div>
          </div>

          {/* Right stats section */}
          <div className="lg:order-2 relative w-full">
            {/* Price display */}
            <div className="mb-10 sm:mb-12 lg:mb-14">
              <div className="flex flex-col items-center lg:items-end gap-2">
                <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-accent leading-tight">
                  <span>999</span>{" "}
                  <span className="text-3xl sm:text-4xl md:text-5xl">
                    PKR
                  </span>
                </h2>
                <p className="text-base sm:text-lg font-bold text-foreground/80">
                  Lifetime Subscription
                </p>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-7">
              <div className="stat">
                <Wifi className="h-7 sm:h-8 md:h-9 w-7 sm:w-8 md:w-9 text-accent" />
                <span className="stat-label text-xs">Connectivity</span>
                <span className="stat-value text-lg sm:text-xl md:text-2xl">
                  4G/5G
                </span>
              </div>
              <div className="stat">
                <Infinity className="h-7 sm:h-8 md:h-9 w-7 sm:w-8 md:w-9 text-accent" />
                <span className="stat-label text-xs">Validity</span>
                <span className="stat-value text-lg sm:text-xl md:text-2xl">
                  Lifetime
                </span>
              </div>
              <div className="stat">
                <Globe2 className="h-7 sm:h-8 md:h-9 w-7 sm:w-8 md:w-9 text-accent" />
                <span className="stat-label text-xs">Coverage</span>
                <span className="stat-value text-lg sm:text-xl md:text-2xl">
                  Global
                </span>
              </div>
              <div className="stat">
                <Shield className="h-7 sm:h-8 md:h-9 w-7 sm:w-8 md:w-9 text-accent" />
                <span className="stat-label text-xs">Security</span>
                <span className="stat-value text-lg sm:text-xl md:text-2xl">
                  Secure
                </span>
              </div>
            </div>

            {/* Global Coverage & Non-PTA Info */}
            <div
              className="mt-6 sm:mt-7 md:mt-8 rounded-lg border p-6 sm:p-7"
              style={{
                background: "rgba(61, 207, 220, 0.06)",
                borderColor: "rgba(61, 207, 220, 0.25)",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
              }}
            >
              <div className="flex items-start gap-4">
                <div className="text-2xl flex-shrink-0">🌍</div>
                <div>
                  <p className="text-base sm:text-lg font-bold text-foreground mb-1">
                    Global Coverage • Non-PTA Compatible
                  </p>
                  <p className="text-xs sm:text-sm text-foreground/70 font-medium">
                    Works in 150+ countries • All non-PTA phones • International compatibility
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="relative py-16 sm:py-24 md:py-40 lg:py-48 overflow-hidden"
      >
        {/* Subtle background accent */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-accent/8 via-accent/3 to-transparent rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-gradient-to-tl from-accent/6 via-accent/2 to-transparent rounded-full blur-[120px]" />
        </div>
        <div className="container">
          <div className="mb-12 sm:mb-16 md:mb-24 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 tracking-tight">
              Everything you need
            </h2>
            <p className="text-base sm:text-lg text-foreground/70 leading-relaxed font-medium">
              Global compatibility, lifetime validity, referral rewards, seamless device transfers, and premium security. All features designed for reliability and trust.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch">
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

      {/* Buy Section */}
      <section
        id="buy"
        className="relative py-16 sm:py-24 md:py-40 lg:py-48 overflow-hidden"
      >
        {/* Background decoration - subtle cyan gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-accent/10 via-accent/5 to-transparent rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-gradient-to-tr from-accent/8 via-accent/3 to-transparent rounded-full blur-[120px]" />
        </div>

        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-8 sm:mb-10 tracking-tighter">
              Get Your eSIM Today
            </h2>

            <div className="inline-flex flex-col sm:flex-row items-center sm:items-baseline gap-3 sm:gap-4 mb-8 sm:mb-10">
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-accent">
                999 PKR
              </span>
              <span className="text-xs sm:text-base md:text-lg text-accent font-bold uppercase tracking-widest">
                One-time
              </span>
            </div>

            {/* Global Coverage Highlight */}
            <div
              className="mb-8 sm:mb-10 p-4 sm:p-5 rounded-xl border mx-auto w-fit"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(255, 215, 0, 0.05) 100%)",
                borderColor: "rgba(255, 215, 0, 0.3)",
              }}
            >
              <p className="text-xs sm:text-sm font-bold text-accent">
                ✓ Works in 150+ Countries • ✓ Non-PTA Compatible
              </p>
            </div>

            <p className="text-sm sm:text-base lg:text-lg text-foreground/75 leading-relaxed max-w-2xl mx-auto mb-10 sm:mb-12 lg:mb-14 font-medium">
              Choose your preferred platform to purchase. Our team will guide
              you through a quick, secure setup process. Get global connectivity
              with lifetime validity.
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

      {/* Refer & Earn Section */}
      <section
        id="refer"
        className="relative py-16 sm:py-24 md:py-40 lg:py-48 overflow-hidden"
      >
        {/* Subtle background accent - smoothened */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-accent/15 via-accent/8 to-transparent rounded-full blur-[100px]" />
        </div>
        <div className="container px-4 sm:px-0">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 tracking-tighter">
                Refer & Earn
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-foreground/75 leading-relaxed mb-8 sm:mb-10 font-medium">
                Invite friends and earn 500MB per successful referral with no
                limits. After three referrals, unlock a bonus scratch card with
                exclusive rewards.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
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
            </div>

            <div
              className="rounded-2xl border p-8"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                borderColor: "rgba(255, 215, 0, 0.25)",
                boxShadow:
                  "0 8px 24px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
              }}
            >
              <h3 className="text-lg md:text-xl font-black mb-6 tracking-tight">
                How it works
              </h3>
              <ol className="space-y-5 mb-8">
                <li className="step flex items-start gap-4">
                  <div
                    className="flex-shrink-0 h-8 w-8 rounded-lg flex items-center justify-center text-xs font-bold text-accent"
                    style={{
                      background: "rgba(255, 215, 0, 0.15)",
                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
                    }}
                  >
                    1
                  </div>
                  <span className="text-base leading-relaxed">
                    Share your unique referral code with friends.
                  </span>
                </li>
                <li className="step flex items-start gap-4">
                  <div
                    className="flex-shrink-0 h-8 w-8 rounded-lg flex items-center justify-center text-xs font-bold text-accent"
                    style={{
                      background: "rgba(255, 215, 0, 0.15)",
                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
                    }}
                  >
                    2
                  </div>
                  <span className="text-base leading-relaxed">
                    Your friend just installs the App and put your referral code
                    (friend doesn't need to buy).
                  </span>
                </li>
                <li className="step flex items-start gap-4">
                  <div
                    className="flex-shrink-0 h-8 w-8 rounded-lg flex items-center justify-center text-xs font-bold text-accent"
                    style={{
                      background: "rgba(255, 215, 0, 0.15)",
                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
                    }}
                  >
                    3
                  </div>
                  <span className="text-base leading-relaxed">
                    Both will Get 500MBs instant. After 3 referrals you also get
                    a scratch card of worth UPTO 300GBs of Data.
                  </span>
                </li>
              </ol>

              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/message/4S3NPHUQR663C1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-accent/10 hover:bg-accent/20 text-accent font-semibold transition-all duration-300 border border-accent/30 hover:border-accent/50"
                >
                  Get referral link on WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://t.me/esim4lifechatbot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-accent/10 hover:bg-accent/20 text-accent font-semibold transition-all duration-300 border border-accent/30 hover:border-accent/50"
                >
                  Get referral link on Telegram
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section
        id="support"
        className="relative py-16 sm:py-24 md:py-40 lg:py-48 overflow-hidden"
      >
        {/* Background decoration with smoothened yellow gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-accent/18 via-accent/10 to-transparent rounded-full blur-[100px]" />
          <div className="absolute top-0 right-1/3 w-[450px] h-[450px] bg-gradient-to-br from-accent/10 via-accent/5 to-transparent rounded-full blur-[100px]" />
        </div>

        <div className="container px-4 sm:px-0">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 tracking-tighter">
              Need Help?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-foreground/75 leading-relaxed mb-10 sm:mb-12 font-medium">
              Our dedicated support team is here to assist you 24/7. Contact us
              anytime on WhatsApp or Telegram for quick, professional
              assistance.
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
