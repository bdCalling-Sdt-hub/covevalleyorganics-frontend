import { ConfigProvider, Drawer } from "antd";
import Link from "next/link";
import { CloseOutlined } from "@ant-design/icons";
import { usePathname } from "next/navigation";

const MobileDrawer = ({
  open,
  onClose,
  links,
}: {
  open: boolean;
  onClose: () => void;
  links: Array<{ path: string; title: string }>;
}) => {
  const path = usePathname();

  return (
    <ConfigProvider
      theme={{
        components: {
          Drawer: {
            colorIcon: "#fff",
            colorIconHover: "#fff",
            colorPrimaryHover: "#fff",
          },
        },
      }}
    >
      <Drawer
        style={{ backgroundColor: "#bcd49a" }}
        placement="right"
        closeIcon={<CloseOutlined />}
        onClose={onClose}
        open={open}
      >
        <div className="flex flex-col items-center gap-8">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              onClick={onClose}
              className={`tracking-wider text-white hover:text-white whitespace-nowrap ${
                path === link.path ? "border-b-2 border-primary" : ""
              }`}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </Drawer>
    </ConfigProvider>
  );
};

export default MobileDrawer;
