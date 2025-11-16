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
        {/* Enhanced decorative background elements with smooth yellow gradient */}
        <div className="absolute inset-0 -z-10">
          {/* Top-right yellow gradient (primary accent) - smoothened */}
          <div className="absolute -top-64 -right-64 w-[600px] h-[600px] bg-gradient-to-br from-accent/25 via-accent/15 to-transparent rounded-full blur-[100px]" />
          {/* Top-left accent glow - smoothened */}
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-accent/12 via-accent/8 to-transparent rounded-full blur-[100px]" />
          {/* Bottom-right soft accent - smoothened */}
          <div className="absolute -bottom-48 right-0 w-[450px] h-[450px] bg-gradient-to-tl from-accent/10 via-accent/5 to-transparent rounded-full blur-[100px]" />
        </div>

        <div className="container pt-10 sm:pt-16 pb-16 sm:pb-20 md:pt-20 md:pb-28 lg:pt-24 lg:pb-40 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center justify-center">
          {/* Left content */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <div className="inline-flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10 w-fit">
              <div className="h-10 sm:h-12 w-1 bg-gradient-to-b from-accent via-accent to-accent/30 rounded-full" />
              <span className="text-xs sm:text-sm font-bold text-accent tracking-widest uppercase">
                Premium Global eSIM
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tighter mb-5 sm:mb-6 md:mb-7 text-foreground">
              Your Lifetime eSIM
            </h1>
            <p className="text-xl sm:text-2xl text-accent font-bold mb-4 sm:mb-5">
              <span className="text-gradient text-2xl sm:text-3xl">Zero Expiry</span>
            </p>

            <p className="text-base sm:text-lg md:text-lg text-foreground/80 max-w-xl leading-relaxed mb-8 sm:mb-10 font-medium">
              esim4life.shop provides an international data eSIM that never
              expires. Permanent data and account validity across multiple
              countries, including Pakistan. Compatible with both PTA and
              non-PTA phones.
            </p>

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
          <div className="order-1 lg:order-2 relative w-full">
            {/* Price poster highlight with thoughtful layout */}
            <div className="mb-10 sm:mb-12 md:mb-14 relative">
              {/* Subtle background glow for price section */}
              <div className="absolute inset-0 bg-gradient-to-b from-accent/8 via-accent/4 to-transparent rounded-3xl blur-3xl -z-10" />
              <div className="flex flex-col items-center lg:items-end gap-2 sm:gap-3">
                <div className="flex flex-col lg:flex-row items-center lg:items-baseline gap-2 sm:gap-4">
                  <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-accent leading-tight drop-shadow-lg">
                    999 PKR
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl font-semibold text-foreground/75">
                    Lifetime eSIM
                  </p>
                </div>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-5 md:gap-6">
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

            {/* Compatibility info */}
            <div
              className="mt-6 sm:mt-7 md:mt-8 rounded-2xl border p-5 sm:p-6 md:p-7 text-center"
              style={{
                background: "rgba(255, 215, 0, 0.08)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                borderColor: "rgba(255, 215, 0, 0.25)",
              }}
            >
              <p className="text-base sm:text-lg font-bold text-foreground mb-2">
                Compatible with All Non-PTA Phones
              </p>
              <p className="text-xs sm:text-sm text-foreground/75 font-medium">
                No restrictions • Full international compatibility
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-24 md:py-40 lg:py-48 overflow-hidden">
        {/* Subtle background accent - smoothened */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-accent/8 via-accent/4 to-transparent rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-gradient-to-tl from-accent/6 via-accent/3 to-transparent rounded-full blur-[100px]" />
        </div>
        <div className="container">
          <div className="mb-16 md:mb-24 max-w-3xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter">
              Everything you need
            </h2>
            <p className="text-lg md:text-xl text-foreground/75 leading-relaxed font-medium">
              Global compatibility, lifetime data, referral rewards, and
              seamless device transfers, wrapped in a premium, secure
              experience.
            </p>
          </div>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch">
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
        className="relative py-24 md:py-40 lg:py-48 overflow-hidden"
      >
        {/* Background decoration with smoothened yellow gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-accent/20 via-accent/10 to-transparent rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-gradient-to-tr from-accent/12 via-accent/6 to-transparent rounded-full blur-[100px]" />
        </div>

        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-10 tracking-tighter">
              Get Your eSIM Today
            </h2>

            <div className="inline-flex flex-col sm:flex-row items-center sm:items-baseline gap-4 sm:gap-4 mb-10">
              <span className="text-5xl md:text-6xl lg:text-7xl font-black text-accent">
                999 PKR
              </span>
              <span className="text-base sm:text-lg text-accent font-bold uppercase tracking-widest">
                One-time
              </span>
            </div>

            <p className="text-base lg:text-lg text-foreground/75 leading-relaxed max-w-2xl mx-auto mb-14 font-medium">
              Choose your preferred platform to purchase. Our team will guide
              you through a quick, secure setup process.
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
      <section id="refer" className="relative py-24 md:py-40 lg:py-48 overflow-hidden">
        {/* Subtle background accent - smoothened */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-accent/12 via-accent/6 to-transparent rounded-full blur-[100px]" />
        </div>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 tracking-tighter">
                Refer & Earn
              </h2>
              <p className="text-lg md:text-xl text-foreground/75 leading-relaxed mb-10 font-medium">
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
              className="rounded-2xl border p-8 shadow-xl"
              style={{
                background: "rgba(255, 255, 255, 0.06)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                borderColor: "rgba(255, 215, 0, 0.15)",
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
        className="relative py-24 md:py-40 lg:py-48 overflow-hidden"
      >
        {/* Background decoration with smoothened yellow gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-accent/15 via-accent/8 to-transparent rounded-full blur-[100px]" />
          <div className="absolute top-0 right-1/3 w-[450px] h-[450px] bg-gradient-to-br from-accent/8 via-accent/4 to-transparent rounded-full blur-[100px]" />
        </div>

        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 tracking-tighter">
              Need Help?
            </h2>
            <p className="text-lg md:text-xl text-foreground/75 leading-relaxed mb-12 font-medium">
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
