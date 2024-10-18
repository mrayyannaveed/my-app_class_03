import Navbar4 from "../component/navbar4";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
        <Navbar4/>
        {children}
    </section>
  );
}
