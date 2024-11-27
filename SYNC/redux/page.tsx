'use client'; // Required for client-side components

import { useAppDispatch, useAppSelector } from '../../hooks';
import { setUser, updateUser, resetUser } from '../../store/slices/userSlice';

export default function UserPage() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  const handleSetUser = () => {
    dispatch(setUser({ id: '1', name: 'John Doe', email: 'john@example.com' }));
  };

  const handleUpdateUser = () => {
    dispatch(updateUser({ name: 'Jane Doe' }));
  };

  const handleResetUser = () => {
    dispatch(resetUser());
  };

  return (
    <div>
      <h1>User Page</h1>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button onClick={handleSetUser}>Set User</button>
      <button onClick={handleUpdateUser}>Update User</button>
      <button onClick={handleResetUser}>Reset User</button>
    </div>
  );
}
