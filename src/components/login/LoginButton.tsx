import React, { ReactNode } from 'react';

interface LoginButtonProps {
  icon: ReactNode;
  provider: string;
}

export function LoginButton({ icon, provider }: LoginButtonProps) {
  return (
    <button className="w-full flex items-center justify-center gap-2 py-2 px-4 border rounded-md hover:bg-gray-50">
      {icon}
      <span>Sign in with {provider}</span>
    </button>
  );
}