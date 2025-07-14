#!/bin/bash

# Create videos directory in production build
mkdir -p dist/public/videos

# Copy all videos from client/public/videos to dist/public/videos
cp -r client/public/videos/* dist/public/videos/

echo "Videos copied to production build successfully!"