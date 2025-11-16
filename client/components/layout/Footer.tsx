export default function Footer() {
  return (
    <footer className="border-t border-border/60 mt-16 sm:mt-20">
      <div className="container px-4 sm:px-6 lg:px-8 py-10 sm:py-12 grid gap-8 sm:gap-10 md:gap-12 grid-cols-1 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 mb-4 sm:mb-5">
            <img
              src="https://i.ibb.co/k2b407jw/esim4lifelogo.png"
              alt="esim4life logo"
              className="h-10 sm:h-12 w-10 sm:w-12 rounded-md"
              loading="lazy"
            />
            <span className="font-black tracking-tighter text-base sm:text-lg">
              esim4life
            </span>
          </div>
          <p className="text-xs sm:text-sm text-foreground/80 font-medium leading-relaxed">
            Cheap eSIM, Lifetime eSIM, International eSIM, Non-Expiring Data, 5G
            eSIM, buy eSIM online for global travel. Price:{" "}
            <span className="font-semibold">999 PKR</span>. Permanent data
            validity across multiple countries, including Pakistan. Works on PTA
            and non-PTA phones.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4 sm:mb-5 text-base sm:text-lg">Quick links</h4>
          <ul className="space-y-2.5 sm:space-y-2 text-xs sm:text-sm text-foreground/80 font-medium">
            <li>
              <a
                href="/#home"
                className="hover:text-foreground transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/#features"
                className="hover:text-foreground transition-colors"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="/#buy"
                className="hover:text-foreground transition-colors"
              >
                Buy eSIM
              </a>
            </li>
            <li>
              <a
                href="/#refer"
                className="hover:text-foreground transition-colors"
              >
                Refer & Earn
              </a>
            </li>
            <li>
              <a
                href="/#support"
                className="hover:text-foreground transition-colors"
              >
                Support
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 sm:mb-5 text-base sm:text-lg">Contact</h4>
          <ul className="space-y-2.5 sm:space-y-2 text-xs sm:text-sm text-foreground/80 font-medium">
            <li>
              Email:{" "}
              <a
                className="hover:text-foreground transition-colors"
                href="mailto:support@esim4life.shop"
              >
                support@esim4life.shop
              </a>
            </li>
            <li>
              WhatsApp:{" "}
              <a
                className="hover:text-foreground transition-colors"
                href="https://wa.me/message/4S3NPHUQR663C1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat now
              </a>
            </li>
            <li>
              Telegram:{" "}
              <a
                className="hover:text-foreground transition-colors"
                href="https://t.me/esim4lifechatbot"
                target="_blank"
                rel="noopener noreferrer"
              >
                @esim4lifechatbot
              </a>
            </li>
            <li className="flex gap-3 pt-2">
              <a
                href="https://wa.me/message/4S3NPHUQR663C1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="opacity-80 hover:opacity-100 transition-opacity"
              >
                <img
                  src="https://i.ibb.co/Q2YSt4V/whatsapp.png"
                  alt="WhatsApp"
                  className="h-6 w-6"
                  loading="lazy"
                />
              </a>
              <a
                href="https://t.me/esim4lifechatbot"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="opacity-80 hover:opacity-100 transition-opacity"
              >
                <img
                  src="https://i.ibb.co/8gxkpRSv/telegram-1.png"
                  alt="Telegram"
                  className="h-6 w-6"
                  loading="lazy"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-xs text-foreground/70 font-medium">
        © {new Date().getFullYear()} esim4life.shop. All rights reserved.
      </div>
    </footer>
  );
}
