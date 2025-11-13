import Navigation from "./Nav";
import Footer from "./Footer";

interface NavigationProps {
  children: React.ReactNode;
}

const DisplayLayout = (props: NavigationProps) => {
  return (
    <div>
      <Navigation />
      {props.children}
      <Footer />
    </div>
  );
};

export default DisplayLayout;
