import React from 'react';
import {
  render,
  Grid,
  Link,
  Text
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Actions::RenderBefore', () => <App />);

function App() {
  return (
      <Grid
        columns={['auto','auto','auto','auto']}
        rows={['auto']}
        spacing="loose"
        >
        <Link to='https://www.speakeasyco.com/'>
          <Text size="small">Powered By SpeakeasyCo</Text>
        </Link>
        <Link to='https://www.speakeasyco.com/privacy-policy'>
          <Text size="small">Privacy Policy</Text>
        </Link>
        <Link to='https://www.speakeasyco.com/terms-and-conditions'>
          <Text size="small">Terms & Conditions</Text>
        </Link>
        <Link to='https://www.speakeasyco.com/shipping-times'>
          <Text size="small">Shipping & Return Information</Text>
        </Link>
      </Grid>
  );
}