import Image from "next/image";

export default function Navbar() {
  return (
    <aside className="max-h-screen sticky top-0 overflow-y-auto scrollbar-hide p-2">
      <div className="flex flex-row justify-between items-center gap-12">
        <Image src="/logo.jpg" alt="logo" width={50} height={50} priority />
        <h1 className="text-xl">Menu</h1>
      </div>
    </aside>
  );
}
