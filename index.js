const getActivity = document.getElementById("get-activity")
const activityEl = document.getElementById("activity-el")
const title = document.getElementById("title")

getActivity.addEventListener("click", function() {
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(res => res.json())
        .then(data => {
            activityEl.textContent = data.activity
            title.textContent = "🤘🏼 AmusedBot 🤘🏼"
            document.body.classList.add("fun");
            activityEl.classList.add("font")
        })
})