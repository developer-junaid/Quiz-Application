export const register = () => {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("/sw.js").then(
        function (registration) {
          // Registration was successful
          console.log(
            "ServiceWorker registration successful with scope: ",
            registration.scope
          )

          // Caching all API Data
          let difficulties = ["easy", "medium", "hard"]
          let amounts = [5, 10, 15]
          let categories = [9, 11, 17, 18, 19, 21]

          // loop
          categories.map((eachCategory) => {
            difficulties.map((eachDifficulty) => {
              amounts.map(async (eachAmount) => {
                await fetch(
                  `https://opentdb.com/api.php?amount=${eachAmount}&category=${eachCategory}&difficulty=${eachDifficulty}&type=multiple`
                )
                  .then((success) => {
                    console.log("success")
                  })
                  .catch((err) => {
                    console.log("error")
                  })
              })
            })
          })

          //
        },
        function (err) {
          // registration failed :(
          console.log("ServiceWorker registration failed: ", err)
        }
      )
    })
  }
}
