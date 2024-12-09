import './styles/main.css';
import { Sidebar } from './components/Sidebar';
import { Navbar } from './components/Navbar';
import { EmailList } from './components/EmailList';
import { EmailDetail } from './components/EmailDetail';
import { auth } from './config/firebase';
import { signInWithGoogle, signOutUser } from './services/authService';
import { emailStore } from './store/emailStore';

// Initial render
function renderApp() {
  const selectedEmailId = emailStore.getSelectedEmail(); // Get the selected email from the store
  document.querySelector('#app').innerHTML = `
    <div class="flex h-screen bg-white">
      ${Sidebar()}
      <div class="flex-1 flex flex-col overflow-hidden">
        ${Navbar()}
        <div class="flex-1 overflow-auto">
          ${EmailList()}
          ${EmailDetail(selectedEmailId)}  <!-- Pass the selected email ID to EmailDetail -->
        </div>
      </div>
    </div>
  `;

  // Add event listeners
  setupEventListeners();
}

function setupEventListeners() {
  // Email selection
  document.querySelectorAll('.email-row').forEach(row => {
    row.addEventListener('click', () => {
      const emailId = row.dataset.emailId;
      emailStore.setSelectedEmail(emailId);  // Update the selected email in the store
    });
  });

  // Auth listeners
  const signInBtn = document.querySelector('#signInBtn');
  if (signInBtn) {
    signInBtn.addEventListener('click', async () => {
      try {
        await signInWithGoogle();
        renderApp();
      } catch (error) {
        console.error('Sign in failed:', error);
      }
    });
  }

  const signOutBtn = document.querySelector('#signOutBtn');
  if (signOutBtn) {
    signOutBtn.addEventListener('click', async () => {
      try {
        await signOutUser();
        renderApp();
      } catch (error) {
        console.error('Sign out failed:', error);
      }
    });
  }
}

// Listen for auth state changes
auth.onAuthStateChanged(() => {
  renderApp();
});

// Initial render
renderApp();

// Subscribe to email store changes
emailStore.subscribe(() => {
  renderApp();  // Re-render the app whenever the email selection changes
});
