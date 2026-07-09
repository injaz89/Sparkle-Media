const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = process.env.PORT || 3000
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      
      // Prevent LiteSpeed server and browser from caching HTML pages so updates show instantly.
      // We do not disable caching for static assets under /_next/ or other file types.
      const isStaticAsset = parsedUrl.pathname.startsWith('/_next/') || 
                            parsedUrl.pathname.startsWith('/static/') ||
                            parsedUrl.pathname.match(/\.(png|jpg|jpeg|gif|webp|svg|ico|css|js|woff|woff2)$/i);
      
      if (!isStaticAsset) {
        res.setHeader('X-LiteSpeed-Cache-Control', 'no-cache');
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      }

      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  }).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://${hostname}:${port}`)
  })
})
