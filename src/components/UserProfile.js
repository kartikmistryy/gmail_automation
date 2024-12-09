import { getCurrentUser, signOutUser } from '../services/authService.js';

export function UserProfile() {
  const user = getCurrentUser();

  if (!user) {
    return `
      <button id="signInBtn" class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Sign In
      </button>
    `;
  }

  return `
    <div class="relative group">
      <div class="flex items-center space-x-3 cursor-pointer">
        <span class="text-sm font-medium">${user.displayName}</span>
        ${user.photoURL 
          ? `<img src="${user.photoURL}" alt="Profile" class="w-8 h-8 rounded-full">`
          : `<div class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <span class="text-sm font-medium">${user.displayName?.charAt(0) || 'U'}</span>
            </div>`
        }
      </div>
      <div class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 hidden group-hover:block">
        <button id="signOutBtn" class="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          Sign Out
        </button>
      </div>
    </div>
  `;
}