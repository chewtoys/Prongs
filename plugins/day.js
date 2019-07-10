import Vue from 'vue'
//import dayjs from 'dayjs'
import dayjs from 'dayjs'

export default ({ app }, inject) => {
	inject('dayjs', dayjs)
}
