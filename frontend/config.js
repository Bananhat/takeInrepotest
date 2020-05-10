export default {
    bucket: {
      slug: process.env.COSMIC_BUCKET || 'take-in',
      read_key: process.env.COSMIC_READ_KEY || '6hVpk8CGIN2pqrlLxRwHcLgZioNLPqtxJJjvkdMEUh9vnC5yov',
      write_key: process.env.COSMIC_WRITE_KEY || '',
      port: process.env.PORT || '',
      snipcart_api_key: process.env.SNIPCART_KEY || 'ZDU2Y2RlZDItODMwYS00MzUzLWI1N2UtYzk4YzU2OWE5OGVhNjM3MjQyNzkyOTkxNzk2MDMw'
    }
  }