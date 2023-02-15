import { JellyTriangle } from '@uiball/loaders';

const Loader = () => {
  return (
    <div className="loader">
      <JellyTriangle size={80} speed={1.75} color="#6ee7b7" />
    </div>
  );
};

export default Loader;
