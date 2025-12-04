export default function ShopPage() {
  return (
    <>
      <iframe
        src="https://snowswap.anarikkelarsen.dk/shop/"
        className="w-full h-screen border-0"
        style={{ height: "calc(100vh - 150px)" }} // så navbar og footer passer
      />
    </>
  );
}
