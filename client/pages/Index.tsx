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
        {/* Decorative background elements */}
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container pt-8 sm:pt-12 pb-12 sm:pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-32 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center justify-center">
          {/* Left content */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 w-fit">
              <div className="h-8 sm:h-10 w-0.5 sm:w-1 bg-gradient-to-b from-accent to-accent/30 rounded-full" />
              <span className="text-xs sm:text-sm font-bold text-accent tracking-widest uppercase">
                Premium Global eSIM
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-4 sm:mb-5 md:mb-6">
              Your Lifetime eSIM
            </h1>
            <p className="text-lg sm:text-xl text-accent font-bold mb-3 sm:mb-4">
              <span className="text-gradient">Zero Expiry</span>
            </p>

            <p className="text-sm sm:text-base md:text-lg text-foreground/75 max-w-xl leading-relaxed mb-6 sm:mb-8">
              esim4life.shop provides an international data eSIM that never
              expires. Permanent data and account validity across multiple
              countries, including Pakistan. Compatible with both PTA and
              non-PTA phones.
            </p>

            {/* Features chips */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-7 sm:mb-10">
              <span className="chip">
                <Infinity className="h-3 sm:h-4 w-3 sm:w-4" />
                <span className="text-xs sm:text-sm">No Expiry</span>
              </span>
              <span className="chip">
                <Gift className="h-3 sm:h-4 w-3 sm:w-4" />
                <span className="text-xs sm:text-sm">Free Data</span>
              </span>
              <span className="chip">
                <Wifi className="h-3 sm:h-4 w-3 sm:w-4" />
                <span className="text-xs sm:text-sm">Global 4G/5G</span>
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch gap-3 sm:gap-4 w-full max-w-xl">
              <GlowButton
                href="https://wa.me/message/4S3NPHUQR663C1"
                label="Buy via WhatsApp"
                icon="https://i.ibb.co/Q2YSt4V/whatsapp.png"
                className="w-full text-sm sm:text-base px-4 sm:px-5"
              />
              <GlowButton
                href="https://t.me/esim4lifechatbot"
                label="Buy via Telegram"
                icon="https://i.ibb.co/8gxkpRSv/telegram-1.png"
                className="w-full text-sm sm:text-base px-4 sm:px-5"
              />
            </div>
          </div>

          {/* Right stats section */}
          <div className="order-1 lg:order-2 relative w-full">
            {/* Price poster highlight */}
            <div className="mb-8 sm:mb-10 md:mb-12 text-center">
              <p className="text-xs sm:text-sm font-bold text-accent/80 uppercase tracking-widest mb-2 sm:mb-3">
                Limited Time Offer
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-accent mb-2 sm:mb-3 leading-tight">
                999 PKR
              </h2>
              <p className="text-sm sm:text-base md:text-lg font-semibold text-foreground/70">
                Lifetime eSIM
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5">
              <div className="stat">
                <Wifi className="h-6 sm:h-7 md:h-8 w-6 sm:w-7 md:w-8 text-accent" />
                <span className="stat-label text-xs">Connectivity</span>
                <span className="stat-value text-lg sm:text-xl md:text-2xl">
                  4G/5G
                </span>
              </div>
              <div className="stat">
                <Infinity className="h-6 sm:h-7 md:h-8 w-6 sm:w-7 md:w-8 text-accent" />
                <span className="stat-label text-xs">Validity</span>
                <span className="stat-value text-lg sm:text-xl md:text-2xl">
                  Lifetime
                </span>
              </div>
              <div className="stat">
                <Globe2 className="h-6 sm:h-7 md:h-8 w-6 sm:w-7 md:w-8 text-accent" />
                <span className="stat-label text-xs">Coverage</span>
                <span className="stat-value text-lg sm:text-xl md:text-2xl">
                  Global
                </span>
              </div>
              <div className="stat">
                <Shield className="h-6 sm:h-7 md:h-8 w-6 sm:w-7 md:w-8 text-accent" />
                <span className="stat-label text-xs">Security</span>
                <span className="stat-value text-lg sm:text-xl md:text-2xl">
                  Secure
                </span>
              </div>
            </div>

            {/* Compatibility info */}
            <div
              className="mt-4 sm:mt-5 md:mt-6 rounded-2xl border p-4 sm:p-5 md:p-6 text-center"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                borderColor: "rgba(255, 215, 0, 0.15)",
              }}
            >
              <p className="text-base sm:text-lg font-bold text-foreground mb-1 sm:mb-2">
                Compatible with All Non-PTA Phones
              </p>
              <p className="text-xs sm:text-sm text-foreground/70">
                No restrictions • Full international compatibility
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-20 md:py-32 lg:py-40">
        <div className="container">
          <div className="mb-16 md:mb-20 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
              Everything you need
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
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
        className="relative py-20 md:py-32 lg:py-40 overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        </div>

        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">
              Get Your eSIM Today
            </h2>

            <div className="inline-flex items-baseline gap-3 mb-8">
              <span className="text-5xl md:text-6xl font-black text-accent">
                999 PKR
              </span>
              <span className="text-base text-accent font-bold uppercase tracking-widest">
                One-time
              </span>
            </div>

            <p className="text-base lg:text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto mb-12">
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
      <section id="refer" className="relative py-20 md:py-32 lg:py-40">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
                Refer & Earn
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed mb-8">
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
        className="relative py-20 md:py-32 lg:py-40 overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 opacity-20">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        </div>

        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
              Need Help?
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-10">
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
