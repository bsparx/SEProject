import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Welcome Back!</h1>
        <p className="text-sm text-center text-gray-600 mb-8">
          Sign in to your PennyPilot account and take control of your finances.
        </p>
        <div className="flex flex-col gap-4 items-center">
          <SignIn />
        </div>
      </div>
    </div>
  );
}
