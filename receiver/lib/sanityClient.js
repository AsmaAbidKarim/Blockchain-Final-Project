import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'nw03is8d',
  dataset: 'production',
  apiVersion: 'v1',
  token:
    'skMdJzmYk1ksRGMVqQibpjcoYecyawvRfBm7RcPpGdtmrYGJoNJ3V1spSibAsXk5Lwwo4A9rQkS8aFwC3PY3Sunl6oT06A6eSQ5ie8bXACiU84L2n5OC5GSeyNa6TvXFxWoQlAmjrVuybuOpsVZYXG5GKAAXOlVrLkswnE1p0o8A8C49jk2J',
  useCdn: false,
})