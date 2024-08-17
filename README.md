

# URL Shortener Service Frontend

This repository contains the frontend for the URL Shortener Service, built with Next.js. The application allows users to create short URLs from long URLs, manage them, and view statistics.

## Table of Contents

- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Setup](#setup)
- [Usage](#usage)
- [Features](#features)
- [License](#license)

## Technologies

- **Framework**: [Next.js](https://nextjs.org/)
- **Date Manipulation**: [dayjs](https://day.js.org/)
- **Authentication**: [next-auth](https://next-auth.js.org/)
- **Forms**: [react-hook-form](https://react-hook-form.com/)
- **Icons**: [react-icons](https://react-icons.github.io/react-icons/)
- **Validation**: [zod](https://zod.dev/)
- **UI Components**: [Material UI](https://mui.com/)
- **Data Fetching**: [React Query](https://tanstack.com/query/latest)

## Project Structure

```plaintext
public/                   # Public assets (images, etc.)
src/
├── actions/              # Generic server actions
├── app/                  # Next.js app directory with route definitions
├── components/           # Shared components
│   ├── layout/           # Layout components
│   └── ui/               # UI components
├── config/               # Configuration variables
├── constants/            # Generic constants
├── enums/                # Enums used throughout the project
├── features/             # Feature-specific code
│   ├── auth/             # Authentication-related code
│   │   ├── api/          # API calls related to authentication
│   │   ├── components/   # Authentication-related components
│   │   └── hooks/        # Hooks related to authentication
│   ├── dashboard/        # Dashboard feature
│   │   ├── api/          # API calls related to dashboard
│   │   ├── components/   # Dashboard-related components
│   │   └── hooks/        # Hooks related to dashboard
│   ├── links/            # Link management feature
│   │   ├── api/          # API calls related to links
│   │   ├── components/   # Link-related components
│   │   └── hooks/        # Hooks related to links
│   ├── settings/         # User settings feature
│   │   ├── api/          # API calls related to settings
│   │   ├── components/   # Settings-related components
│   │   └── hooks/        # Hooks related to settings
├── hooks/                # Shared hooks
├── providers/            # Context providers
├── types/                # TypeScript types
└── utils/                # Utility functions
```

## Setup

To set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/camilosanchezdev/url-shortener-service.git
   cd url-shortener-frontend
   ```

2. Install the dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory and add the necessary environment variables:
   ```env
    NEXT_PUBLIC_API_URL=http://localhost:5000
    NEXTAUTH_SECRET=bmVzdC1ib2lsZXJwbGF0ZQ==
    NEXTAUTH_URL=http://localhost:3000
    NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

- Create an account or log in to start creating short URLs.
- Manage your links and view statistics from the dashboard.
- Customize your settings to suit your preferences.

## Features

- **URL Shortening**: Convert long URLs into short, easily shareable links.
- **User Authentication**: Secure user authentication with NextAuth.
- **Dashboard**: View and manage your created links and track their performance.
- **Settings**: Update user preferences and settings.
- **Responsive Design**: Works on all screen sizes.

## License

This project is licensed under the MIT License.
