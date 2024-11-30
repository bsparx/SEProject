import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-400 via-teal-500 to-blue-600">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Create Your Account
        </h1>
        <p className="text-sm text-center text-gray-600 mb-8">
          Join <span className="font-bold text-teal-600">PennyPilot</span> and start mastering your finances today.
        </p>
        <div className="flex flex-col gap-4 items-center">
          <SignUp />
        </div>
      </div>
    </div>
  );
}
