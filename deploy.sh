#!/bin/bash

set -e

# CONFIG
BRANCH="nextjs"
BUILD_DIR="out"
TIMESTAMP=$(date +"%Y%m%d-%H%M%S")
ARCHIVE="site-$TIMESTAMP.tar.gz"
REMOTE_USER="zeri"
REMOTE_HOST="login.itd.umich.edu"
REMOTE_BASE="/afs/umich.edu/group/u/umichsynbio/Public"
REMOTE_RELEASE_DIR="$REMOTE_BASE/releases/$TIMESTAMP"
REMOTE_HTML_LINK="$REMOTE_BASE/html"

# Build and compress
git checkout $BRANCH
npm run build
tar -czf $ARCHIVE -C $BUILD_DIR .

# Upload to server
scp $ARCHIVE $REMOTE_USER@$REMOTE_HOST:~

# Deploy on remote server
ssh $REMOTE_USER@$REMOTE_HOST << EOF
  set -e
  mkdir -p "$REMOTE_RELEASE_DIR"
  tar -xzf "$ARCHIVE" -C "$REMOTE_RELEASE_DIR"
  rm "$ARCHIVE"

  # Update the live html symlink
  ln -sfn "$REMOTE_RELEASE_DIR" "$REMOTE_HTML_LINK"

  # Keep only the 5 most recent releases
  cd "$REMOTE_BASE/releases"
  ls -1t | tail -n +6 | xargs -I {} rm -rf {}
EOF

rm "$ARCHIVE"

echo "✅ Site deployed! Live at:"
echo "https://websites.umich.edu/~umichsynbio/"
