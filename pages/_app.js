import '../styles/global.css';
import Layout from '../components/Layout';
import { LanguageProvider } from '../context/LanguageContext';

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