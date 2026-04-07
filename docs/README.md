---
home: true
heroImage: /tux.svg
heroText: Kentucky Open Source Society
tagline: A community of enthusiasts, knowledge seekers, professionals, amateurs, and anyone with an interest in Open Source software and philosophies — based in Louisville, KY.
features:
  - title: Monthly Meetings
    details: In-person on the 2nd Wednesday of each month at 6:30 pm US Eastern, at 700 N Hurstbourne Pkwy, Louisville, KY.
  - title: Presentations & Discussion
    details: One or two scheduled presentations, plus open Q&A and discussion. Beginners and experts both welcome!
  - title: Open Source for All
    details: Whether you're an enthusiast, student, professional, or just curious about open source — you belong here.
---

## Meetings

We meet in-person on the 2nd Wednesday of each month.  Our next meeting is <span v-if="nextMeeting">{{ nextMeeting }}</span><span v-else>the 2nd Wednesday of each month</span>.

* 6:30pm US Eastern time
* [700 N Hurstbourne Pkwy, Louisville, KY, 40222
  USA](https://goo.gl/maps/eoeeP7YbLnpqShuaA)
* First floor: the 700 room
  * You can walk in either entrance to the building; the conference
    room is on the same floor as the entrace doors.
  * The conference room is easy to find: it has floor-to-ceiling glass
    walls and glass doors.

We tend to have one or two scheduled presentations, and there is
generally lots of open questions and discussion.  Beginners and experts
are welcome!

Our meeting space is generously provided by [Tek
Systems](https://www.teksystems.com/).

## Links

* [Google Group mailing
  list](https://groups.google.com/a/kyoss.dev/g/kyoss-discuss)
  * This mailing list is where most of our announcements, information,
    and discussions take place.
* [GitHub](https://github.com/KYOSS/)
  * Pull requests are welcome, especially on the website repository!
* [Meetup](https://www.meetup.com/LouisvilleOpenSourceProgramming/)
  * The Meetup group exists, but is secondary to the KYOSS mailing
    list and this web site.

<script>
export default {
  data() {
    return { nextMeeting: '' }
  },
  mounted() {
    function secondWednesday(year, month) {
      const firstDayOfWeek = new Date(year, month, 1).getDay();
      const firstWed = 1 + (3 - firstDayOfWeek + 7) % 7;
      return new Date(year, month, firstWed + 7);
    }
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    let meeting = secondWednesday(today.getFullYear(), today.getMonth());
    if (today > meeting) {
      const nextMonth = today.getMonth() === 11 ? 0 : today.getMonth() + 1;
      const nextYear = today.getMonth() === 11 ? today.getFullYear() + 1 : today.getFullYear();
      meeting = secondWednesday(nextYear, nextMonth);
    }
    this.nextMeeting = meeting.toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
  }
}
</script>
