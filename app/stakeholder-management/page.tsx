'use client'

import { useState } from 'react'
import Header from '@/components/header'
import EntitiesDirectory from '@/components/stakeholder/entities-directory'
import UsersDirectory from '@/components/stakeholder/users-directory'

export default function StakeholderManagementPage() {
  const [activeTab, setActiveTab] = useState('entities')

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="stakeholder" />
      
      {/* Page Header */}
      <div className="header-gradient px-6 py-6">
        <h1 className="text-3xl font-bold text-white">Stakeholder Management</h1>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab('entities')}
              className={`py-4 px-2 font-medium border-b-2 transition ${
                activeTab === 'entities'
                  ? 'border-primary text-foreground'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Entities Directory
            </button>
            <button
              onClick={() => setActiveTab('users')}
              className={`py-4 px-2 font-medium border-b-2 transition ${
                activeTab === 'users'
                  ? 'border-primary text-foreground'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Users Directory
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="mx-auto max-w-7xl px-6 py-8 bg-white">
        {activeTab === 'entities' && <EntitiesDirectory />}
        {activeTab === 'users' && <UsersDirectory />}
      </main>
    </div>
  )
}
