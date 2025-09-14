# Google Places API Setup Guide

This guide will help you set up Google Places API address autocomplete functionality for your website.

## Prerequisites

1. A Google Cloud Platform account
2. A project in Google Cloud Console
3. Billing enabled on your project (required for Google Maps APIs)

## Step 1: Enable Google Places API

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project or create a new one
3. Navigate to "APIs & Services" > "Library"
4. Search for "Places API"
5. Click on "Places API" and then "Enable"

## Step 2: Create API Key

1. In the Google Cloud Console, go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "API Key"
3. Copy the generated API key
4. (Recommended) Click "Restrict Key" to add restrictions:
   - Under "Application restrictions", select "HTTP referrers (web sites)"
   - Add your domain(s) (e.g., `https://yourdomain.com/*`)
   - Under "API restrictions", select "Restrict key" and choose "Places API"

## Step 3: Configure Environment Variables

1. Copy the `.env.example` file to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit the `.env` file and replace `your_google_places_api_key_here` with your actual API key:
   ```
   VITE_GOOGLE_PLACES_API_KEY=AIzaSyBvOkBwGyWCCkTRyfNE7wZVfgsqfS-ZYXM
   ```

3. Make sure your `.env` file is listed in `.gitignore` (it already is!)

## Step 4: Test the Implementation

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to your website and try typing in the address fields
3. You should see Google Places autocomplete suggestions appear

## Features Included

- **US Address Restriction**: Autocomplete is restricted to US addresses only
- **Comprehensive Address Data**: Returns full address components, coordinates, and place details
- **Error Handling**: Graceful fallback to regular input if API fails to load
- **Loading States**: Shows loading indicator while Google Maps API loads
- **Type Safety**: Full TypeScript support with proper Google Maps types

## Troubleshooting

### Common Issues

1. **"Google Places API key not found" error**
   - Make sure your `.env` file exists and contains `VITE_GOOGLE_PLACES_API_KEY`
   - Restart your development server after adding the environment variable

2. **Autocomplete not working**
   - Check browser console for API errors
   - Verify your API key has Places API enabled
   - Make sure billing is enabled on your Google Cloud project

3. **"This API project is not authorized to use this API" error**
   - Enable the Places API in Google Cloud Console
   - Wait a few minutes for the changes to propagate

4. **Quota exceeded errors**
   - Check your Google Cloud Console for API usage limits
   - Consider implementing request caching or debouncing for production

### API Costs

Google Places API has usage-based pricing:
- Autocomplete requests: $2.83 per 1,000 requests
- Place Details requests: $17 per 1,000 requests

For development and low-traffic sites, you'll likely stay within the free tier limits.

## Production Considerations

1. **API Key Security**: Never expose your API key in client-side code for production. Consider using a backend proxy.
2. **Request Limits**: Implement debouncing to reduce API calls
3. **Caching**: Cache frequently requested places to reduce costs
4. **Error Handling**: Implement robust error handling and fallbacks
5. **Monitoring**: Set up alerts for API usage and errors in Google Cloud Console

## Customization Options

The `AddressAutocomplete` component supports several customization options:

```typescript
<AddressAutocomplete
  id="address"
  placeholder="Enter your address"
  value={address}
  onChange={(value, placeDetails) => {
    setAddress(value);
    // Access additional place data
    console.log(placeDetails?.geometry?.location);
  }}
  className="custom-styling"
  required={true}
/>
```

You can modify the component in `/src/components/ui/address-autocomplete.tsx` to:
- Change country restrictions
- Add different place types (establishment, geocode, etc.)
- Customize the returned fields
- Add additional validation or formatting
