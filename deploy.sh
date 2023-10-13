#!/bin/bash

# Clone the repository
git clone git@github.com:eliteAcres/hotelGuide.git

# Navigate into the repository
cd repository

# Pull the latest changes
git pull origin main

# Build your project (if necessary)
# npm install
# npm run build

# Deploy to GoDaddy
scp -r * sempornaseaviewhotel@sempornaseaviewhotel.com:/path/to/destination/
