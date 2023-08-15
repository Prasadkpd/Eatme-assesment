import ListView from '../components/ListView';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import TopCard from '../components/topCard';

const Home = () => {
  return (
    <div className="container-fluid">
      <Navbar />
      <TopCard />
      <ListView />
      <Footer />
    </div>
  );
};

export default Home;
