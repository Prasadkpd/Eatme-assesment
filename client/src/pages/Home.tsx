import Footer from '../components/footer';
import MenuList from '../components/menuList';
import Navbar from '../components/navbar';

const Home = () => {
  return (
    <div className="container-fluid">
      <Navbar />
      {/* <TopCard /> */}
      <MenuList />
      <Footer />
    </div>
  );
};

export default Home;
