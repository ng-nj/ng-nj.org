#o "Starting deployment"  
echo "Target: gh-pages branch"

#TEMP_DIRECTORY="/tmp/__temp_static_content"  
#CURRENT_COMMIT=`git rev-parse HEAD`  
ORIGIN_URL=`git config --get remote.origin.url`  
ORIGIN_URL_WITH_CREDENTIALS=${ORIGIN_URL/\/\/github.com/\/\/$GITHUB_TOKEN@github.com}

echo "Compiling new static content"  
#mkdir $TEMP_DIRECTORY || exit 1  
#harp compile . $TEMP_DIRECTORY || exit 1  
#cp .gitignore $TEMP_DIRECTORY || exit 1
#gulp

echo "Checking out gh-pages branch"  
# git checkout -B gh-pages || exit 1

echo "Removing old static content"  
# git rm -rf . || exit 1

echo "Copying newly generated static content"  
# cp -r $TEMP_DIRECTORY/* . || exit 1  
#cp $TEMP_DIRECTORY/.gitignore . || exit 1

echo "Pushing new content to $ORIGIN_URL"  
git config --global user.name "JimTheMan" || exit 1  
git config --global user.email "mrdotjim@gmail.com" || exit 1

# git add -A . || exit 1  
# git commit --allow-empty -m "Regenerated static content for $CURRENT_COMMIT" || exit 1  
# git push --quiet "$ORIGIN_URL_WITH_CREDENTIALS" gh-pages > /dev/null 2>&1

echo "Cleaning up temp files"  
# rm -Rf $TEMP_DIRECTORY

echo "Deployed successfully."  
# exit 0

# git push origin :gh-pages

git push origin :gh-pages
git commit -am 'commit from over there.'
git subtree push --prefix dist/ $GH_REF gh-pages
  
