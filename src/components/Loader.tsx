'use client';

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background text-foreground z-50">
      <div className="w-16 h-16 border-4 border-[var(--foreground)] border-t-transparent rounded-md animate-spin" />
    </div>
  );
}
