# Vercel Deployment Guide for Autowise Parts

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **Vercel CLI**: Install globally
   ```bash
   npm install -g vercel
   ```

## Deployment Steps

### Method 1: Deploy via Vercel CLI (Recommended)

1. **Navigate to project root**:
   ```bash
   cd "c:\Sait\Software Testing\Autowiseparts"
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy the project**:
   ```bash
   vercel
   ```
   
   During first deployment, Vercel will ask:
   - Set up and deploy? → **Yes**
   - Which scope? → Choose your account
   - Link to existing project? → **No**
   - What's your project's name? → **autowise-parts** (or your preferred name)
   - In which directory is your code located? → **./** (current directory)

4. **Production deployment**:
   ```bash
   vercel --prod
   ```

### Method 2: Deploy via GitHub Integration

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Configure for Vercel deployment"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect the configuration

## Configuration Details

### Project Structure for Vercel:
```
├── vercel.json          # Vercel configuration
├── package.json         # Root package.json for build
├── client/              # React frontend
│   ├── package.json
│   └── build/          # Built files (created during deployment)
└── server/              # Express.js backend
    ├── app.js          # Serverless function entry point
    └── package.json
```

### Environment Variables (if needed):
If you need to add environment variables:
1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add variables like:
   - `NODE_ENV` → `production`
   - Any API keys or database URLs

## Expected Deployment Process:

1. **Build Phase**: Vercel will:
   - Install dependencies in both client and server
   - Build the React app (`npm run build` in client folder)
   - Prepare serverless functions from Express routes

2. **Deploy Phase**: 
   - Static files served from CDN
   - API routes become serverless functions
   - Automatic HTTPS certificate

## Post-Deployment:

### Your app will be available at:
- **Production URL**: `https://your-project-name.vercel.app`
- **API endpoints**: `https://your-project-name.vercel.app/api/*`

### Testing the deployment:
1. Visit the main URL to see the React app
2. Test API endpoints: `https://your-project-name.vercel.app/api/products`
3. Test full user flow: registration, login, shopping

## Troubleshooting:

### Common Issues:

1. **Build Fails**:
   - Check that all dependencies are listed in package.json files
   - Ensure React app builds locally: `cd client && npm run build`

2. **API Routes Don't Work**:
   - Verify `vercel.json` routes configuration
   - Check that Express app exports properly

3. **CORS Issues**:
   - Update CORS configuration in server/app.js if needed
   - In production, frontend and backend are on same domain

### Logs and Debugging:
- View deployment logs in Vercel dashboard
- Use `vercel logs` command for runtime logs

## Development vs Production:

### Local Development:
- Frontend: `http://localhost:3000`
- Backend: `http://localhost:5000`
- API calls: `http://localhost:5000/api/*`

### Production (Vercel):
- Everything: `https://your-project.vercel.app`
- API calls: `https://your-project.vercel.app/api/*`

## Important Notes:

⚠️ **Limitations for this demo project**:
- No real database (data won't persist)
- Payment simulation only
- No user authentication security

🔄 **Automatic Deployments**:
- Every push to main branch will trigger new deployment
- Preview deployments for pull requests

📊 **Monitoring**:
- View analytics in Vercel dashboard
- Monitor function execution times
- Track deployment history
