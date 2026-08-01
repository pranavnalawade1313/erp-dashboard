import {
  User,
  Store,
  Bell,
  Shield,
  Globe,
  Moon,
  Save,
} from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="p-8 bg-slate-100 min-h-screen">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Settings
          </h1>
          <p className="text-gray-500">
            Manage your ERP preferences
          </p>
        </div>

        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">
          <Save size={18} />
          Save Changes
        </button>
      </div>

      {/* Settings Cards */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* Profile */}
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex items-center gap-3 mb-5">
            <User className="text-blue-600" size={28} />
            <h2 className="text-xl font-bold">Profile</h2>
          </div>

          <div className="space-y-4">
            <input
              className="w-full border rounded-lg p-3"
              defaultValue="Admin User"
            />

            <input
              className="w-full border rounded-lg p-3"
              defaultValue="admin@bigbazaar.com"
            />

            <input
              className="w-full border rounded-lg p-3"
              defaultValue="+91 9876543210"
            />
          </div>
        </div>

        {/* Store */}
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex items-center gap-3 mb-5">
            <Store className="text-green-600" size={28} />
            <h2 className="text-xl font-bold">Store Information</h2>
          </div>

          <div className="space-y-4">
            <input
              className="w-full border rounded-lg p-3"
              defaultValue="BIG BAZAAR"
            />

            <input
              className="w-full border rounded-lg p-3"
              defaultValue="Main Branch"
            />

            <input
              className="w-full border rounded-lg p-3"
              defaultValue="Pune, Maharashtra"
            />
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex items-center gap-3 mb-5">
            <Bell className="text-yellow-500" size={28} />
            <h2 className="text-xl font-bold">
              Notification Settings
            </h2>
          </div>

          <div className="space-y-4">

            <label className="flex justify-between">
              Email Notifications
              <input type="checkbox" defaultChecked />
            </label>

            <label className="flex justify-between">
              SMS Notifications
              <input type="checkbox" />
            </label>

            <label className="flex justify-between">
              Low Stock Alerts
              <input type="checkbox" defaultChecked />
            </label>

          </div>
        </div>

        {/* Security */}
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex items-center gap-3 mb-5">
            <Shield className="text-red-500" size={28} />
            <h2 className="text-xl font-bold">
              Security
            </h2>
          </div>

          <div className="space-y-4">

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg">
              Change Password
            </button>

            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg">
              Enable Two-Factor Authentication
            </button>

          </div>
        </div>

        {/* Preferences */}
        <div className="bg-white rounded-xl shadow p-6 md:col-span-2">

          <div className="flex items-center gap-3 mb-5">
            <Globe className="text-indigo-600" size={28} />
            <h2 className="text-xl font-bold">
              Preferences
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="font-semibold">
                Language
              </label>

              <select className="w-full mt-2 border rounded-lg p-3">
                <option>English</option>
                <option>Hindi</option>
                <option>Marathi</option>
              </select>
            </div>

            <div>
              <label className="font-semibold">
                Theme
              </label>

              <div className="flex items-center gap-3 mt-3">
                <Moon className="text-gray-600" />
                <span>Light Mode</span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}