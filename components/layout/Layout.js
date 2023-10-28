import MainHeader from "./MainHeader";

export default function Layout({ children }) {
  return (
    <>
      <MainHeader />
      <main className="container mx-auto">{children}</main>
    </>
  );
}
