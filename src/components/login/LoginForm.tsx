import React, { useState } from 'react';
import { Github } from 'lucide-react';
import { LoginButton } from './LoginButton';
import x from '../../assets/logo.jpg'

function LoginForm() {
  const [activeTab, setActiveTab] = useState<'saas' | 'self-hosted'>('saas');

  return (
    <div className="w-[480px] min-h-[520px] p-10 bg-white rounded-2xl shadow-sm">
      <div className="flex justify-center mb-3">
        <img src={x} alt="CodeAnt AI" className="h-7 w-7" />
        <span className="ml-2 text-xl font-semibold">CodeAnt AI</span>
      </div>
      <h1 className="text-[28px] font-semibold text-center mb-8">Welcome to CodeAnt AI</h1>
      
      <div className="flex p-1 mb-8 bg-gray-100 rounded-lg">
        <button 
          className={`flex-1 py-2.5 text-sm font-medium rounded-md transition-colors ${
            activeTab === 'saas' 
              ? 'bg-blue-600 text-white' 
              : 'text-gray-600 hover:text-gray-800'
          }`}
          onClick={() => setActiveTab('saas')}
        >
          SAAS
        </button>
        <button 
          className={`flex-1 py-2.5 text-sm font-medium rounded-md transition-colors ${
            activeTab === 'self-hosted' 
              ? 'bg-blue-600 text-white' 
              : 'text-gray-600 hover:text-gray-800'
          }`}
          onClick={() => setActiveTab('self-hosted')}
        >
          Self Hosted
        </button>
      </div>

      <div className="space-y-3 min-h-[240px]">
        {activeTab === 'saas' ? (
          <>
            <LoginButton 
              icon={<Github className="h-5 w-5" />} 
              provider="Github" 
            />
            <LoginButton 
              icon={<img src="https://bitbucket.org/favicon.ico" alt="" className="h-5 w-5" />} 
              provider="Bitbucket" 
            />
            <LoginButton 
              icon={<img src="https://code.benco.io/icon-collection/azure-icons/Azure-DevOps.svg" alt="" className="h-5 w-5" />} 
              provider="Azure Devops" 
            />
            <LoginButton 
              icon={<img src="https://gitlab.com/favicon.ico" alt="" className="h-5 w-5" />} 
              provider="GitLab" 
            />
          </>
        ) : (
          <>
            <LoginButton 
              icon={<img src="https://gitlab.com/favicon.ico" alt="" className="h-5 w-5" />} 
              provider="Self Hosted GitLab" 
            />
            <LoginButton 
              icon={<img src="https://cdn-icons-png.flaticon.com/512/2165/2165004.png" alt="" className="h-5 w-5" />} 
              provider="Sign in with SSO" 
            />
          </>
        )}
      </div>

      <p className="text-sm text-center mt-6 text-gray-600">
        By signing up you agree to the{' '}
        <a href="#" className="text-gray-900 hover:underline">
          Privacy Policy
        </a>
        .
      </p>
    </div>
  );
}

export default LoginForm;