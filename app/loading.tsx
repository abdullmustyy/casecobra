import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="w-full mt-24 flex justify-center">
      <Loader2 className="h-8 w-8 animate-spin text-zinc-500" />
    </div>
  );
};

export default Loading;
