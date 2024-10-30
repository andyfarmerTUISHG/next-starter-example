import { CircularProgress } from "@nextui-org/react";

export default function loading() {
  return (
    <div>
      <CircularProgress
        className="mx-auto"
        classNames={{
          svg: "w-36 h-36",
        }}
        aria-label="Loading page..."
      />
    </div>
  );
}
