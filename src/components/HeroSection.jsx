import { useEffect, useRef, useState } from "react";

// ─────────────────────────────────────────────
//  Card data
// ─────────────────────────────────────────────
const CARDS = [
    {
        id: "views",
        type: "stat",
        bg: "#3B82F6",
        bgHover: "#2563EB",
        stat: "10M+",
        label: "Organische views",
        sub: "Groei door slimme content",
        rotateDeg: -3,
    },
    {
        id: "salon",
        type: "media",
        video: "https://gethyped.b-cdn.net/Salontopper/Loop%20Salontopper.mp4",
        rotateDeg: 2,
    },
    {
        id: "brands",
        type: "stat",
        bg: "#22C55E",
        bgHover: "#16A34A",
        stat: "30+",
        label: "Merken geholpen",
        sub: "Van start-up tot multinational",
        rotateDeg: -1,
    },
    {
        id: "petrol",
        type: "media",
        video: "https://gethyped.b-cdn.net/Petrol%20Head/petrolhead-loop.mp4",
        rotateDeg: 3,
    },
];

// ─────────────────────────────────────────────
//  CardWrapper – lift / straighten / shadow
//  Fixed pixel height passed in from parent
// ─────────────────────────────────────────────
function CardWrapper({ card, hovered, onEnter, onLeave, cardHeight, children }) {
    return (
        <div
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            className="relative rounded-2xl overflow-hidden cursor-pointer flex-1"
            style={{
                height: cardHeight,      // explicit px height so card never drifts
                minWidth: 0,
                transform: hovered
                    ? "translateY(-12px) rotate(0deg) scale(1.05)"
                    : `translateY(0px) rotate(${card.rotateDeg}deg) scale(1)`,
                transition: "transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease",
                boxShadow: hovered
                    ? "0 24px 48px rgba(0,0,0,0.22), 0 8px 16px rgba(0,0,0,0.12)"
                    : "0 6px 18px rgba(0,0,0,0.14)",
                zIndex: hovered ? 10 : 0,
            }}
        >
            {children}
        </div>
    );
}

// ─────────────────────────────────────────────
//  StatCard
// ─────────────────────────────────────────────
function StatCard({ card, cardHeight }) {
    const [hovered, setHovered] = useState(false);

    return (
        <CardWrapper
            card={card}
            hovered={hovered}
            cardHeight={cardHeight}
            onEnter={() => setHovered(true)}
            onLeave={() => setHovered(false)}
        >
            <div
                className="w-full h-full flex flex-col justify-between p-4 md:p-5"
                style={{
                    backgroundColor: hovered ? card.bgHover : card.bg,
                    transition: "background-color 0.3s ease",
                }}
            >
                {/* Stat number */}
                <span
                    className="font-black text-black leading-none block"
                    style={{
                        fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                        transform: hovered ? "scale(1.08)" : "scale(1)",
                        transformOrigin: "top left",
                        transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    }}
                >
                    {card.stat}
                </span>

                {/* Label block */}
                <div>
                    <div
                        style={{
                            height: 1,
                            marginBottom: 6,
                            backgroundColor: hovered ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0.25)",
                            transition: "background-color 0.3s ease",
                        }}
                    />
                    <p
                        className="font-bold text-black leading-tight"
                        style={{ fontSize: "clamp(0.65rem, 1vw, 0.88rem)" }}
                    >
                        {card.label}
                    </p>
                    <p
                        className="leading-tight mt-0.5"
                        style={{
                            fontSize: "clamp(0.58rem, 0.85vw, 0.72rem)",
                            color: hovered ? "rgba(0,0,0,0.75)" : "rgba(0,0,0,0.55)",
                            transition: "color 0.3s ease",
                        }}
                    >
                        {card.sub}
                    </p>
                </div>
            </div>
        </CardWrapper>
    );
}

// ─────────────────────────────────────────────
//  MediaCard – video ALWAYS autoplays (muted)
//  Hover: lift + play icon + scrim
// ─────────────────────────────────────────────
function MediaCard({ card, cardHeight }) {
    const [hovered, setHovered] = useState(false);
    const videoRef = useRef(null);

    // Always autoplay as soon as the component mounts
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        // Some browsers need a tiny delay after mount to accept play()
        const tryPlay = () => {
            video.play().catch(() => {
                // If browser blocks play, retry once on first user interaction
                const resume = () => { video.play(); document.removeEventListener("click", resume); };
                document.addEventListener("click", resume, { once: true });
            });
        };
        tryPlay();
    }, []);

    const handleEnter = () => setHovered(true);
    const handleLeave = () => setHovered(false);

    return (
        <CardWrapper
            card={card}
            hovered={hovered}
            cardHeight={cardHeight}
            onEnter={handleEnter}
            onLeave={handleLeave}
        >
            {/* Video – always playing, fills card */}
            <video
                ref={videoRef}
                src={card.video}
                loop
                muted
                playsInline
                autoPlay
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark scrim on hover */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "black",
                    opacity: hovered ? 0.15 : 0,
                    transition: "opacity 0.3s ease",
                }}
            />

            {/* Play icon badge on hover */}
            <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                style={{
                    opacity: hovered ? 1 : 0,
                    transform: hovered ? "scale(1)" : "scale(0.7)",
                    transition: "opacity 0.3s ease, transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
            >
                <div
                    style={{
                        background: "rgba(255,255,255,0.22)",
                        backdropFilter: "blur(6px)",
                        borderRadius: "50%",
                        padding: 10,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </div>
            </div>
        </CardWrapper>
    );
}

// ─────────────────────────────────────────────
//  HeroSection
// ─────────────────────────────────────────────
export default function HeroSection() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    // Fixed card height: taller on desktop, comfortable on mobile
    const cardHeight = isMobile ? 220 : 440;

    const visibleCards = CARDS.filter(
        (c) => !(isMobile && (c.id === "brands" || c.id === "petrol"))
    );

    return (
        <section
            className="
          flex flex-col
        py-10
        
      "
        >
            {/* ── Headline ── */}
            <div className="mb-8 md:mb-20">
                <h1 className="font-bold leading-[1.05] tracking-tight text-6xl lg:text-7xl">
                    <span className="block">
                        <span className="hidden md:inline">Get Hyped. Get Noticed.</span>
                        <span className="md:hidden">Get Hyped.</span>
                    </span>
                    <span className="block md:hidden">Get Noticed.</span>
                    <span className="block">Get Results.</span>
                </h1>
                <p className="mt-3 text-base md:text-xl font-bold text-black/80 leading-snug">
                    Klaar met gokken op content<br />die niets oplevert?
                </p>
            </div>

            {/* ─ Card row ─ */}
            <div
                className="lg:p-14
          flex flex-row items-end gap-3 md:gap-4
          overflow-x-auto md:overflow-visible
          [&::-webkit-scrollbar]:hidden
          [-ms-overflow-style:none]
          [scrollbar-width:none]
        "
                style={{
                    isolation: "isolate",           // correct z-index stacking for hover
                    /* Row height = card height + extra room for the lift on hover */
                    height: cardHeight + 20,
                    alignItems: "flex-end",
                }}
            >
                {visibleCards.map((card) =>
                    card.type === "stat" ? (
                        <StatCard key={card.id} card={card} cardHeight={cardHeight} />
                    ) : (
                        <MediaCard key={card.id} card={card} cardHeight={cardHeight} />
                    )
                )}
            </div>
        </section>
    );
}