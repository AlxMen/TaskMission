import Logo from "@/components/Logo";
import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify";

export default function AuthLayout() {
  return (
    <>
      <div className="bg-gray-800 min-h-screen">
        <div className="py-10 lg:py-20 mx-auto w-[450px]">
          <div className="flex w-72 mx-auto mb-5">
            <Logo />
          </div>
          <p className="text-6xl text-center text-slate-100 font-black">
            TaskMission
          </p>
          <div className="mt-10">
            <Outlet />
          </div>
        </div>
      </div>
      <ToastContainer pauseOnHover={false} pauseOnFocusLoss={false} />
    </>
  );
}
