import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500">
      <div className="flex flex-col gap-4 items-center">
        <SignIn />
      </div>
    </div>
  );
}
