import { createGenericSlice } from './createGenericSlice';

export interface AccountState {
  accountId: string;
  balance: number;
}

const initialAccountState: AccountState = {
  accountId: '',
  balance: 0,
};

const accountSlice = createGenericSlice('account', initialAccountState);

export const { set: setAccount, reset: resetAccount, updatePartial: updateAccount } = accountSlice.actions;
export default accountSlice.reducer;
