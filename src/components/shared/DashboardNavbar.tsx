import { LucideUsers2 } from 'lucide-react';

const DashboardNavbar = () => {
      return (
            <div className="bg-[#bcd49a] h-16  text-white flex justify-end items-center px-8">
                  <div className="flex items-center gap-4">
                        <LucideUsers2 />
                        <div>
                              <p className="font-medium ">Gigi rossi</p>
                        </div>
                  </div>
            </div>
      );
};

export default DashboardNavbar;
