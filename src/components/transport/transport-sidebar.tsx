import TransportQuoteForm from "./transport-quote-form";

interface Props {
  service: {
    title: string;
  };
}

export default function TransportSidebar({ service }: Props) {
  return (
    <aside
      className="
      sticky
      top-28
      h-fit
      rounded-3xl
      border
      border-white/20
      bg-white/70
      p-6
      shadow-xl
      backdrop-blur-xl
      dark:bg-white/5
    "
    >
      <h3 className="mb-4 text-2xl font-bold">Request Quote</h3>

      <p className="mb-6 text-sm text-muted-foreground">
        Get a customized logistics solution.
      </p>

      <TransportQuoteForm serviceTitle={service.title} />
    </aside>
  );
}
