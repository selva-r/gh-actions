import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the main content and counter', () => {
    const html = renderToStaticMarkup(<App />)

    expect(html).toContain('Get started')
    expect(html).toContain('Count is 0')
    expect(html).toContain('Documentation')
  })
})
