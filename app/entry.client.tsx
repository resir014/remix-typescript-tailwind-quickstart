import { hydrate } from 'react-dom';
import { RemixBrowser } from 'remix';
import { setupTwind } from './twind';

setupTwind();
hydrate(<RemixBrowser />, document);
