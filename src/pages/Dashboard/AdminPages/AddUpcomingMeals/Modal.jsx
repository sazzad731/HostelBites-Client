import MealForm from "../../../../components/MealForm/MealForm";

const Modal = ({ setShowModal, setUploaded }) => {
  return (
    <dialog open className="modal">
      <div className="modal-box w-11/12 max-w-2xl">
        <h3 className="font-bold text-xl mb-4">Add Upcoming Meal</h3>
        <MealForm
          postUrl="/upcoming-meals"
          button={true}
          setShowModal={setShowModal}
          setUploaded={setUploaded}
        />
      </div>
    </dialog>
  );
};

export default Modal;