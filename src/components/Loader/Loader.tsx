import { Ring } from '@uiball/loaders';

const Loader = () => {
  return (
    <div className="loader">
      <Ring size={40} lineWeight={5} speed={2} color="#6ee7b7" />
    </div>
  );
};

export default Loader;
