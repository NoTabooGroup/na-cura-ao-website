const today = new Date().getDay();

const meetingStatus = document.getElementById("meeting-status");

if (meetingStatus) {
    if (today === 4) {
        meetingStatus.textContent = "Today's Meeting";
    } else {
        meetingStatus.textContent = "Next Meeting";
    }
}
