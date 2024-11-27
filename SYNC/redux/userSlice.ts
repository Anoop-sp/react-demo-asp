import { createGenericSlice } from './createGenericSlice';

export interface UserState {
  id: string;
  name: string;
  email: string;
}

const initialUserState: UserState = {
  id: '',
  name: '',
  email: '',
};

const userSlice = createGenericSlice('user', initialUserState);

export const { set: setUser, reset: resetUser, updatePartial: updateUser } = userSlice.actions;
export default userSlice.reducer;
