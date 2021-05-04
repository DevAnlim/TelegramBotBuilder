import { CHANGE_ORDER_DASHBOARD } from '../types/dashboard';

export const changeOrder = payload => ({
  type: CHANGE_ORDER_DASHBOARD,
  payload,
});
