import { browser } from '$app/env'
import { writable } from 'svelte/store'
import { Theme } from '$lib/utils/types'

function createThemeStore() {
	const THEME_KEY = 'theme'
	const DEFAULT_THEME_VALUE = Theme.DARK

	const { subscribe, set, update } = writable(DEFAULT_THEME_VALUE)

	if (browser) {
		const data = localStorage?.getItem(THEME_KEY) as Theme

		if (data) {
			set(data)
		}
	}

	subscribe((value) => {
		if (browser) {
			localStorage?.setItem(THEME_KEY, value)
		}
	})

	function applyDark() {
		document.querySelector('html').classList.add(Theme.DARK)
	}

	function toggle() {
		update((state) => {
			state = state === Theme.DARK ? Theme.LIGHT : Theme.DARK
			return state
		})
		document.querySelector('html').classList.toggle(Theme.DARK)
	}

	return {
		subscribe,
		set,
		applyDark,
		toggle
	}
}

export const theme = createThemeStore()
