export default function CEOSignature() {
  return (
    <div className="mt-10 flex items-center gap-5">
      <div
        className="
          h-14
          w-[3px]
          rounded-full
          bg-pius-red
        "
      />

      <div>
        <p
          className="
            text-2xl
            font-semibold
            italic
            tracking-wide
            text-slate-900
          "
        >
          Chief Festus Okorie
        </p>

        <p
          className="
            mt-1
            text-sm
            uppercase
            tracking-[0.25em]
            text-slate-500
          "
        >
          Founder & Chief Executive Officer
        </p>
      </div>
    </div>
  );
}
