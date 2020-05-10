document.addEventListener('snipcart.ready', () => {
    // You can safely use window.Snipcart here
    Snipcart.api.session.setCurrency('eur');
    Snipcart.api.session.setLanguage('fr');
  });