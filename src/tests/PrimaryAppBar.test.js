import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import PrimaryAppBar from '../components/PrimaryAppBar';
import { useAuth } from '../AuthProvider';

// Mock the useAuth hook
jest.mock('../AuthProvider', () => ({
  useAuth: jest.fn(),
}));

const mockUseAuth = useAuth;

describe('PrimaryAppBar component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders PrimaryAppBar with Login button when not authenticated', () => {
    mockUseAuth.mockReturnValue({ isAuthenticated: false });

    render(
      <BrowserRouter>
        <PrimaryAppBar />
      </BrowserRouter>
    );

    expect(screen.getByText('Forum')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.queryByText('Create Comment')).not.toBeInTheDocument();
  });

  test('renders PrimaryAppBar with Create Comment button when authenticated', () => {
    mockUseAuth.mockReturnValue({ isAuthenticated: true });

    render(
      <BrowserRouter>
        <PrimaryAppBar onCreateCommentClick={jest.fn()} />
      </BrowserRouter>
    );

    expect(screen.getByText('Forum')).toBeInTheDocument();
    expect(screen.getByText('Create Comment')).toBeInTheDocument();
    expect(screen.queryByText('Login')).not.toBeInTheDocument();
  });

  test('calls onCreateCommentClick when Create Comment button is clicked', () => {
    mockUseAuth.mockReturnValue({ isAuthenticated: true });
    const onCreateCommentClick = jest.fn();

    render(
      <BrowserRouter>
        <PrimaryAppBar onCreateCommentClick={onCreateCommentClick} />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText('Create Comment'));
    expect(onCreateCommentClick).toHaveBeenCalledTimes(1);
  });
});
