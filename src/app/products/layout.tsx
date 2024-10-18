import Navbar3 from "../component/navbar3";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
        <Navbar3/>
        {children}
    </section>
  );
}
