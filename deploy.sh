#o "Starting deployment"  
# cd ..
git push origin :gh-pages

git add --all
git commit -m 'commit from ontario'
git subtree push --prefix dist/ origin gh-pages

echo "Deployed successfully."  
 
