import React from 'react';
import { Bell, Search, User } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AdminDashboard = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-50 mt-16">
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">        
        
        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
          <h2 className="text-2xl font-semibold mb-6 text-royalblue">Dashboard Overview</h2>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <StatCard title="Total Users" value="2,453" change="+12%" positive={true} />
            <StatCard title="New Signups" value="125" change="+8%" positive={true} />
            <StatCard title="Bounce Rate" value="24%" change="-3%" positive={true} />
            <StatCard title="Revenue" value="$12,380" change="-2%" positive={false} />
          </div>
          
          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-royalblue">
              <h3 className="font-semibold mb-4 text-royalblue">User Activity</h3>
              <div className="h-64 bg-gray-50 rounded">
                <UserActivityChart />
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-4 text-royalblue">Revenue Statistics</h3>
              <div className="h-64 bg-gray-50 rounded">
                <RevenueChart />
              </div>
            </div>
          </div>
          
          {/* Recent Activities */}
          <div className="bg-white p-6 rounded-lg shadow">
                          <h3 className="font-semibold mb-4 text-royalblue">Recent Activities</h3>
            <div className="space-y-4">
              <ActivityItem 
                user="John Doe" 
                action="Rented a Car" 
                time="5 minutes ago" 
              />
              <ActivityItem 
                user="Sarah Smith" 
                action="Rented a Car" 
                time="2 hours ago" 
              />
              <ActivityItem 
                user="Mark Wilson" 
                action="Rented a Car" 
                time="5 hours ago" 
              />
              <ActivityItem 
                user="Emily Chen" 
                action="Rented a Car" 
                time="1 day ago" 
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

// Stat Card Component
const StatCard = ({ title, value, change, positive }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <p className="text-gray-500 mb-1">{title}</p>
      <div className="flex items-end justify-between">
        <p className="text-2xl font-semibold">{value}</p>
        <span className={`text-sm ${positive ? 'text-green-500' : 'text-red-500'}`}>
          {change}
        </span>
      </div>
    </div>
  );
};

// Activity Item Component
const ActivityItem = ({ user, action, time }) => {
  return (
    <div className="flex items-start border-b border-gray-100 pb-4">
      <div className="w-8 h-8 rounded-full bg-royalblue bg-opacity-10 flex items-center justify-center mr-3">
        <User size={16} />
      </div>
      <div>
        <p>
          <span className="font-medium">{user}</span>
          <span className="text-gray-600"> {action}</span>
        </p>
        <p className="text-gray-400 text-sm">{time}</p>
      </div>
    </div>
  );
};

// Revenue Chart Component
const RevenueChart = () => {
  // Dummy data for revenue statistics
  const revenueData = [
    { name: 'Jan', revenue: 12000, expenses: 8000, profit: 4000 },
    { name: 'Feb', revenue: 15000, expenses: 9500, profit: 5500 },
    { name: 'Mar', revenue: 18000, expenses: 11000, profit: 7000 },
    { name: 'Apr', revenue: 17000, expenses: 10500, profit: 6500 },
    { name: 'May', revenue: 21000, expenses: 13000, profit: 8000 },
    { name: 'Jun', revenue: 19000, expenses: 12000, profit: 7000 },
    { name: 'Jul', revenue: 23000, expenses: 14000, profit: 9000 },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={revenueData}
        margin={{ top: 20, right: 30, left: 10, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip formatter={(value) => `${value}`} />
        <Legend />
        <Line 
          type="monotone" 
          dataKey="revenue" 
          stroke="#4169E1" 
          strokeWidth={2}
          activeDot={{ r: 8 }} 
        />
        <Line 
          type="monotone" 
          dataKey="expenses" 
          stroke="#ff6b6b" 
          strokeWidth={2}
        />
        <Line 
          type="monotone" 
          dataKey="profit" 
          stroke="#82ca9d" 
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

// User Activity Chart Component
const UserActivityChart = () => {
  // Dummy data for user activity
  const activityData = [
    { name: '1 Mar', active: 4000, new: 2400, returning: 1600 },
    { name: '2 Mar', active: 3500, new: 1800, returning: 1700 },
    { name: '3 Mar', active: 5000, new: 2800, returning: 2200 },
    { name: '4 Mar', active: 4700, new: 2200, returning: 2500 },
    { name: '5 Mar', active: 4200, new: 1900, returning: 2300 },
    { name: '6 Mar', active: 6000, new: 3200, returning: 2800 },
    { name: '7 Mar', active: 5500, new: 2700, returning: 2800 },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={activityData}
        margin={{ top: 20, right: 30, left: 10, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line 
          type="monotone" 
          dataKey="active" 
          stroke="#4169E1" 
          strokeWidth={2}
          activeDot={{ r: 8 }} 
        />
        <Line 
          type="monotone" 
          dataKey="new" 
          stroke="#82ca9d" 
          strokeWidth={2}
        />
        <Line 
          type="monotone" 
          dataKey="returning" 
          stroke="#ffc658" 
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default AdminDashboard;