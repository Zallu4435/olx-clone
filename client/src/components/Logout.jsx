// LogoutPopup.js
const LogoutPopup = ({ confirmLogout, closePopup }) => {
    return (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-4 rounded shadow-lg w-80">
          <h2 className="text-lg font-semibold mb-4">Confirm Logout</h2>
          <p className="text-gray-600 mb-4">Are you sure you want to log out?</p>
          <div className="flex justify-end">
            <button
              className="px-4 py-2 mr-2 text-sm font-medium text-gray-700 bg-gray-200 rounded"
              onClick={closePopup}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded"
              onClick={confirmLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default LogoutPopup;
  