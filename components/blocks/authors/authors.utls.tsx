import { Aravind, Authors, Revanth, Rohith } from "./authors";

export const getAuthorComponent = (author: Authors) => {
    switch (author) {
      case 'Rohith':
        return <Rohith />;
      case 'Revanth':
        return <Revanth />; // You'll need to create a Revanth component
      case 'Aravind':
        return <Aravind />; // You'll need to create an Aravind component
      default:
        return null;
    }
  };