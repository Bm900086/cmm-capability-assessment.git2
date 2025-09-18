# Instructions for Deploying to GitHub Pages

## Automatic Deployment (Recommended)

This repository is configured for automatic deployment to GitHub Pages using GitHub Actions. Follow these steps:

### 1. Create a GitHub Repository
1. Go to [GitHub.com](https://github.com) and create a new repository
2. Name it something like `capability-assessment-website` or any name you prefer
3. Make it public (required for free GitHub Pages)
4. Don't initialize with README, .gitignore, or license (we already have these files)

### 2. Push Your Code
```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit your files
git commit -m "Initial commit: IT Capability Assessment Website"

# Add your GitHub repository as remote (replace with your actual repo URL)
git remote add origin https://github.com/yourusername/capability-assessment-website.git

# Push to GitHub
git push -u origin main
```

### 3. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. The deployment will start automatically

### 4. Access Your Website
Your website will be available at:
`https://yourusername.github.io/capability-assessment-website`

## Manual Deployment (Alternative)

If you prefer manual deployment:

1. Go to repository **Settings** → **Pages**
2. Under **Source**, select **Deploy from a branch**
3. Choose **main** branch and **/ (root)** folder
4. Click **Save**

## Important Notes

- It may take a few minutes for your site to be available after the first deployment
- Any future pushes to the main branch will automatically trigger a new deployment
- Your website will be publicly accessible
- GitHub Pages is free for public repositories

## Troubleshooting

If you encounter any issues:
1. Check the **Actions** tab in your repository for deployment status
2. Ensure your repository is public
3. Verify that Pages is enabled in repository settings
4. Check that the index.html file is in the root directory

## Custom Domain (Optional)

To use a custom domain:
1. Add a `CNAME` file to the root directory with your domain name
2. Configure your domain's DNS settings to point to GitHub Pages
3. Update the Pages settings in your repository to use the custom domain