import MealForm from "../../../../components/MealForm/MealForm";

const AddMeals = () => {

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Add a New Meal</h2>
      <MealForm postUrl="/add-meal" button={false} />
    </div>
  );
};

export default AddMeals;
