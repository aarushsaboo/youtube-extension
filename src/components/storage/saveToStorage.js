export function saveToStorage(data) {
  return new Promise((resolve) => {
    chrome.storage.sync.set(data, () => resolve())
  })
}
