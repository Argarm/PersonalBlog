import '../styles/global.css';
import Layout from '../components/Layout';
import { LanguageProvider } from '../context/LanguageContext';
import { ThemeProvider } from 'next-themes';

function Aplicacion({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <LanguageProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default Aplicacion;