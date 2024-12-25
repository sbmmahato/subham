import React from 'react';

const repositories = [
  {
    name: 'design-system',
    language: 'React',
    size: '7320 KB',
    visibility: 'Public',
    updatedAt: '1 day ago',
  },
  {
    name: 'codeant-ci-app',
    language: 'Javascript',
    size: '5871 KB',
    visibility: 'Private',
    updatedAt: '2 days ago',
  },
  {
    name: 'analytics-dashboard',
    language: 'Python',
    size: '4521 KB',
    visibility: 'Private',
    updatedAt: '5 days ago',
  },
  {
    name: 'mobile-app',
    language: 'Swift',
    size: '3096 KB',
    visibility: 'Public',
    updatedAt: '3 days ago',
  },
  {
    name: 'e-commerce-platform',
    language: 'Java',
    size: '6210 KB',
    visibility: 'Private',
    updatedAt: '6 days ago',
  },
  {
    name: 'blog-website',
    language: 'HTML/CSS',
    size: '1876 KB',
    visibility: 'Public',
    updatedAt: '4 days ago',
  },
  {
    name: 'social-network',
    language: 'PHP',
    size: '5432 KB',
    visibility: 'Private',
    updatedAt: '7 days ago',
  },
];

function RepositoryList() {
  return (
    <div className="space-y-4">
      {repositories.map((repo, index) => (
        <div
          key={index}
          className="border rounded-lg p-4 transition-colors hover:bg-[#F5F5F5]" style={{cursor:'pointer'}}
        >
          <div className="flex flex-col space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <h3 className="font-medium">{repo.name}</h3>
                <span className="px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-600">
                  {repo.visibility}
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span>{repo.language}</span>
              </div>
              <span>{repo.size}</span>
              <span>Updated {repo.updatedAt}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RepositoryList;