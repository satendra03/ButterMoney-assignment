import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-background">
      <div className="px-5 border-b md:px-20 lg:px-40">
        <Navbar />
      </div>

      <main className="px-5 md:px-20 lg:px-40">
        {children}
      </main>

      <div className="pt-5 px-5 border-t md:px-20 lg:px-40">
        <Footer />
      </div>
    </div>
  );
}

export default Layout
