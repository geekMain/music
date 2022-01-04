let api_base_url = ''

if (process.env.NODE_ENV === 'development') {
  api_base_url = 'https://netease-cloud-music-api-hazel-tau.vercel.app'
} else if (process.env.NODE_ENV === 'production') {
  api_base_url = 'https://netease-cloud-music-api-hazel-tau.vercel.app/'
}

export default { api_base_url }
