import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const Background = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Background;
