# My Agent

An AI agent built with the Google AI Development Kit (ADK) that provides intelligent assistance powered by Gemini 2.5 Flash.

## Project Overview

This project implements an LLM-powered agent called `hello_time_agent` using Google's AI Development Kit. The agent is designed to be a helpful assistant that can search the web and respond to user queries with relevant information.

## Features

- **LLM-Powered**: Uses Gemini 2.5 Flash model for intelligent responses
- **Tool Integration**: Integrated with Google Search capabilities for real-time information
- **TypeScript Support**: Fully typed with TypeScript for better development experience

## Tech Stack

- **Runtime**: Node.js with TypeScript
- **AI Framework**: [@google/adk](https://www.npmjs.com/package/@google/adk) v0.2.4
- **Schema Validation**: Zod
- **Development Tools**: @google/adk-devtools, TypeScript

## Project Structure

```
├── agent.ts          # Main agent implementation
├── agent.d.ts        # TypeScript type definitions
├── agent.js          # Compiled JavaScript
├── package.json      # Project dependencies
├── tsconfig.json     # TypeScript configuration
└── README.md         # This file
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables (if needed):
   ```bash
   cp .env.example .env
   ```

## Usage

The main agent can be imported and used from `agent.ts`:

```typescript
import { rootAgent } from './agent';

// Use the agent in your application
```

## Development

### Build

Compile TypeScript to JavaScript:
```bash
npx tsc
```

### Testing

Add tests by modifying the test script in `package.json`:
```bash
npm test
```

## Configuration

- **Model**: Gemini 2.5 Flash
- **Name**: hello_time_agent
- **Primary Tool**: Google Search

## Notes

There is a commented-out `getCurrentTime` tool that can be enabled for time-specific queries. Uncomment it in `agent.ts` if you need this functionality.

## License

ISC
