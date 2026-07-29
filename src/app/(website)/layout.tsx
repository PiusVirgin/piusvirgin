import HeaderWrapper from "@/components/header/header-wrapper";
import Footer from "@/components/footer";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderWrapper />
      {children}
      <Footer />
    </>
  );
}
