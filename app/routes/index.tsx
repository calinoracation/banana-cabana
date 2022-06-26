export default function Index() {
  return (
    <div style={{ position: 'absolute', inset: '0', display: 'flex', alignItems: 'center', flexDirection: 'column', paddingTop: '15vh' }}>
      <img 
        alt="Banana Cabana art, A Banana in a groovy cabana on the beach with another banana watching the sunset." 
        style={{ aspectRatio: '1', inset: '0', objectFit: 'cover', position: 'fixed', height: '100%', width: '100%' }} 
        src="/cabana.jpg" 
      />
      <h1 style={{ 
        color: 'hsl(302deg 100% 50%)', 
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"', 
        fontSize: '14vw', 
        margin: '0',
        padding: '0',
        textShadow: '2px 0 0 #f4fd56, -2px 0 0 #f4fd56, 0 2px 0 #f4fd56, 0 -2px 0 #f4fd56, 1px 1px #f4fd56, -1px -1px 0 #f4fd56, 1px -1px 0 #f4fd56, -1px 1px 0 #f4fd56',
        zIndex: 1 
        }
      }>Coming Soon</h1>
    </div>
  );
}
