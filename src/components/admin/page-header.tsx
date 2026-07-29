interface PageHeaderProps {
  title: string;
  description?: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="space-y-2">
      <h1 className="font-heading text-3xl font-bold">{title}</h1>

      {description && <p className="text-muted-foreground">{description}</p>}
    </div>
  );
}
