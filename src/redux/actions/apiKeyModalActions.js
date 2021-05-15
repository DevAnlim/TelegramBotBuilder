import {
  CLOSE_APIKEY_MODAL,
  OPEN_APIKEY_MODAL,
} from '../types/apiKeyModalTypes';

export const openApiKeyModal = () => ({
  type: OPEN_APIKEY_MODAL,
});

export const closeApiKeyModal = () => ({
  type: CLOSE_APIKEY_MODAL,
});
