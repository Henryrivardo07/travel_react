import Footer from "./footer";
import Header from "./header";

interface Props {
  children: React.ReactNode;
}

export default function Layout(props: Props) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1">{props.children}</main>
      <Footer />
    </div>
  );
}
