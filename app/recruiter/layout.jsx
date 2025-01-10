import RecruterSideBar from "@/components/recruter-profile/side-bar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";

export default function Layout({ children }) {
  return (
    <div>
      <SidebarProvider>
        <RecruterSideBar />

        <main className=" w-full p-6 bg-gray-200">
          <SidebarTrigger className=" lg:hidden " />

          {children}
        </main>
      </SidebarProvider>
      <Toaster richColors closeButton />
    </div>
  );
}
