
export default function NoiseOverlay() {
    return (
        <div className="fixed inset-0 pointer-events-none z-50 mix-blend-overlay opacity-50" style={{ backgroundImage: "url('/noise.png'"}}/>
    );
}