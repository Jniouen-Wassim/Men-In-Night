import { appWithTranslation } from 'next-i18next';
import '../styles/root.scss'

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

export default appWithTranslation(MyApp);
