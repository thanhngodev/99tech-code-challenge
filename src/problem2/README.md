## Fancy Swap Form

### Tech Stack
- Vite + React + TypeScript

### Features
- Real-time token swap using live price data
- Automatic exchange calculation
- Input validation & loading state
- Token normalization from real-world API

### Architecture
- `services`: API fetching & normalization
- `hooks`: business logic (`useSwap`)
- `utils`: pure calculation functions
- `components`: reusable UI components

### Trade-offs
- No backend, submission is mocked
- Prices fetched once on mount

### Improvements
- Slippage handling
- Fee estimation
- Token icon dropdown
