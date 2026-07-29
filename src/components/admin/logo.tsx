import Image from "next/image";
import Link from "next/link";

export default function AdminLogo() {
  return (
    <Link
      href="/admin/dashboard"
      className="font-heading text-2xl font-bold tracking-tight"
    >
      <Image
        src="/images/logo.png"
        alt="PiusVirgin"
        width={80}
        height={52}
        priority
      />
    </Link>
  );
}
