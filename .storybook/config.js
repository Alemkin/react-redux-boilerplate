import { configure } from '@storybook/react'

function requireAll (requireContext) {
  return requireContext.keys().map(requireContext)
}

function loadStories() {
  requireAll(require.context('../app/', true, /story\.js$/))
}

configure(loadStories, module)
