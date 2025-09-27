# CoqFather NFT Marketplace - Environment Setup Guide

## 🚀 Quick Start

The project is already configured with default values, but you'll need to update some environment variables for full functionality.

## 📋 Environment Variables

### Required Variables

1. **API Configuration** (Replace with your actual values):
   - `NEXT_PUBLIC_API_KEY`: Your API key for the NFT marketplace service
   - `NEXT_PUBLIC_API_ENDPOINT`: API endpoint for marketplace operations
   - `NEXT_PUBLIC_API_V2_ENDPOINT`: V2 API endpoint
   - `NEXT_PUBLIC_MARKETPLACE_ADDRESS`: Your marketplace contract address

2. **Solana Network**:
   - `NEXT_PUBLIC_NETWORK`: Set to "devnet" for development or "mainnet-beta" for production

### Optional Variables

- `JWT_SECRET`: Secret key for JWT token generation (if using custom auth)

## 🔧 Configuration Files

### 1. Environment Variables (.env.local)
The `.env.local` file has been created with default values. Update the following:

```bash
# Update these with your actual values
NEXT_PUBLIC_API_KEY=your_actual_api_key
NEXT_PUBLIC_API_ENDPOINT=https://your-api-endpoint.com
NEXT_PUBLIC_API_V2_ENDPOINT=https://your-api-v2-endpoint.com
NEXT_PUBLIC_MARKETPLACE_ADDRESS=your_marketplace_contract_address
```

### 2. Firebase Configuration
Firebase is already configured with working credentials in `src/config/config.ts`. The environment variables are commented out but available if you want to use your own Firebase project.

## 🛠️ Prerequisites

1. **Phantom Wallet**: Users need to install the Phantom wallet browser extension
2. **Node.js**: Version 18 or higher
3. **Yarn**: Package manager

## 🚀 Running the Project

1. Install dependencies:
   ```bash
   yarn install
   ```

2. Start development server:
   ```bash
   yarn dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔗 Key Features

- **Solana Integration**: Phantom wallet connection
- **Firebase Authentication**: User management and data storage
- **NFT Marketplace**: Buy, sell, and transfer NFTs
- **Responsive Design**: Mobile and desktop support

## 📁 Project Structure

- `src/app/`: Next.js app router pages
- `src/components/`: Reusable React components
- `src/lib/`: Utility functions and configurations
- `src/providers/`: React context providers
- `src/hooks/`: Custom React hooks

## 🐛 Troubleshooting

1. **Wallet Connection Issues**: Ensure Phantom wallet is installed and unlocked
2. **API Errors**: Check that your API keys and endpoints are correct
3. **Build Errors**: Run `yarn install` to ensure all dependencies are installed

## 📝 Next Steps

1. Update the API configuration in `.env.local`
2. Test wallet connection functionality
3. Configure your marketplace contract address
4. Set up your Firebase project (optional, defaults are provided)
