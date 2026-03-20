import time

from plyer import notification


def send_reminder() -> None:
    notification.notify(
        title="Stand Up Reminder",
        message="Time to stand up and stretch for a minute, so your bones don't get rusty and your blood doesn't get sticky.",
        app_name="Stand Reminder",
        timeout=10,
    )


if __name__ == "__main__":
    while True:
        send_reminder()
        time.sleep(60 * 30)