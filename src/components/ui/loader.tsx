
import { cn } from "@/lib/utils";

interface LoaderProps {
  size?: "small" | "default" | "large";
  className?: string;
}

const Loader = ({ size = "default", className }: LoaderProps) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className={cn(
          "border-t-transparent animate-spin rounded-full border",
          {
            "h-4 w-4 border-2": size === "small",
            "h-6 w-6 border-2": size === "default",
            "h-10 w-10 border-3": size === "large",
          },
          className
        )}
      />
    </div>
  );
};

export default Loader;
