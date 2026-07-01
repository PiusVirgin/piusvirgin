import InquiryForm from "./inquiry-form";

interface Props {
  title: string;
}

export default function BookingCard({ title }: Props) {
  return (
    <aside
      className="
      sticky
      top-28
      h-fit
      self-start
      rounded-3xl
      border
      border-white/10
      bg-white/5
      p-6
      shadow-2xl
      backdrop-blur-xl
    "
    >
      <h3 className="mb-2 text-2xl font-bold">Book This Tour</h3>

      <p className="mb-6 text-muted-foreground">
        Reserve your experience today.
      </p>

      <InquiryForm tourTitle={title} />
    </aside>
  );
}
