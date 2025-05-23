'use client';

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background text-foreground z-50 perspective-600">
      <div className="relative w-16 h-16 animate-rotate3d transform-style-preserve-3d">
        {/* Front face */}
        <div className="face front"></div>
        {/* Back face */}
        <div className="face back"></div>
        {/* Left face */}
        <div className="face left"></div>
        {/* Right face */}
        <div className="face right"></div>
        {/* Top face */}
        <div className="face top"></div>
        {/* Bottom face */}
        <div className="face bottom"></div>
      </div>
    </div>
  );
}
