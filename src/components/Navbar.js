import { UserProfile } from './UserProfile.js';

export function Navbar() {
  return `
    <div class="h-16 border-b flex items-center justify-between px-6">
      <div class="flex items-center flex-1">
        <input
          type="text"
          placeholder="Search emails..."
          class="w-96 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div class="flex items-center space-x-4">
        <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Compose
        </button>
        ${UserProfile()}
      </div>
    </div>
  `;
}