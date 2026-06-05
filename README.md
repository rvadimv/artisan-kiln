# Artisan Kiln

Interactive ceramic tile order form built with Next.js, React, TypeScript, Redux Toolkit, React Hook Form, Zod and Tailwind CSS.

The project recreates a stylized order-form mockup for a fictional ceramic tile shop. It combines a shopping cart, a tile design workspace and a checkout form in a responsive interface.

## Demo

Live demo:

```txt
https://artisan-kiln-rho.vercel.app/
```

## Features

- Responsive layout for desktop and mobile screens
- Shopping cart with editable square-foot quantities
- Add/remove quantity actions for cart items
- Automatic subtotal, shipping and grand total calculation
- Static tile catalog with preview and pattern images
- Interactive design palette with selected tile state
- 6 × 6 design grid for placing selected tile patterns
- Right-click cell clearing in the design grid
- Checkout form with customer, shipping and project fields
- Payment method selection:
  - Credit/Debit Card
  - PayPal
  - Apple Pay
  - Bank Transfer

- Conditional credit card fields
- Form validation with React Hook Form and Zod
- Decorative header, navigation, footer and page artwork based on the provided mockups

## Tech Stack

- **Next.js 16** with App Router
- **React 19**
- **TypeScript**
- **Redux Toolkit**
- **React Redux**
- **React Hook Form**
- **Zod**
- **Tailwind CSS**
- **ESLint**
- **Prettier**

## Architecture

The project follows a lightweight feature-oriented structure:

```txt
src/
├── app/                  # Next.js app entry, layout and providers
├── entities/             # Domain entities, tile data and tile UI
├── features/             # Cart, checkout and design-tool logic
├── shared/               # Shared store hooks and utility functions
├── views/                # Page-level composition
└── widgets/              # Larger UI blocks: cart, design workspace, nav, footer, decor
```

Main state slices:

- `cart` — cart items and square-foot quantity updates
- `designTool` — selected tile and design-grid cell state

## Design Source

The layout was implemented from provided PNG mockup images rather than from a Figma file or a complete design system.

Because of that, spacing, decorative assets and responsive behavior were recreated manually based on visual references. The implementation focuses on matching the supplied artwork as closely as possible while keeping the interface stable and usable across common screen sizes.

## Getting Started

### Requirements

- Node.js 22 or later is recommended
- pnpm

### Install dependencies

```bash
pnpm install
```

### Run the development server

```bash
pnpm dev
```

Open the app in the browser:

```txt
http://localhost:3000
```

### Production build

```bash
pnpm build
pnpm start
```

## Available Scripts

```bash
pnpm dev
```

Starts the local development server.

```bash
pnpm build
```

Creates a production build.

```bash
pnpm start
```

Runs the production build locally.

```bash
pnpm lint
```

Runs ESLint checks.

```bash
pnpm lint:fix
```

Runs ESLint and applies automatic fixes where possible.

```bash
pnpm format
```

Formats the project with Prettier.

```bash
pnpm format:check
```

Checks formatting without changing files.

## Implementation Notes

- Tile data is stored locally in the project.
- Cart totals are derived from Redux state using selectors and shared calculation utilities.
- The checkout form is front-end only; successful submission logs validated form data in the browser console.
- Credit card fields are validated only when `Credit/Debit Card` is selected.
- Decorative assets are rendered as non-interactive visual layers and do not block UI interactions.
- The layout prioritizes stable responsive behavior over exact pixel-perfect matching on every viewport width.
- Mobile layout uses a simplified one-column flow to avoid horizontal overflow and keep the checkout process usable.

## Validation Rules

The checkout form validates:

- customer name
- phone number
- email
- shipping address
- credit card number when card payment is selected
- expiration date in `MM/YY` format when card payment is selected
- CVC when card payment is selected

## Responsive Behavior

- Desktop view shows the shopping cart, design workspace and checkout form in a three-column layout.
- Mobile view focuses on a single-column checkout flow and embeds the cart inside the form flow.
- Navigation and decorative elements are adjusted or simplified on smaller screens to avoid horizontal overflow.
- Large decorative elements are treated as visual enhancement and may be reduced or hidden on smaller screens.

## Status

The project is implemented as a front-end test task.
