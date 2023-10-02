import { proxy } from "valtio";

export const Actions = {
  GET_STATE: "get-state",
  SET_STATE: "set-state",
};

export const state = proxy({
  isBulkDeleteEnabled: false,
  isChatExportEnabled: false,
  isPromptSavingEnabled: false,
});

export const updateState = (payload) => {
  chrome.runtime.sendMessage({ type: Actions.SET_STATE, payload });
};
