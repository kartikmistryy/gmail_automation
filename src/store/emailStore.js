let selectedEmailId = null;
const listeners = new Set();

export const emailStore = {
  setSelectedEmail(id) {
    selectedEmailId = id;
    this.notify();
  },
  
  getSelectedEmail() {
    return selectedEmailId;
  },
  
  subscribe(listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
  
  notify() {
    listeners.forEach(listener => listener());
  }
};
