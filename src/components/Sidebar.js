export function Sidebar() {
  return `
    <div class="w-64 h-screen border-r flex flex-col">
      <div class="p-6">
        <h2 class="text-lg font-medium text-gray-800">Categories</h2>
        <div class="mt-4 space-y-1">
          <div class="sidebar-link">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span>All Emails</span>
          </div>
          <div class="mt-4">
            <div class="sidebar-link">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
              </svg>
              <span>Categorized</span>
            </div>
            <div class="ml-6 mt-1 space-y-1">
              <div class="sidebar-link text-sm">
                <span>Finance</span>
              </div>
              <div class="sidebar-link text-sm">
                <span>HR</span>
              </div>
              <div class="sidebar-link text-sm">
                <span>Technical</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="p-6 border-t">
        <h2 class="text-lg font-medium text-gray-800">Filters</h2>
        <div class="mt-4 space-y-1">
          <div class="sidebar-link">
            <span>Unread</span>
          </div>
          <div class="sidebar-link">
            <span>Flagged</span>
          </div>
          <div class="sidebar-link">
            <span>Follow Ups</span>
          </div>
        </div>
      </div>
    </div>
  `;
}