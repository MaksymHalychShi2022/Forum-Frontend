import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {MemoryRouter} from 'react-router-dom';
import OptionMenu from '../components/OptionMenu';
import {useAuth} from '../AuthProvider';

// Mock the useAuth hook
jest.mock('../AuthProvider', () => ({
  useAuth: jest.fn(),
}));

// Mock the useNavigate hook
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

const mockUseAuth = useAuth;

describe('OptionMenu component', () => {
  beforeEach(() => {
    mockUseAuth.mockReturnValue({
      logout: jest.fn(),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders OptionMenu component', () => {
    render(
      <MemoryRouter>
        <OptionMenu/>
      </MemoryRouter>
    );

    // Check if the MoreVertIcon button is rendered
    expect(screen.getByRole('button', {name: /account settings/i})).toBeInTheDocument();
  });

  test('opens and closes the menu', () => {
    render(
      <MemoryRouter>
        <OptionMenu/>
      </MemoryRouter>
    );
    // Closed the menu
    expect(screen.queryByText('My Profile')).not.toBeInTheDocument();

    // Open the menu
    fireEvent.click(screen.getByRole('button', {name: /account settings/i}));
    expect(screen.getByText('My Profile')).toBeInTheDocument();

  });

  test('calls logout and navigates to login on logout click', () => {
    const mockLogout = jest.fn();
    mockUseAuth.mockReturnValue({
      logout: mockLogout,
    });

    render(
      <MemoryRouter>
        <OptionMenu/>
      </MemoryRouter>
    );

    // Open the menu
    fireEvent.click(screen.getByRole('button', {name: /account settings/i}));

    // Click logout
    fireEvent.click(screen.getByText('Logout'));

    expect(mockLogout).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/login');
  });
});
