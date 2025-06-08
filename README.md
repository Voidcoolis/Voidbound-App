# Voidbound

Voidbound is a modern social media mobile app built with [Expo](https://expo.dev), [React Native](https://reactnative.dev/), [Convex](https://convex.dev/) for backend/database, and [Clerk](https://clerk.com/) for authentication. Users can post images, follow others, like, comment, bookmark posts, and receive notifications.

## Features

- Google authentication via Clerk
- Create, view, and delete image posts
- Like, comment, and bookmark posts
- Follow/unfollow users
- Real-time notifications for likes, comments, and follows
- Profile editing and user stats
- Responsive, modern UI with custom fonts and icons
- Expo Image for fast, cached image loading

## Project Structure

```
.
├── app/                # App entry and route-based screens
│   ├── (auth)/         # Authentication screens
│   ├── (tabs)/         # Main tab screens (feed, bookmarks, create, notifications, profile)
│   └── user/           # User profile screens
├── assets/             # Fonts and images
├── components/         # Reusable UI components
├── constants/          # Theme and mock data
├── convex/             # Convex backend functions and schema
├── providers/          # Context providers (Clerk, Convex)
├── styles/             # StyleSheets for screens/components
├── cache.ts            # Secure token cache for Clerk
├── app.json            # Expo app config
└── ...
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Convex CLI](https://docs.convex.dev/installation)
- [Clerk account](https://clerk.com/) for authentication

### Installation

1. **Clone the repository:**

   ```sh
   git clone <your-repo-url>
   cd Voidbound
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env.local` file in the root directory with the following (replace with your actual keys):

   ```
   EXPO_PUBLIC_CONVEX_URL=<your-convex-url>
   EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
   CLERK_WEBHOOK_SECRET=<your-clerk-webhook-secret>
   ```

4. **Start the Convex dev server:**

   ```sh
   npx convex dev
   ```

5. **Run the app:**

   ```sh
   npx expo start
   ```

   Use the Expo Go app or an emulator to preview.

## Scripts

- `npm start` — Start Expo development server
- `npm run android` — Run on Android emulator/device
- `npm run ios` — Run on iOS simulator/device
- `npm run web` — Run in web browser
- `npm run lint` — Lint the codebase

## Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [Convex Documentation](https://docs.convex.dev/)
- [Clerk Documentation](https://clerk.com/docs)

## License

MIT

---

> Built with ❤️ using Expo, Convex, and Clerk.
