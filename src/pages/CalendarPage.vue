<script setup lang="ts">

import {computed, ref} from 'vue'

import {
  QCalendar,
  addToDate,
  parseDate,
  parseTimestamp,
  today,
  Timestamp
} from '@quasar/quasar-ui-qcalendar'

function getCurrentDay (day: number): string {
  const newDay = new Date()
  newDay.setDate(day)
  const tm = parseDate(newDay)
  return tm?.date as string
}

const $calendar = ref()
const selectedDate = ref(today())

const events = [
  {
    id: 1,
    title: '1st of the Month',
    details: 'Everything is funny as long as it is happening to someone else',
    date: getCurrentDay(1),
    bgcolor: 'orange'
  },
  {
    id: 2,
    title: 'Sisters Birthday',
    details: 'Buy a nice present',
    date: getCurrentDay(4),
    bgcolor: 'green',
    icon: 'fas fa-birthday-cake'
  },
  {
    id: 3,
    title: 'Meeting',
    details: 'Time to pitch my idea to the company',
    date: getCurrentDay(10),
    time: '10:00',
    duration: 120,
    bgcolor: 'red',
    icon: 'fas fa-handshake'
  },
  {
    id: 4,
    title: 'Lunch',
    details: 'Company is paying!',
    date: getCurrentDay(10),
    time: '11:30',
    duration: 90,
    bgcolor: 'teal',
    icon: 'fas fa-hamburger'
  },
  {
    id: 5,
    title: 'Visit mom',
    details: 'Always a nice chat with mom',
    date: getCurrentDay(20),
    time: '17:00',
    duration: 90,
    bgcolor: 'grey',
    icon: 'fas fa-car'
  },
  {
    id: 6,
    title: 'Conference',
    details: 'Teaching Javascript 101',
    date: getCurrentDay(22),
    time: '08:00',
    duration: 540,
    bgcolor: 'blue',
    icon: 'fas fa-chalkboard-teacher'
  },
  {
    id: 7,
    title: 'Girlfriend',
    details: 'Meet GF for dinner at Swanky Restaurant',
    date: getCurrentDay(22),
    time: '19:00',
    duration: 180,
    bgcolor: 'teal',
    icon: 'fas fa-utensils'
  },
  {
    id: 8,
    title: 'Rowing',
    details: 'Stay in shape!',
    date: getCurrentDay(27),
    bgcolor: 'purple',
    icon: 'rowing',
    days: 2
  },
  {
    id: 9,
    title: 'Fishing',
    details: 'Time for some weekend R&R',
    date: getCurrentDay(27),
    bgcolor: 'purple',
    icon: 'fas fa-fish',
    days: 2
  },
  {
    id: 10,
    title: 'Vacation',
    details: 'Trails and hikes, going camping! Don\'t forget to bring bear spray!',
    date: getCurrentDay(29),
    bgcolor: 'purple',
    icon: 'fas fa-plane',
    days: 5
  }
]

const eventsMap = computed(() => {
  let map: Record<string, typeof events[0][]> = {}

  if (events.length > 0) {
    events.forEach(event => {
      (map[event.date] = (map[event.date] || [])).push(event)

      if (event.days !== undefined) {
        let tm = parseTimestamp(event.date)
        let days = event.days
        // add a new event for each day
        // skip 1st one which would have been done above
        do {
          tm = addToDate(tm as Timestamp, { day: 1 })
          if (!map[tm.date]) {
            map[tm.date] = []
          }
          map[tm.date].push(event)
          // already accounted for 1st day
        } while (--days > 1)
      }
    })
  }
  return map
})

const badgeClasses = (event: typeof events[0], type: string) => {
  return {
    [ `text-white bg-${ event.bgcolor }` ]: true,
    'rounded-border': true
  }
}

const badgeStyles = (event: typeof events[0], type: string) => {
  const s = {}
  // s.left = day.weekday === 0 ? 0 : (day.weekday * this.parsedCellWidth) + '%'
  // s.top = 0
  // s.bottom = 0
  // s.width = (event.days * this.parsedCellWidth) + '%'
  return s
}

const onToday = () => {
  $calendar.value.moveToToday()
}

const onPrev = () => {
  $calendar.value.prev()
}

const onNext = () => {
  $calendar.value.next()
}

</script>

<template>

<q-page class="q-pa-lg">
  <div class="row justify-center full-height">
    <div class="col-12 q-mb-sm row justify-end">
      <q-btn no-caps color="dark" class="btn_style q-mr-sm" @click="onToday">Today</q-btn>
      <q-btn no-caps color="dark" class="btn_style q-mr-sm" @click="onPrev">&lt;</q-btn>
      <q-btn no-caps color="dark" class="btn_style q-mr-sm" @click="onNext">&gt;</q-btn>
    </div>

    <q-calendar
      mode="month"
      ref="$calendar"
      v-model="selectedDate"
      animated
      bordered
      focusable
      hoverable
      no-active-date
      :day-min-height="134"
      :day-height="0"
      class="card_style bg-grey-1"
    >
      <template #day="{ scope: { timestamp } }">
        <template
          v-for="event in eventsMap[timestamp.date]"
          :key="event.id"
        >
          <div
            :class="badgeClasses(event, 'day')"
            :style="badgeStyles(event, 'day')"
            class="my-event"
          >
            <div class="title q-calendar__ellipsis">
              {{ event.title + (event.time ? ' - ' + event.time : '') }}
              <q-tooltip>{{ event.details }}</q-tooltip>
            </div>
          </div>
        </template>
      </template>
    </q-calendar>
  </div>
</q-page>

</template>

<style scoped lang="sass">

.my-event
  position: relative
  font-size: 12px
  width: 100%
  margin: 2px 0 0 0
  justify-content: center
  text-overflow: ellipsis
  overflow: hidden
  cursor: pointer
  border-radius: 8px !important

.title
  position: relative
  display: flex
  justify-content: center
  align-items: center
  height: 100%

.text-white
  color: white

.bg-blue
  background: blue

.bg-green
  background: green

.bg-orange
  background: orange

.bg-red
  background: red

.bg-teal
  background: teal

.bg-grey
  background: grey

.bg-purple
  background: purple

.rounded-border
  border-radius: 2px

</style>
