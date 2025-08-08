# Code of Conduct: React Project Coding Standards

This document outlines the mandatory coding standards and best practices for our React project. All team members must adhere to these standards to ensure code quality, maintainability, and consistency across the codebase.

## Technology Stack

Our project is built with the following technologies:

- React
- Tailwind CSS
- React Router DOM
- Axios for API calls
- Vite as the build tool
- ESLint for code linting

## Directory Structure

The following directory structure must be strictly followed:

```
src/
├── api/                  # API-related code and services
├── assets/               # Static assets like images, icons, and fonts
├── components/           # Reusable UI components (grouped by module)
│   ├── ui/               # Base UI components
│   ├── [module-name]/    # Module-specific components
├── layout/               # Layout components and templates
├── pages/                # Page components corresponding to routes
├── utils/                # Utility functions
├── types/                # TypeScript type definitions (if using TypeScript)
│   └── [module-name].d.ts # Module-specific types
├── App.jsx               # Main application component
└── main.jsx              # Application entry point
```

## Coding Standards

### 1. Component Structure

- **Use Functional Components**: Always use functional components with hooks.
- **Single Responsibility**: Each component should have a single, well-defined purpose.
- **Component Composition**: Build complex UIs by composing smaller, simpler components.
- **Module Organization**: Group components by module with consistent file structure.

### 2. JavaScript/TypeScript Usage

- **Use Modern JavaScript**: Utilize ES6+ features and syntax.
- **Consistent Typing**: If using TypeScript, maintain consistent typing across the codebase.
- **Avoid Any**: Minimize use of `any` type in TypeScript.
- **Type Organization**: Place module-specific types in dedicated files under `/types` directory.

### 3. State Management

- **React Hooks**: Use React hooks for state management (useState, useReducer, useContext).
- **Context API**: Use for global state management when appropriate.
- **Local State**: Use `useState` for component-specific state.
- **Prop Drilling**: Avoid excessive prop drilling; use context or composition instead.

### 4. API Integration

- **Axios**: Use Axios for all API calls.
- **API Organization**: Centralize API calls in the `/api` directory.
- **Error Handling**: Implement consistent error handling for all API calls.
- **Loading States**: Handle loading states consistently across the application.

### 5. Naming Conventions

- **Components**: Use PascalCase for component names (e.g., `UserProfile`).
- **Files**: Use PascalCase for component files (e.g., `UserProfile/index.jsx`).
- **Functions**: Use camelCase for function names (e.g., `fetchUserData`).
- **Variables**: Use camelCase for variable names (e.g., `userData`).
- **Constants**: Use UPPER_SNAKE_CASE for constants (e.g., `MAX_RETRY_COUNT`).
- **Boolean Variables**: Prefix with `is`, `has`, or `should` (e.g., `isLoading`).
- **Event Handlers**: Prefix with `handle` (e.g., `handleSubmit`).

### 6. Tailwind CSS Usage

- **Direct Utility Classes**: Apply Tailwind utility classes directly in JSX.
- **Component Consistency**: Maintain consistent styling patterns across similar components.
- **Responsive Design**: Use Tailwind's responsive prefixes (sm:, md:, lg:, xl:) consistently.
- **Custom Classes**: Define custom classes in the appropriate CSS files when needed.

### 7. Form Handling

- **Controlled Components**: Use controlled components for form inputs.
- **Form Validation**: Implement consistent form validation patterns.
- **Error Messages**: Display form errors clearly and consistently.

### 8. Routing

- **React Router**: Use React Router for all routing needs.
- **Route Organization**: Organize routes logically and consistently.
- **Route Guards**: Implement route guards for protected routes.

### 9. Documentation

- **Component Documentation**: Document complex components with JSDoc comments.
- **Function Documentation**: Add JSDoc comments for non-trivial functions.
- **Code Comments**: Use comments sparingly and only when necessary to explain complex logic.

### 10. Code Quality

- **DRY Principle**: Don't Repeat Yourself - extract reusable logic.
- **Single Responsibility**: Functions should do one thing well.
- **Pure Functions**: Prefer pure functions where possible.
- **Error Handling**: Implement proper error handling throughout the application.
- **Accessibility**: Ensure components meet accessibility standards.

### 11. Git Workflow

- **Atomic Commits**: Each commit should represent a single logical change.
- **Conventional Commits**: Follow the [Conventional Commits specification](https://www.conventionalcommits.org/) for all commit messages:
  
  ```
  <type>[optional scope]: <description>
  
  [optional body]
  
  [optional footer(s)]
  ```
  
  - **Types**:
    - `feat`: A new feature (correlates with MINOR in Semantic Versioning)
    - `fix`: A bug fix (correlates with PATCH in Semantic Versioning)
    - `docs`: Documentation only changes
    - `style`: Changes that do not affect the meaning of the code (white-space, formatting, etc.)
    - `refactor`: A code change that neither fixes a bug nor adds a feature
    - `perf`: A code change that improves performance
    - `test`: Adding missing tests or correcting existing tests
    - `build`: Changes that affect the build system or external dependencies
    - `ci`: Changes to CI configuration files and scripts
    - `chore`: Other changes that don't modify src or test files
  
  - **Breaking Changes**: Indicate breaking changes with `!` after the type/scope or with a `BREAKING CHANGE:` footer
    - Example: `feat!: remove support for legacy browsers`
    - Example: `feat(api): add new endpoint BREAKING CHANGE: requires new authentication method`
  
  - **Scope**: Optional field specifying the section of the codebase affected
    - Example: `feat(auth): add login functionality`
    - Example: `fix(dashboard): correct data display issue`

- **Branch Strategy**: Follow the project's branching strategy.
- **Pull Requests**: Submit PRs for code review before merging.

### 12. Performance Considerations

- **Code Splitting**: Utilize code splitting for better performance.
- **Memoization**: Use React.memo, useMemo, and useCallback appropriately.
- **Lazy Loading**: Implement lazy loading for routes and large components.
- **Bundle Size**: Monitor and optimize bundle size.

## Enforcement

These standards will be enforced through:

1. Code reviews
2. Automated linting with ESLint
3. Regular codebase audits
4. Team discussions and feedback

Adherence to these standards is mandatory for all team members. Exceptions must be discussed and approved by the team lead.
