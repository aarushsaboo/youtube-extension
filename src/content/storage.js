export function getFromStorage(keys) {
  return new Promise((resolve) => {
    chrome.storage.sync.get(keys, (result) => resolve(result))
  })
}

export function saveToStorage(data) {
  return new Promise((resolve) => {
    chrome.storage.sync.set(data, () => resolve())
  })
}
