document.addEventListener("DOMContentLoaded", function () {
  const keywordInput = document.getElementById("keywordInput")
  const addKeywordBtn = document.getElementById("addKeyword")
  const keywordList = document.getElementById("keywordList")
  const categoryFilter = document.getElementById("categoryFilter")
  const restrictAdultCheckbox = document.getElementById("restrictAdult")
  const saveFiltersBtn = document.getElementById("saveFilters")

  // Load existing filters
  chrome.storage.sync.get(
    ["blockedKeywords", "blockedCategory", "restrictAdult"],
    function (data) {
      // Populate existing filters
      if (data.blockedKeywords) {
        data.blockedKeywords.forEach((keyword) => {
          addKeywordToList(keyword)
        })
      }

      if (data.blockedCategory) {
        categoryFilter.value = data.blockedCategory
      }

      if (data.restrictAdult) {
        restrictAdultCheckbox.checked = data.restrictAdult
      }
    }
  )

  // Add keyword functionality
  addKeywordBtn.addEventListener("click", function () {
    const keyword = keywordInput.value.trim()
    if (keyword) {
      addKeywordToList(keyword)
      keywordInput.value = ""
    }
  })

  function addKeywordToList(keyword) {
    const keywordElement = document.createElement("div")
    keywordElement.textContent = keyword

    const removeBtn = document.createElement("button")
    removeBtn.textContent = "X"
    removeBtn.addEventListener("click", function () {
      keywordList.removeChild(keywordElement)
    })

    keywordElement.appendChild(removeBtn)
    keywordList.appendChild(keywordElement)
  }

  // Save filters with visual feedback
  saveFiltersBtn.addEventListener("click", function () {
    // Collect keywords
    const keywords = Array.from(keywordList.children).map((el) =>
      el.textContent.replace("X", "").trim()
    )

    // Save filters to storage
    chrome.storage.sync.set(
      {
        blockedKeywords: keywords,
        blockedCategory: categoryFilter.value,
        restrictAdult: restrictAdultCheckbox.checked,
      },
      function () {
        saveFiltersBtn.textContent = "Saved!"
        saveFiltersBtn.style.backgroundColor = "green"
        setTimeout(() => {
          saveFiltersBtn.textContent = "Save Filters"
          saveFiltersBtn.style.backgroundColor = ""
        }, 1500)
      }
    )
  })
})
