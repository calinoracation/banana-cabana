export default function Index() {
  return (
    <div style={{ position: 'absolute', inset: '0', display: 'flex', alignItems: 'center', flexDirection: 'column', paddingTop: '10vh' }}>
      <img 
        alt="Banana Cabana art, A Banana in a groovy cabana on the beach with another banana watching the sunset." 
        style={{ aspectRatio: '1', inset: '0', objectFit: 'cover', position: 'fixed', height: '100%', width: '100%' }} 
        src="/cabana.jpg" 
      />
      <div style={{ 
        display: 'grid',
        color: 'hsl(302deg 100% 50%)', 
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"', 
        justifyItems: 'center',
        width: '100%',
        zIndex: 1 
      }}>
      <h1 style={{ 
        fontSize: '14vw', 
        margin: '0',
        padding: '0',
        textShadow: '2px 0 0 #f4fd56, -2px 0 0 #f4fd56, 0 2px 0 #f4fd56, 0 -2px 0 #f4fd56, 1px 1px #f4fd56, -1px -1px 0 #f4fd56, 1px -1px 0 #f4fd56, -1px 1px 0 #f4fd56',
        }
      }>Coming Soon</h1>
      <div style={{ 
        color: '#fff', 
        textAlign: 'center', 
        fontSize: '6vw',
        fontWeight: '600',
        margin: '0',
        padding: '1vw',
        textShadow: '2px 0 0 rgba(0, 0, 0, 0.2), -2px 0 0 rgba(0, 0, 0, 0.2), 0 2px 0 rgba(0, 0, 0, 0.2), 0 -2px 0 rgba(0, 0, 0, 0.2), 1px 1px rgba(0, 0, 0, 0.2), -1px -1px 0 rgba(0, 0, 0, 0.2), 1px -1px 0 rgba(0, 0, 0, 0.2), -1px 1px 0 rgba(0, 0, 0, 0.2)', 
      }}>We create a beautiful and comfortable space for you and your guests to enjoy anywhere in Mission Bay. Let us do the work for you</div>
      </div>
      <a href="https://www.instagram.com/bananacabanasandiego/">
        <img alt="QR Code for Instagram profile bananacabanasandiego" src="/qrcode.jpg" style={{ borderRadius: 13, margin: '0 auto 30px', position: 'fixed', bottom: '0', left: '0', right: '0', width: '155px' }} />
      </a>
    </div>
  );
}
