document.addEventListener("DOMContentLoaded", function () {
  const keywordInput = document.getElementById("keywordInput")
  const addKeywordBtn = document.getElementById("addKeyword")
  const keywordList = document.getElementById("keywordList")
  const categoryFilter = document.getElementById("categoryFilter")
  const restrictAdultCheckbox = document.getElementById("restrictAdult")
  const saveFiltersBtn = document.getElementById("saveFilters")
  const animationStyles = document.getElementsByName("filterAnimationStyle")

  // Load existing filters
  chrome.storage.sync.get(
    ["blockedKeywords", "blockedCategory", "restrictAdult", "animationStyle", "colorScheme"],
    function (data) {
      console.log("Loaded data from storage:", data) // <--- ADD THIS LINE
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

      if (data.animationStyle) {
        const selectedRadio = document.getElementById(data.animationStyle)
        if (selectedRadio) {
          selectedRadio.checked = true
          console.log("Selected animation style:", data.animationStyle)
        }
      }

      //new
      if (data.colorScheme) {
        const colorSchemeDropdown = document.getElementById("colorSchemeSelect")
        colorSchemeDropdown.value = data.colorScheme
      }

    }
  )

  // new
  const colorScheme = document.getElementById("colorSchemeSelect")
  colorScheme.addEventListener("click", function () {
      const selectedColorScheme = document.getElementById("colorSchemeSelect").value
      chrome.storage.sync.set({
        colorScheme: selectedColorScheme,
      }, function () {
        console.log("Saved")
        // Send message to all YouTube tabs to update color scheme
        chrome.tabs.query({ url: "*://*.youtube.com/*" }, function (tabs) {
          tabs.forEach(function (tab) {
            chrome.tabs.sendMessage(tab.id, {
              action: "changeColorScheme",
              colorScheme: selectedColorScheme,
            })
          })
        })
      })
  })

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

    const selectedAnimationStyle = Array.from(animationStyles).find(
      (radio) => radio.checked
    ).id
    console.log("Saving animation style:", selectedAnimationStyle)

    

    // Save filters to storage
    chrome.storage.sync.set(
      {
        blockedKeywords: keywords,
        blockedCategory: categoryFilter.value,
        restrictAdult: restrictAdultCheckbox.checked,
        animationStyle: selectedAnimationStyle,
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
