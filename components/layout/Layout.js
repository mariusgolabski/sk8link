import MainHeader from "./MainHeader";

export default function Layout({ children }) {
  return (
    <>
      <MainHeader />
      <main className="container mx-auto px-4">{children}</main>
    </>
  );
}
