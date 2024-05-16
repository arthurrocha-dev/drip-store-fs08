export interface AlertCardProps {
  children: React.ReactNode;
  type?: "success" | "error" | "warning" | "info";
  title: string;
}
