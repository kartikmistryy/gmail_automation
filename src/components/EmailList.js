import { emails } from '../data/emails.js';

export function EmailList() {
  return `
    <div class="p-6">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-lg font-medium text-gray-800">Email List</h2>
        <select class="border rounded-lg px-3 py-2">
          <option>Sort by Date</option>
          <option>Sort by Priority</option>
          <option>Sort by Sender</option>
        </select>
      </div>
      
      <div class="border rounded-lg overflow-hidden">
        <table class="w-full">
          <thead class="bg-gray-50 border-b">
            <tr>
              <th class="text-left px-6 py-3 text-sm font-medium text-gray-500">Sender</th>
              <th class="text-left px-6 py-3 text-sm font-medium text-gray-500">Subject</th>
              <th class="text-left px-6 py-3 text-sm font-medium text-gray-500">Date</th>
              <th class="text-left px-6 py-3 text-sm font-medium text-gray-500">Priority</th>
              <th class="text-left px-6 py-3 text-sm font-medium text-gray-500">Sentiment</th>
            </tr>
          </thead>
          <tbody>
            ${emails.map(email => `
              <tr class="email-row hover:bg-gray-50" data-email-id="${email.id}">
                <td class="px-6 py-4 text-gray-700">${email.sender}</td>
                <td class="px-6 py-4 text-gray-700">${email.subject}</td>
                <td class="px-6 py-4 text-gray-700">${email.date}</td>
                <td class="px-6 py-4">
                  <span class="px-2 py-1 text-xs rounded-full ${
                    email.priority === 'High' ? 'bg-red-100 text-red-800' :
                    email.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }">
                    ${email.priority}
                  </span>
                </td>
                <td class="px-6 py-4">
                  <span class="px-2 py-1 text-xs rounded-full ${
                    email.sentiment === 'Positive' ? 'bg-green-100 text-green-800' :
                    email.sentiment === 'Negative' ? 'bg-red-100 text-red-800' :
                    email.sentiment === 'Urgent' ? 'bg-purple-100 text-purple-800' :
                    'bg-blue-100 text-blue-800'
                  }">
                    ${email.sentiment}
                  </span>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}
