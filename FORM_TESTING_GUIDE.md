# Form Submission Testing Guide

## ✅ Backend API Status
The backend API at `http://localhost:3000/api/leads` is **working correctly**. Test submissions are being successfully saved to the database.

## 📝 What Was Fixed

1. **Enhanced API URL Configuration**: The form now properly determines the API URL based on the environment:
   - **Development**: Uses `http://localhost:3000`
   - **Production**: Uses `https://platform-lovat-ten.vercel.app`
   - Supports custom URL via `VITE_API_BASE_URL` environment variable

2. **Improved Error Handling**: Added better error messages and debugging information
3. **CORS Configuration**: Added proper headers for cross-origin requests

## 🧪 How to Test Locally

### Option 1: Test with the Main Application
1. Make sure the backend is running on port 3000:
   ```bash
   cd /Users/guyschneider/code/scrape
   npm run dev
   ```

2. In a new terminal, start the frontend on port 8080:
   ```bash
   cd /Users/guyschneider/code/cash-my-home-fast-main
   npm run dev
   ```

3. Open `http://localhost:8080` in your browser
4. Fill out the contact form and submit
5. Check the browser console for detailed logs
6. Verify the lead appears at `http://localhost:3000/leads`

### Option 2: Test with the Standalone Test Page
1. Open the test file directly in your browser:
   ```bash
   open /Users/guyschneider/code/cash-my-home-fast-main/test-form-submission.html
   ```

2. Fill out the form and submit
3. You should see a success message with the lead ID

## 🚀 Production Configuration

### For Vercel Deployment

1. **Set Environment Variables in Vercel**:
   - Go to your Vercel project settings
   - Add environment variable (optional):
     ```
     VITE_API_BASE_URL=https://platform-lovat-ten.vercel.app
     ```
   - If not set, the app will automatically use the correct production URL

2. **Current Production URLs**:
   - Frontend: `https://cash-my-home-fast-main.vercel.app` (or your custom domain)
   - Backend API: `https://platform-lovat-ten.vercel.app`

## 🔍 Troubleshooting

### If the form doesn't show a confirmation message:

1. **Check Browser Console**: Open Developer Tools (F12) and look for errors
2. **Verify Backend is Running**: The backend must be running on port 3000
3. **Check Network Tab**: Look for the POST request to `/api/leads`
4. **CORS Issues**: The backend is configured to accept requests from localhost:8080

### Common Issues and Solutions:

| Issue | Solution |
|-------|----------|
| "Failed to fetch" error | Backend server is not running. Start it with `npm run dev` in the scrape directory |
| No confirmation message | Check browser console for errors. The success message should appear for 5 seconds |
| Lead not appearing in table | Refresh the leads page at `http://localhost:3000/leads` |
| CORS error | Make sure you're accessing the frontend via `http://localhost:8080`, not `file://` |

## 📊 Verifying Submissions

To check if leads are being saved:

1. **Via UI**: Go to `http://localhost:3000/leads` and click "Refresh"
2. **Via API**: 
   ```bash
   curl http://localhost:3000/api/leads?limit=10
   ```

## 🎯 Expected Behavior

When a form is submitted successfully:
1. The submit button shows "Processing..." with a spinner
2. After submission, it shows "✅ Submitted Successfully!" for 5 seconds
3. The form fields are cleared
4. The lead appears in the leads table at `/leads`

## 📝 Test Data

Use this test data for quick testing:
- First Name: Test
- Last Name: User
- Email: test@example.com
- Address: 123 Test Street, City, State 12345
- Property Type: Single Family Home
- Timeline: ASAP

## 🐛 Debug Mode

To see detailed logging:
1. Open browser Developer Tools (F12)
2. Go to Console tab
3. Submit the form
4. You'll see detailed logs including:
   - Form data being sent
   - API URL being used
   - Response status and data
   - Any errors with full stack traces
