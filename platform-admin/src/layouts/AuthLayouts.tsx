import { Outlet } from "react-router";
import PlatformLogo from '@/assets/platform-logo.jpg'

export default function AuthLayouts(){
    return(
        <div className="flex min-h-svh">
            {/* Left Section  */}
            <div className="hidden lg:flex flex-col p-12 lg:w-[440px] xl:w-[500px] justify-between bg-gradient-to-br from-[#06251a] to-[#105438]">
                <div className="flex items-center gap-3">
                    <img src={PlatformLogo} alt="Platform Admin Logo" className="size-12 rounded-xl shadow-lg shadow-black/20" />
                    <span className="text-base font-bold text-white">Platform Admin</span>
                </div>
                <div className="">
                    <h1 className="max-w-[380px] text-2xl leading-snug font-bold text-white">Run every store on your marketplace from one place.</h1>
                    <p className="mt-3.6 max-w-[360px] text-sm text-[#c7dccb]">Tenants, catalog, comissions, delivery network and reporting - unified across every store.</p>
                </div>

                <p className="text-xs text-[#8fb093]">&copy; 2026 Platform Admin</p>
            </div>

{/* Right Section  */}
            <div className="flex flex-1 items-center justify-center bg-background p-8">
                <Outlet/>
            </div>
        </div>
    )
}