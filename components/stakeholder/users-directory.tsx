'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search, Plus, Grid3x3, List } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface User {
  id: string
  name: string
  email: string
  role: string
  entity: string
  status: 'Active' | 'Inactive'
}

const users: User[] = [
  {
    id: '1',
    name: 'Ahmed Mohammed',
    email: 'ahmed@health.gov.qa',
    role: 'Admin',
    entity: 'Ministry of Health',
    status: 'Active',
  },
  {
    id: '2',
    name: 'Fatima Ali',
    email: 'fatima@education.gov.qa',
    role: 'Manager',
    entity: 'Ministry of Education',
    status: 'Active',
  },
  {
    id: '3',
    name: 'Mohammed Hassan',
    email: 'mohammed@health.gov.qa',
    role: 'User',
    entity: 'Ministry of Public Health',
    status: 'Active',
  },
  {
    id: '4',
    name: 'Layla Ibrahim',
    email: 'layla@qatar-airways.com',
    role: 'Admin',
    entity: 'Qatar Airways',
    status: 'Inactive',
  },
  {
    id: '5',
    name: 'Omar Abdullah',
    email: 'omar@education.gov.qa',
    role: 'User',
    entity: 'Ministry of Education',
    status: 'Active',
  },
]

export default function UsersDirectory() {
  const router = useRouter()
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleAddNewUser = () => {
    router.push('/stakeholder-management/add-user')
  }

  return (
    <div className="bg-white">
      {/* Header with Search and Controls */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-bold text-foreground">
            Users Directory <span className="text-primary">({users.length} Users)</span>
          </h2>
        </div>
        
        <div className="flex items-center gap-3 ml-auto">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64"
            />
          </div>

          {/* View Toggle */}
          <div className="flex border border-border rounded-lg bg-white">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 ${viewMode === 'grid' ? 'bg-gray-100' : 'bg-white'}`}
            >
              <Grid3x3 className="h-5 w-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 ${viewMode === 'list' ? 'bg-gray-100' : 'bg-white'}`}
            >
              <List className="h-5 w-5" />
            </button>
          </div>

          {/* Add New Button */}
          <Button 
            className="bg-[#8A1538] hover:bg-[#8A1538]/90 text-primary-foreground gap-2"
            onClick={handleAddNewUser}
          >
            <Plus className="h-4 w-4" />
            Add New User
          </Button>
        </div>
      </div>

      {/* List View (Default) */}
      {viewMode === 'list' && (
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
          <table className="w-full">
            <thead className="bg-gray-100 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Email</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Role</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Entity</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-foreground font-medium">{user.name}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{user.email}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{user.role}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{user.entity}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      user.status === 'Active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Grid View */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredUsers.map((user) => (
            <div key={user.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition border border-gray-200">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold mb-4">
                {user.name.charAt(0)}
              </div>
              
              <div className="space-y-2 mb-4">
                <h3 className="font-bold text-foreground">{user.name}</h3>
                <p className="text-sm text-muted-foreground">{user.email}</p>
                <p className="text-sm text-muted-foreground">{user.role}</p>
                <p className="text-sm text-muted-foreground">{user.entity}</p>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                  user.status === 'Active'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {user.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
