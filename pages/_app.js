import '../styles/global.css';
import Layout from '../components/Layout';
import { LanguageProvider } from '../context/LanguageContext';

// eslint-disable-next-line no-unused-vars
function Aplicacion({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LanguageProvider>
  );
}

export default Aplicacion;