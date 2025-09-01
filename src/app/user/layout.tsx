import CheckActiveStatus from "@/components/common/auth/check-active-user";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CheckActiveStatus>{children}</CheckActiveStatus>;
}
