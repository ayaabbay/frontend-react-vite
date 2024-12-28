export const getDesignTokens = (mode) => ({
    palette: {
      mode, // C'est correct de mettre le mode ici
      ...(mode === 'light' ? {
        // Les styles pour le mode "light"
        // Exemple (remarquez les propriétés que vous aviez commentées):
        // primary: amber,
        // divider: amber[200],
        // test: {
        //    primary: grey[900],
        //    secondary: grey[800],
        // },
      } : {
        // Les styles pour le mode "dark"
        // Exemple (remarquez les propriétés commentées):
        // primary: deepOrange,
        // divider: deepOrange[700],
        // background: {
        //    default: deepOrange[900],
        //    paper: deepOrange[900],
        // },
        // test: {
        //    primary: '#fff',
        //    secondary: grey[500],
        // },
      })
    }
  });
  