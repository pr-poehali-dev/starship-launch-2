import { Menu } from "lucide-react"
import { ShimmerButton } from "@/components/shimmer-button"

interface HeaderProps {
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
}

export function Header({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  return (
    <>
      <header className="relative z-10 flex items-center justify-between px-4 sm:px-6 py-4 lg:px-12">
        <div className="flex items-center space-x-2 pl-3 sm:pl-6 lg:pl-12">
          <span className="text-white font-bold text-lg sm:text-xl lg:text-2xl">Тутаев</span>
        </div>

        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <a href="#" className="text-white/80 hover:text-white transition-colors text-sm lg:text-base">
            История
          </a>
          <a href="#" className="text-white/80 hover:text-white transition-colors text-sm lg:text-base">
            Архитектура
          </a>
          <a href="#" className="text-white/80 hover:text-white transition-colors text-sm lg:text-base">
            Туризм
          </a>
          <a href="#" className="text-white/80 hover:text-white transition-colors text-sm lg:text-base">
            О городе
          </a>
        </nav>

        <button className="md:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <Menu className="w-6 h-6" />
        </button>

        <ShimmerButton className="hidden md:flex bg-orange-500 hover:bg-orange-600 text-white px-4 lg:px-6 py-2 rounded-xl text-sm lg:text-base font-medium shadow-lg">
          Узнать больше
        </ShimmerButton>
      </header>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-white/10 z-20">
          <nav className="flex flex-col space-y-4 px-6 py-6">
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              История
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              Архитектура
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              Туризм
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              О городе
            </a>
            <ShimmerButton className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-xl text-sm font-medium shadow-lg w-fit">
              Узнать больше
            </ShimmerButton>
          </nav>
        </div>
      )}
    </>
  )
}
