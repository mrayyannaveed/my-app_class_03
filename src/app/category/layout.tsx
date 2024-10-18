import Navbar2 from "../component/navbar2";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <section>
        <Navbar2/>
        {children}
      </section>
  );
}
