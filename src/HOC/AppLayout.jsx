import ScratchCardModal from "../components/ScratchModal";

const AppLayout = ({ children }) => {
  return (
    <div>
      <ScratchCardModal />
      {children} {/* Render the rest of your app */}
    </div>
  );
};

export default AppLayout;
