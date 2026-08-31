export default function AnnouncementBar() {
  return (
    <div className="bg-espresso text-ivory">
      <div className="mx-auto flex max-w-[1400px] items-center justify-center px-5 py-2 sm:justify-between">
        <p className="truncate text-center text-[0.62rem] font-medium tracking-[0.28em] uppercase sm:text-[0.68rem]">
          Neemzari Couture&nbsp;•&nbsp;Bridal&nbsp;•&nbsp;Wedding&nbsp;•&nbsp;Bespoke
        </p>
        <p className="hidden items-center gap-2 pr-2 text-[0.62rem] tracking-[0.18em] uppercase text-ivory/70 sm:flex">
          <span className="h-1 w-1 rounded-full bg-gold" />
          Private style consultations available
        </p>
      </div>
    </div>
  );
}
