import { LeafIcon } from "lucide-react";
import { Button } from "../components/ui/button";

export default function Header() {
  return (
    <header className="bg-green-600 text-white py-5 px-4 shadow-sm">
      <div className="md:container mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 font-bold text-xl">
          <LeafIcon className="w-6 h-6" />
          EcoPoints
        </a>
        <nav className="hidden md:flex items-center gap-6">
          <a href="/users/dashboard" className="hover:text-green-200">
            Beranda
          </a>
          <a href="/about" className="hover:text-green-200">
            Tentang Kami
          </a>
          <a href="/contact" className="hover:text-green-200">
            Hubungi Kami
          </a>
          <a href="/locations" className="hover:text-green-200">
            Lokasi
          </a>
          <a href="/profile" className="hover:text-green-200">
            Profile
          </a>
          <a href="/admin/dashboard" className="hover:text-green-200">
            Admin
          </a>
        </nav>
        {/* Tombol login dan regsiter */}
        <div className="flex items-center gap-4">
          <Button asChild variant="secondary" color="white" size="sm" className="hidden md:flex items-center">
            <a href="/login">Masuk</a>
          </Button>
        </div>
        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>
                  <UserIcon className="h-6 w-6" />
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-white text-gray-800 shadow-lg rounded-lg">
            <div className="flex justify-between items-center gap-2 p-2">
              <DropdownMenuLabel className="font-semibold text-gray-900">Akun Saya</DropdownMenuLabel>
            </div>
            <DropdownMenuSeparator className="bg-gray-200" />
            <DropdownMenuItem asChild>
              <a href="/profile" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
                <UserIcon className="h-4 w-4" />
                Profil
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="/settings" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
                <SettingsIcon className="h-4 w-4" />
                Pengaturan
              </a>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-gray-200" />
            <DropdownMenuItem asChild>
              <a href="/login" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
                <LogInIcon className="h-4 w-4" />
                Masuk
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="/register" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
                <LogInIcon className="h-4 w-4" />
                Daftar
              </a>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-gray-200" />
            <DropdownMenuItem asChild>
              <a href="/logout" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
                <LogOutIcon className="h-4 w-4" />
                Keluar
              </a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu> */}
      </div>
    </header>
  );
}
