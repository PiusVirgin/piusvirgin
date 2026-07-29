interface TableEmptyProps {
  message: string;
  colSpan: number;
}

export default function TableEmpty({ message, colSpan }: TableEmptyProps) {
  return (
    <tr>
      <td colSpan={colSpan} className="px-8 py-16 text-center">
        <div className="space-y-2">
          <p className="text-lg font-semibold">Nothing here yet</p>

          <p className="text-sm text-muted-foreground">{message}</p>
        </div>
      </td>
    </tr>
  );
}
