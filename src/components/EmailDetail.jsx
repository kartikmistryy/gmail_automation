import { emails } from '../data/emails.js';

export function EmailDetail(emailId = null) {
  if (!emailId) {
    return `
      <div class="p-6 border-t">
        <div class="text-center text-gray-500">
          Select an email to view details
        </div>
      </div>
    `;
  }

  const email = emails.find(e => e.id === parseInt(emailId));
  
  return `
    <div class="p-6 border-t">
      <div class="flex flex-row justify-between items-center">
          <h2 class="text-lg font-medium text-gray-800 mb-6">Email Details</h2>
          <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Generate Response
          </button>
      </div>
      <div class="space-y-4">
        <div>
          <p class="text-sm text-gray-500">From</p>
          <p class="font-medium">${email.sender}</p>
        </div>
        <div>
          <p class="text-sm text-gray-500">Subject</p>
          <p class="font-medium">${email.subject}</p>
        </div>
        <div>
          <p class="text-sm text-gray-500">Content</p>
          <p class="mt-2">${email.content}</p>
        </div>
      </div>
    </div>
  `;
}
